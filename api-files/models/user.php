    
<?php
class Users{
    
    //Connection instance
    private $connection;
    //Table name
    private $table_name = "users";
    //Table columns
    public $id;
    public $first_name;
    public $user_name;
    public $password;
    
    //Construct with Database
    public function __construct($db){
        $this->connection = $db;
    }
    
    //Create a user
     function create(){
        // Create query
        $query = "INSERT INTO " . $this->table_name . "
            SET
                first_name = :first_name,
                user_name = :user_name,
                password = :password";
        
        // Prepare statement
        $stmt = $this->connection->prepare($query);
        //Clean data
        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->user_name = htmlspecialchars(strip_tags($this->user_name));
        $this->password = htmlspecialchars(strip_tags($this->password));
        //Bind Data
        $stmt->bindParam(':first_name', $this->first_name);
        $stmt->bindParam(':user_name', $this->user_name);
        $stmt->bindParam(':password', $this->password);
        //Execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }
    //Get user by ID
    public function read(){
        $query = 'SELECT * FROM ' . $this->table_name . ' WHERE ' . $this->table_name .  '.id = ? LIMIT 0,1';
        
        // Prepare statement
        $stmt = $this->connection->prepare($query);
        // Bind ID
        $stmt->bindParam(1, $this->id);
        //Execute query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $this->id = $row['id'];
        $this->first_name = $row['first_name'];
        $this->user_name = $row['user_name'];
        return $stmt;
    }
    public function update(){
    }
    public function delete(){
        
    }
    public function login(){
        
        //prepare query to login
        $query = 'SELECT id, user_name, password FROM ' . $this->table_name . ' WHERE user_name = :user_name LIMIT 0,1';
        
        // Prepare statement
        $stmt = $this->connection->prepare($query);
        // Clean data
        $this->user_name = htmlspecialchars(strip_tags($this->user_name));
        // Bind data
        $stmt->bindParam(':user_name', $this->user_name);

        // Execute statement
        $stmt->execute();
        // Store number of results
        $num = $stmt->rowCount();

        // Check that a user was found
        if($num > 0){

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $this->id = $row['id'];
            $this->user_name= $row['user_name'];
            $this->password = $row['password'];
            $this->first_name = $row['first_name'];

            return true;
        }

        // Return false if no user is found
        return false;
    }
}