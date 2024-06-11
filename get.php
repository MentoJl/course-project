<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();
$response = $client->request('GET', 'http://course-work/database');

echo $response->getBody();