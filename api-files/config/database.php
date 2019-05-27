<?php

    class Database{

        //Database Parameters
        private $host = 'contactmanager.chm9zgqp7oum.us-east-1.rds.amazonaws.com';
        private $db_name = 'contactManager';
        private $username = 'group15';
        private $password = 'contact_group15';
        private $conn;

        //Database Connection
        public function connect(){
            $this->conn = null;

            try{
                $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name,
                $this->username, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $e){
                echo 'Connection Error: ' . $e->getMessage();
            }

            return $this->conn;
        }
    }
?>
