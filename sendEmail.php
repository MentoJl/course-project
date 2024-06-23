<?php
header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: POST, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit();
}

require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data['email']) {

    }

    if (!isset($data['email']) || !isset($data['title']) || !isset($data['name']) || !isset($data['message'])) {
        http_response_code(400);
        echo json_encode(['message' => 'Invalid input']);
        exit;
    }

    $email = $data['email'];
    $title = $data['title'];
    $name = $data['name'];
    $message = $data['message'];
    $projectName = ($data['projectName'] !== '') ? $data['projectName'] : '';
    $phone = ($data['phone'] !== '') ? $data['phone'] : '';
    $budget = ($data['budget']) ? $data['budget'] : '';

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['EMAIL'];
        $mail->Password = $_ENV['PASSWORD'];
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($_ENV['EMAIL'], htmlspecialchars($name));
        $mail->addAddress($_ENV['EMAIL']);

        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = ($projectName === '' && $phone === '' && $budget === '') 
        ? htmlspecialchars($message) . '<p/>My Mail to contact me: ' . htmlspecialchars($email) 
        : 'Project: ' . htmlspecialchars($projectName) 
        . '<p/>Budget: ' . htmlspecialchars($budget)
        . '<p/>' . htmlspecialchars($message)
        . '<p/>My Mail to contact me: ' . htmlspecialchars($email)
        . '<p/>Phone number: ' . htmlspecialchars($phone);

        $mail->send();
        echo json_encode(['message' => 'Email sent']);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['message' => 'Message could not be sent.', 'error' => $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
}
?>