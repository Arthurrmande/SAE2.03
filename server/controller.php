<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require ("model.php");

function readController(){
 
    $movies = getMovie();
    return $movies;
}


function addController(){
    // Validation des champs (tous sont requis)
    if (!isset($_REQUEST['titre'], $_REQUEST['realisateur'], $_REQUEST['annee'], $_REQUEST['duree'],
              $_REQUEST['desc'], $_REQUEST['categorie'], $_REQUEST['image'], $_REQUEST['url'], $_REQUEST['age'])) {
        return false;
    }

    $titre = $_REQUEST['titre'];
    $realisateur = $_REQUEST['realisateur'];
    $annee = $_REQUEST['annee'];
    $duree = $_REQUEST['duree'];
    $desc = $_REQUEST['desc'];
    $categorie = $_REQUEST['categorie'];
    $image = $_REQUEST['image'];
    $url = $_REQUEST['url'];
    $age = $_REQUEST['age'];
    // Mise à jour du menu à l'aide de la fonction addMovie décrite dans model.php
    $ok = addMovie($titre, $realisateur, $annee, $duree, $desc, $categorie, $image, $url, $age);
    // $ok est le nombre de ligne affecté par l'opération de mise à jour dans la BDD (voir model.php)
    if ($ok!=0){
      return "Le film a été ajouté avec succès.";
    }
    else{
      return false;
    }
  }
