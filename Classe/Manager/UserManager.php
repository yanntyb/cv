<?php

use Controller\Traits\GlobalManagerTrait;

class UserManager
{
    use GlobalManagerTrait;

    public function addUser(string $name, string $pass): bool{
        $conn = $this->db->prepare("INSERT INTO user (name, pass) VALUES (:name, :pass)");
        $conn->bindValue(":name", $this->sanitize($name));
        $conn->bindValue(":pass", password_hash($pass, PASSWORD_DEFAULT));
        if($conn->execute()){
            return true;
        }
        return false;
    }

    public function checkLog($name, $pass){
        $conn = $this->db->prepare("SELECT pass FROM user WHERE name = :name");
        $conn->bindValue(":name", $name);
        $conn->execute();
        $passR = $conn->fetch()["pass"];
        if(password_verify($pass,$passR)){
            return true;
        }
        return false;
    }
}