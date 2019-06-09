<?php 
    session_start();
    //$_SESSION["id"] = 0;
?>
<html>
    <body>

        <h1>COP 4331 Small Project!</h1><br>
        <?php
        echo "PHP is working correctly. Session ID:".$_SESSION["id"];
        ?>
        <br>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="loginhelper.js"></script>
    </body>
</html>

<script>
//temp = login("mike","mikepass");
getContacts("1");





/*
var jsonPayload = {user_name : "mike", password : "mikepass"};
jsonPayload = JSON.stringify(jsonPayload);

$.ajax({
    url: "https://contactmanager4331.herokuapp.com/api-files/api/user/login.php",
    type : "POST",
    contentType : 'application/json',
    data : jsonPayload,
    success : function(result){
        console.log("User Logged in");
        console.log(result);

        //Change page if you want
        //location = 'contacts.html';
    },
    error: function(xhr, resp, text){
        // on error, log it
        console.log("User not logged in");
        console.log(xhr);
        console.log(resp);
        consold.log(test);
    }
});*/

</script>