<?php
require './slim-skeleton/vendor/autoload.php';
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

$app = AppFactory::create();

$app->addRoutingMiddleware();
$errorMiddleware = $app->addErrorMiddleware(true, true, true);

function sortBy($link, $bmp, $mood, $genre, $title, $key){
    $sql = "SELECT * FROM base_information";

    $conditions = [];
    if (!empty($bmp)) {
        $conditions[] = "bpm = '$bmp'";
    }
    if (!empty($mood)) {
        $conditions[] = "mood LIKE '%" . mysqli_real_escape_string($link, $mood) . "%'";
    }
    if (!empty($genre)) {
        $conditions[] = "genre = '$genre'";
    }
    if (!empty($title)) {
        $conditions[] = "title = '$title'";
    }

    if (!empty($key)) {
        $conditions[] = "`key` = '$key'";
    }

    if (!empty($conditions)) {
        $sql .= " WHERE " . implode(" AND ", $conditions);
    }

    $result = mysqli_query($link, $sql);

    $data = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    mysqli_free_result($result);
    mysqli_close($link);

    return $data;
}

function add_user($data, $conn){
    $id = mysqli_real_escape_string($conn, $data['new_member']['id']);
    $img = mysqli_real_escape_string($conn, $data['new_member']['img']);
    $title = mysqli_real_escape_string($conn, $data['new_member']['title']);
    $time = mysqli_real_escape_string($conn, $data['new_member']['time']);
    $bpm = mysqli_real_escape_string($conn, $data['new_member']['bpm']);
    $tags = mysqli_real_escape_string($conn, $data['new_member']['tags']);
    $link = mysqli_real_escape_string($conn, $data['new_member']['link']);
    $price = mysqli_real_escape_string($conn, $data['new_member']['price']);
    $key = mysqli_real_escape_string($conn, $data['new_member']['key']);
    $mood = mysqli_real_escape_string($conn, $data['new_member']['mood']);
    $genre = mysqli_real_escape_string($conn, $data['new_member']['genre']);
    $soundSrc = mysqli_real_escape_string($conn, $data['new_member']['soundSrc']);


    $sql = "INSERT INTO `base_information` 
            (`id`, `img`, `title`, `time`, `bpm`, `tags`, `link`, `price`, `key`, `mood`, `genre`, `soundSrc`) 
            VALUES 
            ('$id', '$img', '$title', '$time', '$bpm', '$tags', '$link', '$price', '$key', '$mood', '$genre', '$soundSrc')";

    if (mysqli_query($conn, $sql)) {
        return true;
    } else {
        echo "Ошибка: " . mysqli_error($conn);
        return false;
    }
}

$app->add(function ($request, $handler) {
    $response = $handler->handle($request);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->get('/database', function (Request $request, Response $response, array $args) {
    $link = mysqli_connect("localhost", "root", "", "INFO");

    $queryParams = $request->getQueryParams();
    $bpm = isset($queryParams['bpm']) ? $queryParams['bpm'] : "";
    $mood = isset($queryParams['mood']) ? $queryParams['mood'] : "";
    $genre = isset($queryParams['genre']) ? $queryParams['genre'] : "";
    $title = isset($queryParams['title']) ? $queryParams['title'] : "";
    $key = isset($queryParams['key']) ? $queryParams['key'] : "";

    $sorted_data = sortBy($link, $bpm, $mood, $genre, $title, $key);

    $response->getBody()->write(json_encode($sorted_data));
    return $response->withHeader('Content-Type', 'application/json');
});

// $app->add(function ($request, $handler) { #Request access
//     $response = $handler->handle($request);
//     return $response
//             ->withHeader('Access-Control-Allow-Origin', '*')
//             ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
//             ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
// });

$app->post('/POST', function (Request $request, Response $response, $args) {
    $uploadedFiles = $request->getUploadedFiles();
    $uploadedFile = $uploadedFiles['file'];
    $uploadPath = $request->getParsedBody()['path'];

    if ($uploadedFile->getError() == UPLOAD_ERR_OK) {
        $uploadedFileName = $uploadedFile->getClientFilename();
        $uploadedFile->moveTo($uploadPath . $uploadedFileName);
        echo "Add, $uploadPath";
        return $response->withHeader('Content-Type', 'application/json');
    } else {
        echo "Error, $uploadPath, " . $uploadedFile->getError();
        return $response->withHeader('Content-Type', 'application/json');
    }
});

$app->post('/Database/add_user', function (Request $request, Response $response, $args) {
    $data = json_decode(file_get_contents('php://input'), true);
    print_r($data);
    $link = mysqli_connect("localhost", "root", "", "INFO");

    add_user($data, $link);

    mysqli_close($link);

    return $response->withHeader('Content-Type', 'application/json');
});

$app->post('/Database/action', function (Request $request, Response $response, $args) {
    $data = json_decode(file_get_contents('php://input'), true);
    print_r($data);
    $link = mysqli_connect("localhost", "root", "", "INFO");

    $beat_name = mysqli_real_escape_string($link, $data['beatName']);
    $login = mysqli_real_escape_string($link, $data['login']);
    $action = mysqli_real_escape_string($link, $data['action']);
    $text = mysqli_real_escape_string($link, $data['text']);

    $query = "INSERT INTO actions (beat_name, login, action, value) VALUES ('$beat_name', '$login', '$action', '$text')";
    mysqli_query($link, $query);

    // mysqli_close($link);

    return $response->withHeader('Content-Type', 'application/json');
});


$app->post('/Database/delete_user', function (Request $request, Response $response, $args) {
    $data = json_decode(file_get_contents('php://input'), true);
    print_r($data);

    $link = mysqli_connect("localhost", "root", "", "INFO");

    $id = mysqli_real_escape_string($link, $data['id']);
    $sql = "DELETE FROM `base_information` WHERE `id` = '{$id}'";

    if (mysqli_query($link, $sql)) {
        echo "Запись успешно удалена из базы данных";
    } else {
        echo "Ошибка при выполнении запроса: " . mysqli_error($link);
    }

    mysqli_close($link);

    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();
