<?php
require_once 'controller.php';

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
            setcookie("current_login", $_POST['login'], time() + 86400, "/", "localhost");

            $userController->Autorisation(True);
            
        } else {
            $userController->Autorisation(false, "Login or password are invalid*");
        }
    } else {
        $userController->Autorisation(false, "empty information*");
    }

    mysqli_close($link);
    exit();
}