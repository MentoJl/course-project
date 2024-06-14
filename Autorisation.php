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
                       <h1>DJ x</h1>
                    </div>
                </td>
                <td class="second-page">
                    
                    <div>
                        <p>Log in</p>
                        <form action="autoristionModule.php" method="post">
                        <label for="login">UserName: </label>
                        <input type="text" id="login" name="login"><br><br>
        
                        <label for="password">Password: </label>
                        <input type="text" id="password" name="password"><br>
        
                        <input type="submit" value="Continue">
                        </form> 
                    </div>
                    <?php if(isset($_GET['error']) && $_GET['error'] == "invalid_login") { ?>
                        <div class="error">Login or password are invalid*</div>
                    <?php }elseif(isset($_GET['error']) && $_GET['error'] == "no_information") { ?>
                        <div class="error">empty information*</div>
                    <?php } ?>
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
