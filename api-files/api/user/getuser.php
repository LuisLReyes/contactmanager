    
<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include_once '../../Config/Database.php';
    include_once '../../Models/Users.php';
    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();
    // Instantiate user
    $user = new Users($db);

    // Get ID from URL
    $user->id = isset($_GET['id']) ? $_GET['id'] : die();
    
    // Get User
    $user->read();
    
    //Create array
    $user_arr = array(
        'id' => $user->id,
        'first_name' => $user->first_name,
        'user_name' => $user->user_name
    );
    
    //Make JSON
    print_r(
        json_encode($user_arr)
    );
?>