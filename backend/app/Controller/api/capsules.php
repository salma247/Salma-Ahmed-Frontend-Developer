<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: Content-Type');
$apiUrl = 'https://api.spacexdata.com/latest';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
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
        http_response_code($httpCode);
        echo $response;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $id = $_GET['id'];

    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Missing required parameter 'id'"]);
        exit;
    }

    $curl = curl_init($apiUrl.'/capsules/'.$id);

    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($curl);
    $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

    curl_close($curl);

    header('Content-Type: application/json');

    if ($httpCode === 200) {
        echo $response;
    } else {
        http_response_code($httpCode);
        echo $response;
    }
}

