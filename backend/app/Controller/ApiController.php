<?php

require 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/..');
$dotenv->load();
$dotenv->required(['SECRECT_KEY']);
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class ApiController
{
    protected $apiUrl;

    public function __construct($apiUrl)
    {
        $this->apiUrl = $apiUrl;
    }

    protected function verifyToken(){
        $headers = getallheaders();
        if (!preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
            http_response_code(401);
            echo json_encode(['error' => 'No token found in request headers']);
            exit;
        }
        $token = $matches[1];
        try {
            $secretKey = $_ENV['SECRECT_KEY'];
            $decoded = JWT::decode($token, new Key($secretKey, 'HS256'));
        } catch (Exception $e) {
            http_response_code(401);
            echo $matches[1];
            echo json_encode(['error' => 'Invalid token']);
            exit;
        }
    }
}

