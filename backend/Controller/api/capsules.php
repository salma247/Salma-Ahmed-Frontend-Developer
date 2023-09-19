<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 3600');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $apiUrl = 'https://api.spacexdata.com/latest';
    
    $requestData = file_get_contents('php://input');
    $data = json_decode($requestData, true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid JSON data in the request"]);
        exit;
    }

    $curl = curl_init($apiUrl.'/capsules/query');

    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($curl, CURLOPT_HTTPHEADER, [
        "Content-Type: application/json",
    ]);

    $response = curl_exec($curl);
    $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

    curl_close($curl);

    header('Content-Type: application/json');

    if ($httpCode === 200) {
        echo $response;
    } else {
        // Handle API errors and return appropriate status code
        http_response_code($httpCode);
        echo $response;
    }
}
