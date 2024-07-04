<?php
require './slim-skeleton/vendor/autoload.php';
require_once 'vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

$app = AppFactory::create();

$app->addRoutingMiddleware();
$errorMiddleware = $app->addErrorMiddleware(true, true, true);

function sortBy($link, $bmp, $mood, $genre, $title){
    $sql = "SELECT * FROM base_information";
    $titles = explode(",", $title);

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
        $conditions[] = "title IN ('" . implode("','", $titles) . "')";
    }

    if (!empty($conditions)) {
        $sql .= " WHERE " . implode(" AND ", $conditions);
    }
    if (!empty($title)) { #change order
        $sql .= " ORDER BY FIELD(title, '" . implode("','", $titles) . "')";
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

function add_beat($data, $conn){
    $conn = mysqli_connect("localhost", "root", "", "INFO");
    $img = mysqli_real_escape_string($conn, $data['newBeat']['img']);
    $title = mysqli_real_escape_string($conn, $data['newBeat']['title']);
    $time = "";
    $bpm = mysqli_real_escape_string($conn, $data['newBeat']['bpm']);
    $tags = mysqli_real_escape_string($conn, json_encode($data['newBeat']['tags']));
    $key = mysqli_real_escape_string($conn, $data['newBeat']['key']);
    $mood = mysqli_real_escape_string($conn, json_encode($data['newBeat']['mood']));
    $genre = mysqli_real_escape_string($conn, $data['newBeat']['genre']);
    $soundSrc = mysqli_real_escape_string($conn, $data['newBeat']['soundSrc']);
    
    if (strtolower(pathinfo($soundSrc, PATHINFO_EXTENSION)) === 'mp3') {
        $getID3 = new getID3;
        $replacedTXT = preg_replace("/\./", './public', $soundSrc, 1);
        $fileInfo = $getID3->analyze($replacedTXT);
        print_r($replacedTXT);
    
        if (isset($fileInfo['playtime_seconds'])) {
            $durationInSeconds = (int) $fileInfo['playtime_seconds'];
            $duration = gmdate("H:i:s", $durationInSeconds);
            $time = mysqli_real_escape_string($conn, $duration);
        }
    }
    
    $sql = "INSERT INTO `base_information` 
            (`id`, `img`, `title`, `time`, `bpm`, `tags`, `key`, `price`, `mood`, `genre`, `soundSrc`) 
            VALUES 
            ('', '$img', '$title', '$time', '$bpm', '$tags', '$key', '34.95', '$mood', '$genre', '$soundSrc')";
    
    if (mysqli_query($conn, $sql)) {
        return true;
        
    } else {
        echo "Ошибка: " . mysqli_error($conn);
        return false;
    }
}
function sortAction($link, $BN, $login, $action){
    $sql = "SELECT * FROM actions";

    $conditions = [];
    if (!empty($BN)) {
        $conditions[] = "beat_name = '$BN'";
    }
    if (!empty($login)) {
        $conditions[] = "login = '$login'";
    }
    if (!empty($action)) {
        $conditions[] = "action = '$action'";
    }

    if (!empty($conditions)) {
        $sql .= " WHERE " . implode(" AND ", $conditions);
    }
    
    $sql .= " ORDER BY id ASC";

    $result = mysqli_query($link, $sql);

    $data = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    mysqli_free_result($result);
    mysqli_close($link);

    return $data;
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

    $sorted_data = sortBy($link, $bpm, $mood, $genre, $title);

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

$app->post('/savePurchased', function (Request $request, Response $response, $args) {
    $data = json_decode(file_get_contents('php://input'), true);
    $jsonData = json_encode($data);

    setcookie("user_data", $jsonData, time() + 3600, "/");

    return $response->withHeader('Content-Type', 'application/json');
});

// $app->post('/getCookie', function (Request $request, Response $response, $args) {
//     $data = json_decode(file_get_contents('php://input'), true);
//     // $cookieName = $data['name'];
//     $name = $data['name'];
//     echo $name;
    
//     $value = $_COOKIE['current_login'] ?? null;

//     $response->getBody()->write(json_encode(['value' => $value]));
//     return $response
//         ->withHeader('Content-Type', 'application/json');
// });

$app->post('/uploadFile', function (Request $request, Response $response, $args) {
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

$app->get('/takeAction', function (Request $request, Response $response, $args) {
    $link = mysqli_connect("localhost", "root", "", "INFO");

    $sql = "SELECT * FROM `actions`";
    $result = mysqli_query($link, $sql);

    $queryParams = $request->getQueryParams();
    $BN = isset($queryParams['beat_name']) ? $queryParams['beat_name'] : "";
    $login = isset($queryParams['login']) ? $queryParams['login'] : "";
    $action = isset($queryParams['action']) ? $queryParams['action'] : "";

    updateLikes();

    $sorted_data = sortAction($link, $BN, $login, $action);

    $response->getBody()->write(json_encode($sorted_data));
    return $response->withHeader('Content-Type', 'application/json');
});
function updateLikes(){
    $link = mysqli_connect("localhost", "root", "", "INFO");
    $sql = "SELECT * FROM actions WHERE action = 'like'";

    $result = mysqli_query($link, $sql);
    $likeCounts = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $beat_name = $row['beat_name'];
        if (isset($likeCounts[$beat_name])) {
            $likeCounts[$beat_name]++;
        } else {
            $likeCounts[$beat_name] = 1;
        }
        $sql ="UPDATE base_information SET Likes = '" . $likeCounts[$beat_name] . "' WHERE title = '$beat_name'";
        mysqli_query($link, $sql);
    }

    mysqli_close($link);
    return;
};

// $app->get('/descendingSortedLikes', function (Request $request, Response $response, $args) {
//     $link = mysqli_connect("localhost", "root", "", "INFO");
//     $sql = "SELECT * FROM actions WHERE action = 'like'";

//     $result = mysqli_query($link, $sql);
//     $likeCounts = [];

//     while ($row = mysqli_fetch_assoc($result)) {
//         $beat_name = $row['beat_name'];
//         if (isset($likeCounts[$beat_name])) {
//             $likeCounts[$beat_name]++;
//         } else {
//             $likeCounts[$beat_name] = 1;
//         }
//         $sql ="UPDATE base_information SET Likes = '" . $likeCounts[$beat_name] . "' WHERE title = '$beat_name'";
//         mysqli_query($link, $sql);
//     }

//     arsort($likeCounts); # arsort - 3,2,1, asort - 1,2,3
//     $sortedBeatNames = implode(',', array_keys($likeCounts));
//     mysqli_close($link);

//     $response->getBody()->write($sortedBeatNames);
//     return $response->withHeader('Content-Type', 'application/json');
// });
$app->get('/takeUsersRights', function (Request $request, Response $response, $args) {
    $data = json_decode(file_get_contents('php://input'), true);
    $link = mysqli_connect("localhost", "root", "", "INFO");

    $sql = "SELECT admin_rights FROM userLog WHERE userLogin = '" . $data['user'] ."'";
    $result = mysqli_query($link, $sql);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        $admin_rights = $row['admin_rights'];
        $response->getBody()->write($admin_rights);
    } else {
        $response->getBody()->write("Error: " . mysqli_error($link));
    }

    mysqli_close($link);
    return $response->withHeader('Content-Type', 'text/plain')->withStatus(200);
});


$app->post('/Database/add_beat', function (Request $request, Response $response, $args) {
    $data = json_decode(file_get_contents('php://input'), true);
    $link = mysqli_connect("localhost", "root", "", "INFO");

    add_beat($data, $link);

    mysqli_close($link);

    return $response->withHeader('Content-Type', 'application/json');
});

$app->post('/action', function (Request $request, Response $response, $args) {
    $data = json_decode(file_get_contents('php://input'), true);
    print_r($data);
    $link = mysqli_connect("localhost", "root", "", "INFO");

    $beat_name = mysqli_real_escape_string($link, $data['beatName']);
    $login = mysqli_real_escape_string($link, $data['login']);
    $action = mysqli_real_escape_string($link, $data['action']);
    $text = mysqli_real_escape_string($link, $data['text']);

    $query = "INSERT INTO actions (beat_name, login, action, value) VALUES ('$beat_name', '$login', '$action', '$text')";
    mysqli_query($link, $query);

    updateLikes();

    if ($action == "like"){
        $sql = "UPDATE base_information SET Likes = Likes + 1 WHERE title = '$beat_name'";
        mysqli_query($link, $sql);
    }


    return $response->withHeader('Content-Type', 'application/json');
});
$app->post('/deleteAction', function (Request $request, Response $response, $args) {
    $data = json_decode(file_get_contents('php://input'), true);
    print_r($data);

    $link = mysqli_connect("localhost", "root", "", "INFO");

    $login = mysqli_real_escape_string($link, $data['login']);
    $BN = mysqli_real_escape_string($link, $data['beatName']);
    $action = mysqli_real_escape_string($link, $data['action']);

    $sql = "DELETE FROM `actions` WHERE `login` = '$login' AND `beat_name` = '$BN' AND `action` = '$action'";


    if (mysqli_query($link, $sql)) {
        echo "Запись успешно удалена из базы данных";
    } else {
        echo "Ошибка при выполнении запроса: " . mysqli_error($link);
    }
    
    updateLikes();
    
    if ($action == "like"){
        $sql = "UPDATE base_information SET Likes = Likes - 1 WHERE title = '$BN'";
        mysqli_query($link, $sql);
    }


    return $response->withHeader('Content-Type', 'application/json');
});

$app->post('/Database/delete_beat', function (Request $request, Response $response, $args) {
    $data = json_decode(file_get_contents('php://input'), true);
    print_r($data);

    $link = mysqli_connect("localhost", "root", "", "INFO");

    $title = mysqli_real_escape_string($link, $data['title']);
    $sql = "DELETE FROM `base_information` WHERE `title` = '{$title}'";

    if (mysqli_query($link, $sql)) {
        echo "Запись успешно удалена из базы данных";
    } else {
        echo "Ошибка при выполнении запроса: " . mysqli_error($link);
    }

    mysqli_close($link);

    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();
