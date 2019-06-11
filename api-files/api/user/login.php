<?php
    session_start();
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
    
    $user->user_name = $data->user_name;
    //$user->password = $data->password;
    $temp = $data->password;

    // True if the username is found
    if($user->login()){
        //password does match
        if($user->password == $temp){
            $_SESSION["id"] = $user->id;
            $_SESSION["name"] = $user->first_name;
            http_response_code(200);
            echo json_encode(
                array('message' => 'Login Successful', 'id' => $user->id)
                
            );
            
        }
        //password does not match
        else{
            http_response_code(400);
            echo json_encode(
                array('message' => 'Password does not match user')
            );
        }

    }
    // Otherwise, that username is not recognized
    else{
        http_response_code(400);
        echo json_encode(
            array('message' => 'User does not exist')
        );
    }

    
    
?>