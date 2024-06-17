<?php

session_start();

if ($_SESSION["type"] != ""){
    if($_SESSION["type"] == "Login"){
        $_SESSION["type"] = "Registration";
    }elseif($_SESSION["type"] == "Registration"){
        $_SESSION["type"] = "Login";
    }
}else{
    $_SESSION["type"] = "Login";
}
    

header('Location: Autorisation.php');

exit();