<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['username']) && isset($data['password'])) {
        $username = $data['username'];
        $password = $data['password'];


        $authenticated = false;


        if ($username === 'admin' && $password === 'admin') {
            $authenticated = true;
        }


        if ($authenticated) {
            $response = ['message' => 'Login successful'];
            http_response_code(200);
        } else {
            $response = ['message' => 'Login failed'];
            http_response_code(401);
        }

        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        $response = ['message' => 'Invalid request'];
        http_response_code(400);
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}
