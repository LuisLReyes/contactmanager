    
<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, 
    Access-Control-Allow-Methods, Authorization, X-Requested-With');
    include_once '../../config/database.php';
    include_once '../../models/contact.php';
    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();
    // Instantiate contact
    $contact = new Contact($db);
    // Get raw posted data
    $data = json_decode(file_get_contents("php://input"));
    // Set ID to update
    $contact->id = $data->id;
    $contact->users_id = $data->users_id;
    $contact->first_name = $data->first_name;
    $contact->last_name = $data->last_name;
    $contact->phone_number = $data->phone_number;
    $contact->email = $data->email;
    $contact->address = $data->address;
    // Update contact
    if($contact->update()){
        echo json_encode(
            array('message' => 'Contact Updated')
        );
    }
    else {
        echo json_encode(
            array('message' => 'Contact Not Updated')
        );
    }
?>