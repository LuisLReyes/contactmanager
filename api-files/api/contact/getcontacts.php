<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include_once '../../config/database.php';
    include_once '../../models/contact.php';
    // Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();
    // Instantiate contact
    $contact = new Contact($db);
    // Get ID from URL
    $contact->users_id = isset($_GET['users_id']) ? $_GET['users_id'] : die();
    // Get contact
    $result = $contact->read();
    // Get row count
    $num = $result->rowCount();
    //Check for Contacts
    if($num > 0){
        //Create array
        $contact_arr = array();
        $contact_arr['data'] = array();
        while($row = $result->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $contact_item = array(
                'id' => $id,
                'users_id' => $users_id,
                'first_name' => $first_name,
                'last_name' => $last_name,
                'phone_number' => $phone_number,
                'address' => $address,
                'email' => $email
            );
            //push to data array
            array_push($contact_arr['data'], $contact_item);
        }
    //Make JSON and return
    print_r(json_encode($contact_arr));
    }
    else{
        //No contacts
        echo json_encode(
            array('message' => 'No Contacts Found')
        );
    }
?>