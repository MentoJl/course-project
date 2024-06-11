<?php
require 'slim-skeleton/vendor/autoload.php';

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

$app = AppFactory::create();

$app->addRoutingMiddleware();
$errorMiddleware = $app->addErrorMiddleware(true, true, true);

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

function sortBy($link, $bmp, $mood, $genre){ //Sorting
    $sql = "SELECT * FROM base_information";

    $conditions = [];
    if (!empty($bmp)) {
        $conditions[] = "bpm = '$bmp'";
    }
    if (!empty($mood)) {
        $conditions[] = "mood = '$mood'";
    }
    if (!empty($genre)) {
        $conditions[] = "genre = '$genre'";
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

$app->add(function ($request, $handler) { #Request access
    $response = $handler->handle($request);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

// $app->get('/database', function (Request $request, Response $response, array $args) {
//     $link = mysqli_connect("localhost", "root", "", "INFO");
//     $sql = "SELECT * FROM base_information";
//     $result = mysqli_query($link, $sql);

//     if (!$result) {
//         $error = mysqli_error($link);
//         return $response->withStatus(500)->write("Query failed: $error");
//     }

//     $data = [];
//     while ($row = mysqli_fetch_assoc($result)) {
//         $data[] = $row;
//     }
//     mysqli_free_result($result);
//     mysqli_close($link);

//     $response->getBody()->write(json_encode($data));
//     return $response->withHeader('Content-Type', 'application/json');
// });

// $app->get('/message_value', function (Request $request, Response $response, array $args) {
//     $queryParams = $request->getQueryParams();
//     if (isset($queryParams['message'])) {
//         $response->getBody()->write($queryParams['message']);
//     } else {
//         $response->getBody()->write('No message provided');
//     }
//     return $response;
// });

$app->get('/database', function (Request $request, Response $response, array $args) {
    $link = mysqli_connect("localhost", "root", "", "INFO");

    $queryParams = $request->getQueryParams();
    $bpm = isset($queryParams['bpm']) ? $queryParams['bpm'] : "";
    $mood = isset($queryParams['mood']) ? $queryParams['mood'] : "";
    $genre = isset($queryParams['genre']) ? $queryParams['genre'] : "";

    $sorted_data = sortBy($link, $bpm, $mood, $genre);

    $response->getBody()->write(json_encode($sorted_data));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();
