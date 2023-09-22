<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: authorization, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Type: text/plain');
    die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require 'Controller/ApiController.php';
require 'Controller/LoginController.php';
require 'Controller/SearchController.php';
require 'Controller/CapsulesController.php';

$apiUrl = 'https://api.spacexdata.com/latest/';

$loginController = new LoginController($apiUrl);
$searchController = new SearchController($apiUrl);
$capsulesController = new CapsulesController($apiUrl);

$uri = $_SERVER['REQUEST_URI'];
$uri = explode('/', $uri);
$uri = array_filter($uri);
$uri = array_slice($uri, 1);

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    
}

if (count($uri) === 1 && $uri[0] === 'login') {
    $loginController->handleRequest();
} elseif (count($uri) === 1 && $uri[0] === 'search') {
    $searchController->handleRequest();
}elseif (count($uri) === 1) {
    $split = explode('?', $uri[0]);
    if ($split[0] === 'capsules') {
        $capsulesController->handleRequest();
    } else {
        http_response_code(404);
        echo 'Not found';
    }
} else {
    http_response_code(404);
    echo 'Not found';
}
