<?php
require_once 'controller.php';

$userController = new UserController();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $link = mysqli_connect("localhost", "root", "", "INFO");
    session_start();

    
    if (isset($_POST["reg-login"]) == False){
        $userController->Autorisation(false, "Login is empty*");
        mysqli_close($link);
        exit();
    }elseif(!isset($_POST["reg-password"]) || $_POST["reg-password"] == ""){
        $userController->Autorisation(false, "Password is empty*");
        mysqli_close($link);
        exit();
    }elseif(isset($_POST["second-password"]) && $_POST["reg-password"] != $_POST["second-password"]){
        $userController->Autorisation(false, "Password doesn't match*");
        mysqli_close($link);
        exit();
    }
    if (!$link) {
        die("Connection failed: " . mysqli_connect_error());
    }


    $login = $_POST['reg-login'];
    $email = $_POST['email'];
    $password = $_POST['reg-password'];

    $sql_check = "SELECT * FROM userLog WHERE userLogin = '$login'";
    $result = mysqli_query($link, $sql_check);

    if (mysqli_num_rows($result) > 0){
        $userController->Autorisation(false, "This user with such LOGIN already exist*");
        mysqli_close($link);
        exit();
    }
    $sql_check = "SELECT * FROM userLog WHERE email = '$email'";
    $result = mysqli_query($link, $sql_check);

    if (mysqli_num_rows($result) > 0){
        $userController->Autorisation(false, "This user with such EMAIL already exist*");
        mysqli_close($link);
        exit();
    }
    

    $query = "INSERT INTO userLog (userLogin, email, password) VALUES ('$login', '$email', '$password')";
    $result = mysqli_query($link, $query);

    // $sql = "CREATE TABLE " . $login . "_beat_information (
    //     id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    //     username VARCHAR(30) NOT NULL,
    //     password VARCHAR(30) NOT NULL,
    //     reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    // )";
    // $result = mysqli_query($link, $sql);
    
    $_SESSION ["type"] = "Login";

    setcookie("current_login", $login, time() + 86400, "/");
    // setcookie("current_password", $password, time() + 86400, "/");

    $userController->Autorisation(True);

    mysqli_close($link);
    exit();
}