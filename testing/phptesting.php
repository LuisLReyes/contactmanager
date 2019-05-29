<!--hasty script put together to quickly check the contents of the Users table-->
<!--just open this on the apache server and it will display all Users-->

<?php
    $conn = new mysqli("contactmanager.chm9zgqp7oum.us-east-1.rds.amazonaws.com", "group15", "contact_group15", "contactManager");

    if ($conn->connect_error){
        echo("Connection failed");
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connect successfully <br>";

    $sql = "SELECT first_name, user_name, id, password,  FROM users";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "first_name: " . $row["first_name"]. " user_name: " . $row["user_name"]. " id: " . $row["id"]. " password: " . $row["password"]."<br>";
        }
    } 
    else {
        echo "0 results";
    }
$conn->close();

?>
