<?php
class SearchController extends ApiController {
    public function handleRequest() {
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method === 'POST') {
            $this->verifyToken();
            $this->post();
        } else {
            http_response_code(405);
        }
    }

    protected function post() {
        $data = json_decode(file_get_contents('php://input'), true);
        $limit = isset($data['options']['limit']) ? intval($data['options']['limit']) : 10;
        $page = isset($data['options']['page']) ? intval($data['options']['page']) : 1;

        $criteria = [];
        if (isset($data['status']) && $data['status'] !== '') {
            $criteria['status'] = $data['status'];
        }
        if (isset($data['type']) && $data['type'] !== '') {
            $criteria['type'] = $data['type'];
        }
        if (isset($data['serial']) && $data['serial'] !== '') {
            $criteria['serial'] = $data['serial'];
        }

        $query = [
            'query' => $criteria,
            'options' => [
                'limit' => $limit,
                'page' => $page,
            ],
        ];
        
        $result = $this->search($query);
        $this->response($result);
    }

    protected function search($query) {
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

    protected function response($data, $code = 200) {
        http_response_code($code);
        echo json_encode($data);
        exit();
    }

}
