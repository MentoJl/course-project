<?php
    session_start();
    if (!isset($_SESSION["type"])){
        $_SESSION["type"] = "Login";
    }elseif(isset($_GET['window'])) {
        $_SESSION["type"] = $_GET['window'];
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>autorisation</title>
    <link rel="stylesheet" href="styles/login-form.css">
</head>
    <body>
        <table>
            <tr>
                <td class="first-page">
                    <div>
                       <h1>Beat Store</h1>
                    </div>
                </td>
                <td class="second-page">
                    <?php if($_SESSION['type'] == "Login" || $_SESSION['type'] == "") { ?>
                        <div>
                            <!-- <p>Log in</p> -->
                            <form action="modules/autoristionModule.php" method="post">
                            <label for="login">Username: </label>
                            <input type="text" id="login" name="login"><br><br>
            
                            <label for="password">Password: </label>
                            <input type="text" id="password" name="password"><br>
            
                            <input type="submit" value="Continue">
                            </form> 
                        </div>
                    <?php }elseif($_SESSION['type'] == "Registration") {?>
                        <div>
                            <!-- <p class="Reg">Registration</p> -->
                            <form action="modules/registration.php" method="post">
                                <label for="reg-login">New username: </label>
                                <input type="text" id="reg-login" name="reg-login"><br>
                                
                                <label for="email">Add your email: </label>
                                <input type="text" id="email" name="email"><br>
                
                                <label for="reg-password">Password: </label>
                                <input type="text" id="reg-password" name="reg-password"><br>

                                <label for="second-password">Confirm password: </label>
                                <input type="text" id="second-password" name="second-password"><br>
                
                                <input type="submit" value="Create account">
                            </form> 
                        </div>
                    <?php }?>

                    <?php if(isset($_GET['error'])) {
                        echo "<div class='error'>" . $_GET['error'] . "</div>";
                    }
                    ?>
                        
                    
                    <?php if($_SESSION['type'] == "Login" || isset($_SESSION['type']) == False) { ?>
                        <p class="logintext">Not a member of our store yet? Become <a href="update_text.php">one!</a></p>
                    <?php }elseif($_SESSION['type'] == "Registration") {?>
                        <p class="logintext">Already a member? <a href="update_text.php">Log in</a></p>
                    <?php }?>
                    <div class="or-container">
                        <hr>
                        <p>or</p>
                        <hr>
                    </div>
                    <div>
                       <button class="google-button" href="#">
                            <img src="styles/google-logo-NePEveMl.svg" alt="Google logo">
                            Continue with Google
                        </button>
                    </div>
                    
                    <p class="underline-text">By logging in to <a>Beat Store</a>, I confirm that I have read and agree to the Music Gallery Terms of Service, Privacy Policy, and to receive emails and updates. </p>
                </td>
            </tr>
        </table>
        
    </body>
</html>
