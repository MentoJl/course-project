<?php

class UserController {
    public function main_site() {
        header("Location: main.html?message=True");
    }

    public function Autorisation($access, $error="") {
        if($access === false){
            header("Location: Autorisation.php?error=". $error ."");
            exit;
        }else{
            self::main_site();
        }
    }
}

?>