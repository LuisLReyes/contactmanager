<?php 
    session_start();
    $_SESSION["id"] = 1;
?>
<html>
    <body>

        <h1>COP 4331 Small Project!</h1><br>
        <?php
        echo "PHP is working correctly. Session ID:".$_SESSION["id"];
        ?>
        <br>


    </body>
</html>

