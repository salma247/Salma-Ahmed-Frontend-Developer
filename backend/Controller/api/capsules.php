<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = [];
    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $limit = isset($_GET['limit']) ? $_GET['limit'] : 10;
    $start = ($page - 1) * $limit;
    
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.spacexdata.com/v4/capsules",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
    ));
    
    $response = curl_exec($curl);
    $data = json_decode($response, true);


    $data = array_slice($data, $start, $limit);
    //close curl
    curl_close($curl);

    header('Content-Type: application/json');
    echo json_encode($data);
}
