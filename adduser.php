<?php
    if(isset($_POST["name"], $_POST["pass"]) && $_POST["name"] !== "" && $_POST["pass"] !== ""){
        require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/DB.php";
        require_once $_SERVER["DOCUMENT_ROOT"] . "/Trait/GlobalManagerTrait.php";
        require_once $_SERVER["DOCUMENT_ROOT"] . "/Trait/GlobalEntityTrait.php";
        require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Entity/User.php";
        require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Manager/UserManager.php";

        $manager = new UserManager();
        if($manager->addUser($_POST["name"], $_POST["pass"])){
            echo "User " . $_POST["name"] . " ajouté";
        };
    }
?>

<form action="#" method="post">
    <input name="name" type="text" placeholder="name">
    <input name="pass" type="pass">
    <input type="submit">
</form>
