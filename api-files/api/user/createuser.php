<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json;charset=UTF-8');
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
           
    include_once '../../config/database.php';
    include_once '../../models/user.php';
 
    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();
    // Instantiate user
    $user = new Users($db);
    // Get raw posted data
    $data = json_decode(file_get_contents("php://input"));
    
    
    $user->first_name = $data->first_name;
    $user->user_name = $data->user_name;
    $user->password = $data->password;
    // Create user
    if($user->create()){
        http_response_code(200);
        echo json_encode(
            array('message' => 'User Created')
        );
    }
    else {
        http_response_code(400);
        echo json_encode(
            array('message' => 'User Not Created')
        );
    }
?>