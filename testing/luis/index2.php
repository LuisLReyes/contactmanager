<?php 
    session_start();
?>
<html>
    <body>

        <h1>Second page.</h1><br>
        <?php
        echo "PHP is working correctly. Session ID:".$_SESSION["id"];
        ?>
        <br>


    </body>
</html>

