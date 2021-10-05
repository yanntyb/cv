<?php

require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/DB.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Trait/GlobalEntityTrait.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Trait/GlobalManagerTrait.php";

require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Entity/Section.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Manager/SectionManager.php";

require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Entity/Content.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Manager/ContentManager.php";


$datas = json_decode(file_get_contents("php://input"), true);
$manager = new ContentManager();

foreach($datas as $data){
    if(isset($data["content"]) && $data["content"] !== []){
        if(is_array($data["content"])){
            $content = "\n" .  implode("|", $data["content"]);
        }
        else{
            $content = " " . $data["content"];
        }
        $manager->updateContent($data["id"],$content);
    }
}