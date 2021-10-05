<?php
    if(isset($_POST["name"], $_POST["pass"]) && $_POST["name"] !== "" && $_POST["pass"] !== ""){
        require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/DB.php";
        require_once $_SERVER["DOCUMENT_ROOT"] . "/Trait/GlobalManagerTrait.php";
        require_once $_SERVER["DOCUMENT_ROOT"] . "/Trait/GlobalEntityTrait.php";
        require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Entity/User.php";
        require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Manager/UserManager.php";

        $manager = new UserManager();
        if($manager->checkLog($_POST["name"], $_POST["pass"])){
            session_start();
            $_SESSION["connect"] = true;
            header("Location: index.php");
        }
        else{
            echo "mauvais log";
        }
    }
?>


<form action="#" method="post">
    <input name="name" type="text" placeholder="name">
    <input name="pass" type="text" placeholder="pass">
    <input type="submit">
</form>

