<?php

use App\Manager\ArticleManager;

require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/DB.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Trait/GlobalManagerTrait.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Trait/GlobalEntityTrait.php";

require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Entity/Article.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Manager/ArticleManager.php";

$articleManager = new ArticleManager();
$articles = $articleManager->getAllEntity();

$return = [];

foreach($articles as $article){
    $return[] = [
        "title" => $article->getTitle(),
        "side" => $article->getSide()
    ];
}

echo json_encode($return);





















;