<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
// Ces constantes sont utilisées pour établir une connexion à la base de données.
define("HOST", "localhost");
define("DBNAME", "mande3");
define("DBLOGIN", "mande3");
define("DBPWD", "mande3");


function getMovie(){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le nom, l'image et l'id du film
    $sql = "SELECT id, name, image FROM Movie";

    // exécution de la requête SQL via la connexion à la bdd et récupération de la réponse sur serveur MySQL
    $answer = $cnx->query($sql);
    // conversion des lignes récupérées en tableau d'objets (chaque ligne devient un objet)
    $res = $answer->fetchAll(PDO::FETCH_OBJ);
    // et on renvoie le tout.
    return $res; // Retourne les résultats
}



/**
 * Met à jour le menu pour un jour spécifique dans la base de données. 
 * A SAVOIR: une requête SQL de type update retourne le nombre de lignes affectées par la requête.
 * Si la requête a réussi, le nombre de lignes affectées sera 1.
 * Si la requête a échoué, le nombre de lignes affectées sera 0.
 */
function addMovie($name, $director, $year, $length, $description, $id_category, $image, $trailer, $min_age){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD); 
    $sql = "INSERT INTO Movie (name, director, year, length, description, id_category, image, trailer, min_age) 
            VALUES (:name, :director, :year, :length, :description, :id_category, :image, :trailer, :min_age)";
    
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':director', $director);
    $stmt->bindParam(':year', $year);
    $stmt->bindParam(':length', $length);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':id_category', $id_category);
    $stmt->bindParam(':image', $image);
    $stmt->bindParam(':trailer', $trailer);
    $stmt->bindParam(':min_age', $min_age);
    
    $stmt->execute();
    $res = $stmt->rowCount();
    return $res; 
}


function getMovieDetail($id){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT Movie.id, Movie.name, image, description, director, year, length, Category.name AS category_name, min_age, trailer 
            FROM Movie INNER JOIN Category ON Movie.id_category = Category.id WHERE Movie.id = :id";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $res = $stmt->fetch(PDO::FETCH_OBJ);
    return $res;
}

// function getCategory(){
//     $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
//     $sql = "SELECT id, name FROM Category";
//     $answer = $cnx->query($sql);
//     $res = $answer->fetchAll(PDO::FETCH_OBJ);
//     return $res;
// }

// function getMoviesByCategory($id_category) {
//     $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
//     $sql = "SELECT Movie.id, Movie.name, image FROM Movie INNER JOIN Category ON Movie.id_category = Category.id 
//             WHERE LOWER(Category.name) = LOWER(:categorie)";

//     $stmt = $cnx->prepare($sql);
//     $stmt->bindParam(':categorie', $categorie   , PDO::PARAM_STR);
//     $stmt->execute();
//     $res = $stmt->fetchAll(PDO::FETCH_OBJ);
//     return $res;
//   }


function getAllCategories() {
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer les noms de toutes les catégories
    $sql = "SELECT name FROM Category";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function getMoviecategorie($categorie){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer les informations du film en fonction du nom
    $sql = "SELECT Movie.id, Movie.name, image 
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id 
            WHERE LOWER(Category.name) = LOWER(:categorie)
";

    // Préparation de la requête SQL
    $stmt = $cnx->prepare($sql);
    // Liaison du paramètre :id avec la variable $categorie){
    $stmt->bindParam(':categorie', $categorie   , PDO::PARAM_STR);
    // Exécution de la requête
    $stmt->execute(); 
    // Conversion des lignes récupérées en tableau d'objets (chaque ligne devient un objet)
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

