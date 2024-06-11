<?php
require_once 'modules/controller.php';

$userController = new UserController();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $link = mysqli_connect("localhost", "root", "", "INFO");

    if (!$link) {
        die("Connection failed: " . mysqli_connect_error());
    } 

    if (isset($_POST["login"]) && isset($_POST["password"]) && $_POST["login"] != "" && $_POST["password"] != "") {
        $login = mysqli_real_escape_string($link, $_POST['login']);
        $password = mysqli_real_escape_string($link, $_POST['password']);

        $query = "SELECT * FROM userLog WHERE UserLogin = '$login' AND password = '$password'";
        $result = mysqli_query($link, $query);

        if (mysqli_num_rows($result) > 0) {
            $userController->Autorisation(True);
        } else {
            $userController->Autorisation(false, "invalid_login");
        }
    } else {
        $userController->Autorisation(false, "no_information");
    }

    mysqli_close($link);
    exit();
}