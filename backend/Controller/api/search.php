<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 3600');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $apiUrl = 'https://api.spacexdata.com/latest/';
   
    $requestData = file_get_contents('php://input');
    $data = json_decode($requestData, true);

    if (!$data) {
        
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON data in the request']);
        exit;
    }
    $criteria = [];

    if (isset($data['status'])) {
       
        $status = $data['status'];
        if ($status !== 'all') {
            $criteria['status'] = $status;
        }
    }

    if (isset($data['type'])) {
        $criteria['type'] = $data['type'];
    }

    if (isset($data['serial'])) {
        $criteria['serial'] = $data['serial'];
    }

   
    $query = [
        'query' => $criteria,
        'options' => [
            'limit' => 10,
        ],
    ];

    $curl = curl_init($apiUrl);

    
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($query));
    curl_setopt($curl, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
    ]);


    $response = curl_exec($curl);
    $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

   
    curl_close($curl);

    
    header('Content-Type: application/json');
    http_response_code($httpCode);
    echo $response;
    exit;
}


