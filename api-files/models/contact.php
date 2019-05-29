<?php
class Contact{
    
    //Connection 
    private $connection;
    //Table name
    private $table_name = "contacts";
    //Table columns
    public $id;
    public $users_id;
    public $first_name;
    public $last_name;
    public $phone_number;
    public $email;
    public $address;
    //Construct with Database
    public function __construct($db){
        $this->connection = $db;
    }
    
    //Create a contact
    public function create(){
        
        // Create query
        $query = 'INSERT INTO ' . 
            $this->table_name . '
            (users_id, first_name, last_name, phone_number, email, address)
            VALUES 
            (:users_id, :first_name, :last_name, :phone_number, :email, :address)';
           
        // Prepare statement
        $stmt = $this->connection->prepare($query);
        //Clean data
        $this->users_id = htmlspecialchars(strip_tags($this->users_id));
        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->last_name = htmlspecialchars(strip_tags($this->last_name));
        $this->phone_number = htmlspecialchars(strip_tags($this->phone_number));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->address = htmlspecialchars(strip_tags($this->address));
        //Bind Data
        $stmt->bindParam(':users_id', $this->users_id);
        $stmt->bindParam(':first_name', $this->first_name);
        $stmt->bindParam(':last_name', $this->last_name);
        $stmt->bindParam(':phone_number', $this->phone_number);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':address', $this->address);
        //Execute query
        if($stmt->execute()){
            return true;
        }
        //Print error in case of failure
        printf("Error: %s.\n", $stmt->error);
        return false;
    }
    //Get contacts by user ID
    public function read(){
        $query = 'SELECT 
        * FROM ' . $this->table_name . ' WHERE ' . $this->table_name .  '.users_id = ?';
        
        // Prepare statement
        $stmt = $this->connection->prepare($query);
        // Bind ID
        $stmt->bindParam(1, $this->users_id);
        //Execute query
        $stmt->execute();
        return $stmt;
    }
    public function update(){
        
        // Create query
        $query = 'UPDATE ' . 
            $this->table_name . '
            SET
                users_id = :users_id,
                first_name = :first_name,
                last_name = :last_name,
                phone_number = :phone_number,
                email = :email,
                address = :address
            WHERE
                id = :id';
           
        // Prepare statement
        $stmt = $this->connection->prepare($query);
        //Clean data
        //Clean data
        $this->users_id = htmlspecialchars(strip_tags($this->users_id);
        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->last_name = htmlspecialchars(strip_tags($this->last_name));
        $this->phone_number = htmlspecialchars(strip_tags($this->phone_number));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->id = htmlspecialchars(strip_tags($this->id));
        //Bind Data
        $stmt->bindParam(':users_id', $this->users_id);
        $stmt->bindParam(':first_name', $this->first_name);
        $stmt->bindParam(':last_name', $this->last_name);
        $stmt->bindParam(':phone_number', $this->phone_number);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':address', $this->address);
        $stmt->bindParam(':id', $this->id);
        //Execute query
        if($stmt->execute()){
            return true;
        }
        //Print error in case of failure
        printf("Error: %s.\n", $stmt->error);
        return false;
    }
    public function delete(){
        // Create query
        $query = 'DELETE FROM ' . $this->table_name . ' WHERE id = :id';
        // Prepare statement
        $stmt = $this->connection->prepare($query);
        // Clean data
        $this->id = htmlspecialchars(strip_tags($this->id));
        // Bind Data
        $stmt->bindParam(':id', $this->id);
        //Execute query
        if($stmt->execute()){
            return true;
        }
        //Print error in case of failure
        printf("Error: %s.\n", $stmt->error);
        return false;
        
        
    }
}