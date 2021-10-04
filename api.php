<?php

use App\Manager\BaliseManager;
use App\Manager\SectionManager;
use App\Manager\ChildManager;

require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/DB.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Trait/GlobalManagerTrait.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Trait/GlobalEntityTrait.php";

require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Entity/Balise.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Manager/BaliseManager.php";

require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Entity/Section.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Manager/SectionManager.php";

require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Entity/Child.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/Classe/Manager/ChildManager.php";

$childManager = new ChildManager();
$childes = $childManager->getAllEntity();

echo "<pre>";
print_r($childes);
echo "</pre>";





















;