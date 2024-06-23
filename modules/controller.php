<?php

class UserController {
    public function main_site($login) {
        header("Location: http://localhost:3000?login={$login}");
    }

    public function Autorisation($access, $error="", $login="") {
        if($access === false){
            header("Location: ../Autorisation.php?error=". $error ."");
            exit;
        }else{
            self::main_site($login);
        }
    }
}