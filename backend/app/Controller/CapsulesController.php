<?php

class CapsulesController extends ApiController {
    public function handleRequest() {
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method === 'POST') {
            $this->verifyToken();
            $this->post();
        } elseif ($method === 'GET') {
            $this->verifyToken();
            $this->get();
        } else {
            http_response_code(405);
        }
    }

    protected function post() {
        $data = json_decode(file_get_contents('php://input'), true);
        $limit = isset($data['options']['limit']) ? intval($data['options']['limit']) : 10;
        $page = isset($data['options']['page']) ? intval($data['options']['page']) : 1;
        $criteria = [];
        if (isset($data['status']) && $data['status'] !== 'all') {
            $criteria['status'] = $data['status'];
        }
        if (isset($data['type']) && $data['type'] !== '') {
            $criteria['type'] = $data['type'];
        }
        if (isset($data['serial']) && $data['serial'] !== '') {
            $criteria['serial'] = $data['serial'];
        }

        $query = [];

        if (empty($criteria)) {
            $query = [
                'options' => [
                    'limit' => $limit,
                    'page' => $page,
                ],
            ];
        } else {
            $query = [
                'query' => $criteria,
                'options' => [
                    'limit' => $limit,
                    'page' => $page,
                ],
            ];
        }
        $result = $this->query($query);
        $this->response($result);
    }

    protected function get() {
        $id = $_GET['id'];
        if (!$id) {
            http_response_code(400);
            echo json_encode(['error' => 'Missing required parameter \'id\'']);
            exit;
        }
        $result = $this->getById($id);
        $this->response($result);
    }

    protected function query($query) {
        $curl = curl_init($this->apiUrl . 'capsules/query');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($query));

        curl_setopt($curl, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
        ]);

        $response = curl_exec($curl);
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        if ($httpCode !== 200) {
            $this->response(['error' => 'Something went wrong'], $httpCode);
        }

        curl_close($curl);
        return json_decode($response, true);
    }

    protected function getById($id) {
        $curl = curl_init($this->apiUrl . 'capsules/' . $id);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($curl);
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        if ($httpCode !== 200) {
            $this->response(['error' => 'Something went wrong'], $httpCode);
        }

        curl_close($curl);
        return json_decode($response, true);
    }

    protected function response($data, $code = 200) {
        http_response_code($code);
        echo json_encode($data);
        exit();
    }
}

