<?php
require __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();
$dotenv->required(['SECRECT_KEY']);
use \Firebase\JWT\JWT;

class LoginController extends ApiController
{
    private $secertKey = '';

    public function __construct($apiUrl)
    {
        parent::__construct($apiUrl);
        $this->secertKey = $_ENV['SECRECT_KEY'];
    }

    public function handleRequest()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method === 'POST') {
            $this->post();
        } else {
            http_response_code(405);
        }
    }

    protected function post()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $username = $data['username'];
        $password = $data['password'];

        if ($username === 'admin' && $password === 'admin') {
            $token = $this->generateToken();
            $this->response(['token' => $token]);
        } else {
            $this->response(['error' => 'Invalid username or password'], 401);
        }

    }

    private function generateToken()
    {
        $payload = [
            'iss' => 'localhost',
            'aud' => 'localhost',
            'iat' => time(),
            'exp' => time() + 60 * 60,
            'sub' => 'admin'
        ];
        return JWT::encode($payload, $this->secertKey, 'HS256');
    }

    protected function response($data, $code = 200)
    {
        http_response_code($code);
        echo json_encode($data);
        exit();
    }
    
}
