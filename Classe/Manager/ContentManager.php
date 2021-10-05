<?php

use Controller\Traits\GlobalManagerTrait;

class ContentManager
{
    use GlobalManagerTrait;

    public function updateContent($id, $data){
        $current = $this->getSingleEntity($id);
        $conn = $this->db->prepare("UPDATE content SET contenue = :content WHERE id= :id");
        $conn->bindValue(":id", $id);
        if($current->getBalise() !== "p"){
            $conn->bindValue(":content", $current->getContenue() . $data);
        }else{
            $conn->bindValue(":content", $data);
        }
        $conn->execute();
    }

}