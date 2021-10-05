<?php

session_start();

if(isset($_SESSION["connect"])){
    $connected = true;
}
else{
    $connected = false;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CV</title>
    <link rel="stylesheet" media="screen" href="style.css">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
    <div id="main">
        <div id="left">
            <section id="coord"></section>
            <section>
                <h2>Formation</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Année</th>
                        <th>Intitulé</th>
                    </tr>
                    </thead>
                </table>
            </section>
            <section></section>
            <section></section>
        </div>
        <div id="right">
            <main>
                <div id="title">
                    <figure>
                        <img src="https://www.handiclubnimois.fr/wp-content/uploads/2020/10/blank-profile-picture-973460_1280.png" alt="profile picture">
                        <figcaption>Profile</figcaption>
                    </figure>
                    <h1>Yann Tyburczy</h1>
                </div>
                <h2>Développeur Web</h2>
            </main>
            <section id="first-section"></section>
            <section id="experience">
                <h2>Experience Professionnelle</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Periode</th>
                            <th>Entreprise</th>
                            <th>Poste</th>
                        </tr>
                    </thead>
                </table>
            </section>
            <section id="comp">
            </section>
            <section class="notthissection" id="contact">
                <div>
                    <form action="#" method="post" autocomplete="on">
                        <fieldset>
                            <legend><h2>Contact</h2></legend>
                            <div>
                                <label for="nom">
                                    Nom:
                                </label>
                                <input type="text" name="nom" placeholder="nom">
                            </div>
                            <div>
                                <label for="mail">
                                    Mail:
                                </label>
                                <input type="text" name="mail" placeholder="mail">
                            </div>
                            <div>
                                <label for="content">

                                </label>
                                <textarea name="content" cols="30" rows="10"></textarea>
                            </div>
                        </fieldset>
                        <input type="submit">
                    </form>
                </div>
            </section>
            <section class="notthissection">
                <h2>Techno</h2>
                <figure id="fig">
                    <div id="front">
                        <img class="fig-img" src="https://www.xmple.com/wallpaper/pink-gradient-white-linear-1024x576-c2-ffb6c1-ffffff-a-15-f-14.svg" alt="">
                        <figcaption class="fig-caption" >Javascript</figcaption>
                    </div>
                    <div id="back">
                        <img class="fig-img" src="https://a-static.besthdwallpaper.com/courir-dans-le-retro-fond-d-ecran-1024x576-57964_44.jpg" alt="">
                        <figcaption class="fig-caption">PHP</figcaption>
                    </div>
                </figure>
            </section>
        </div>
    </div>
    <script src="script.js"></script>
    <?php if($connected){
        echo "<div id='submit'>Submit</div>";
        echo "<script src='ajout.js'></script>";
    } ?>
</body>

<script src="https://kit.fontawesome.com/78e483bd6f.js" crossorigin="anonymous"></script>
</html>