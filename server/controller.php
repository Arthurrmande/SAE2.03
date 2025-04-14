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

init_set('display_errors', 1);
error_reporting(E_ALL);

function readController(){
 
    $movies = getMovie();
    return $movies;
}

function readControllerbyage(){
  $ageLimit = $_REQUEST['ageLimit'] ?? null;

  if ($ageLimit !== null) {
      $ageLimit = intval($ageLimit);
  }

  $movies = getMoviebyage($ageLimit);
  return $movies;
}


function addController(){

  $name = $_REQUEST['name'] ?? null;
  $director = $_REQUEST['director'] ?? null;
  $year = $_REQUEST['year'] ?? null;
  $length = $_REQUEST['length'] ?? null;
  $description = $_REQUEST['description'] ?? null;
  $id_category = $_REQUEST['id_category'] ?? null;
  $image = $_REQUEST['image'] ?? null;
  $trailer = $_REQUEST['trailer'] ?? null;
  $min_age = $_REQUEST['min_age'] ?? null;

  // Vérification des champs requis
  error_log("tentative d'ajout name=$name, id_category=$id_category");

 
  if ($name === null || $director === null || $year === null || $length === null || $description === null || $id_category === null || $image === null || $trailer === null || $min_age === null) {    return "Erreur : Tous les champs doivent être remplis. $id_category"; ;
  }

  // Mise à jour du menu à l'aide de la fonction addMovie décrite dans model.php
  $ok = addMovie($name, $director, $year, $length, $description, $id_category, $image, $trailer, $min_age);
  // $ok est le nombre de ligne affecté par l'opération de mise à jour dans la BDD (voir model.php)
  if ($ok!=0){
    return "Le film a été ajouté avec succès.";
  }
  else{
    return false;
  }
}

function readMovieDetailController(){
    $id = $_REQUEST['id'] ?? null;
  
    if (empty($id)) {
        return "Erreur : Tous les champs doivent être remplis.";
    }
  
    return getMovieDetail($id);
}

function readControllerMovieinfos(){
    $id = $_REQUEST['id'] ?? null;
  
    if (empty($id)) {
        return "Erreur : Tous les champs doivent être remplis.";
    }
  
    return getMovieinfos($id);
}

function readControllerMoviecategorie(){
  $categorie = $_REQUEST['categorie'] ?? null;
  
  if (empty($categorie)) {
      return "Erreur : Tous les champs doivent être remplis.";
  }
  $age = $_REQUEST['age'] ?? null;
  if (empty($age)) {
      return "Erreur : Tous les champs doivent être remplis.";
  }
  
  return getMoviesagecategory($age, $categorie);
}

function readControllerCategories() {
  return getAllCategories();
}

function addControllerProfil(){
  $name = $_REQUEST['name'] ?? null;
  $image = $_REQUEST['image'] ?? null;
  $age = $_REQUEST['age'] ?? null;

  if (empty($name) || empty($image) || empty($age)) {
      return "Erreur : Tous les champs doivent être remplis.";
  }

  $ok = addProfil($name, $image,$age);
    
  if ($ok!=0){
    return "L'utilisateur $name a été ajouté avec succès !";
  } 
  else{
    return "Erreur lors de l'ajout de l'utilisateur $name !";
  }
}

function readProfilController() {
  return getProfil();
}

function changeControllerProfil(){
  $ancienname = $_REQUEST['ancienname'] ?? null;
  $name = $_REQUEST['name'] ?? null;
  $image = $_REQUEST['image'] ?? null;
  $age = $_REQUEST['age'] ?? null;

  if (empty($ancienname) || empty($name) || empty($image) || empty($age)) {
      return "Erreur : Tous les champs doivent être remplis.";
  }

  $ok = changeProfil($ancienname, $name, $image, $age);

  if ($ok != 0){
    return "Le profil $ancienname a été modifié avec succès.";
  } else {
    return "Aucune modification effectuée.";
  }
}

function addControllerLike(){
  $profil = $_REQUEST['id_profil'] ?? null;
  $movie = $_REQUEST['id_movie'] ?? null;
  
  if (empty($profil) || empty($movie)) {
    return "Erreur : Tous les champs doivent être remplis.";
  }
  
  $ok = addLike($profil, $movie);
  
  if ($ok != 0){
    return "L'utilisateur $profil a ajouté le film $movie dans ses favoris avec succès !";
  } 
  else{
    return "Erreur lors de l'ajout de $movie dans les favoris de l'utilisateur $profil !";
  }
}

function readControllerLikesUserMovie(){
  $profil = $_REQUEST['id_profil'] ?? null;

  if (empty($profil)) {
      return "Erreur : Le champ profil doit être rempli.";
  }

  return getLikes($profil);
}

function deleteControllerLike(){
  $profil = $_REQUEST['id_profil'] ?? null;
  $movie = $_REQUEST['id_movie'] ?? null;

  if (empty($profil) || empty($movie)) {
      return "Erreur : Tous les champs doivent être remplis.";
  }

  $ok = deleteLike($profil, $movie);
    
  if ($ok!=0){
    return "L'utilisateur $profil a supprimé le film $movie de ses favoris avec succès !";
  } 
  else{
    return "Erreur lors de la suppression du film dans les favoris de l'utilisateur $profil !";
  }
}

function meaController(){
  $movies = getMise_en_avant();
  return $movies;
}

function bar_rechercheController(){
  $titre = $_REQUEST['titre'] ?? null;
  if (empty($titre))
    return false;
  return bar_recherche($titre);
}

