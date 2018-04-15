<?php 

    $titre = '';

    
    include 'titre.php';

    include './View/header.php';

     if ($_GET['num'] == 1) {
         include './View/accueil.php';
    }
    elseif ($_GET['num'] == 2) {
        include './View/left-sidebar.php'; //nom à changer quand on remplira les pages
    }
    elseif ($_GET['num'] == 3) {
        include './View/no-sidebar.php';
    }
    elseif ($_GET['num'] == 4) {
        include './View/two-sidebar.php';
    }
    elseif ($_GET['num'] == 5) {
        include './View/right-sidebar.php';
    }
    elseif ($_GET['num'] == 6) {
        include './View/two-sidebar.php';
    } 
    else {
        $message = "Vous êtes allez trop loin";
    }

    include './View/footer.php';

?>