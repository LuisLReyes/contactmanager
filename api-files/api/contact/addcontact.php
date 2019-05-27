<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json;charset=UTF-8');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Max-Age: 3600');
    header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    
    include_once '../../config/database.php';
    include_once '../../codels/contact.php';
    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();
    // Instantiate contact
    $contact = new Contact($db);
    // Get raw posted data
    $data = json_decode(file_get_contents("php://input"));
    $contact->users_id = $data->users_id;
    $contact->first_name = $data->first_name;
    $contact->last_name = $data->last_name
    $contact->phone_number = $data->phone_number;
    $contact->email = $data->email;
    $contact->address = $data->address;
    // Create user
    if($contact->create()){
        echo json_encode(
            array('message' => 'Contact Created')
        );
    }
    else {
        echo json_encode(
            array('message' => 'Contact Not Created')
        );
    }