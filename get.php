<?php
require_once 'vendor/autoload.php';
    $data = array(
        "newBeat" => array(
            "img" => './db/img/',
            "title" => "",
            "bpm" => 100,
            "tags" => array(),
            "key" => "",
            "mood" => "",
            "genre" => "",
            "soundSrc" => './db/sound/'
        )
    );
    $conn = mysqli_connect("localhost", "root", "", "INFO");
    $img = mysqli_real_escape_string($conn, $data['newBeat']['img']);
    $title = mysqli_real_escape_string($conn, $data['newBeat']['title']);
    $time = "";
    $bpm = mysqli_real_escape_string($conn, $data['newBeat']['bpm']);
    $tags = mysqli_real_escape_string($conn, json_encode($data['newBeat']['tags']));
    $key = mysqli_real_escape_string($conn, $data['newBeat']['key']);
    $mood = mysqli_real_escape_string($conn, $data['newBeat']['mood']);
    $genre = mysqli_real_escape_string($conn, $data['newBeat']['genre']);
    $soundSrc = mysqli_real_escape_string($conn, $data['newBeat']['soundSrc']);
    
    if (strtolower(pathinfo($soundSrc, PATHINFO_EXTENSION)) === 'mp3') {
        $getID3 = new getID3;
        $fileInfo = $getID3->analyze($soundSrc);
    
        if (isset($fileInfo['playtime_seconds'])) {
            $durationInSeconds = (int) $fileInfo['playtime_seconds'];
            $duration = gmdate("H:i:s", $durationInSeconds);
            $time = mysqli_real_escape_string($conn, $duration);
        } else {
            echo "QWDQWDQWD";
            return false;
        }
    }
    
    $sql = "INSERT INTO `base_information` 
            ( `img`, `title`, `time`, `bpm`, `tags`, `key`, `mood`, `genre`, `soundSrc`) 
            VALUES 
            ('$img', '$title', '$time', '$bpm', '$tags', '$key', '$mood', '$genre', '$soundSrc')";
    
    if (mysqli_query($conn, $sql)) {
        return true;
    } else {
        echo "Ошибка: " . mysqli_error($conn);
        return false;
    }