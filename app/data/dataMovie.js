// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~mande3/SAE2.03-Arthur-Mande-1";

let DataMovie = {};

DataMovie.requestMovies = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getMovie");
  let movies = await answer.json();
  return movies;
};

DataMovie.requestMoviesbyage = async function (ageLimit = 100) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getMoviebyage&ageLimit=" + ageLimit);
  let movies = await answer.json();
  console.log(movies);
  return movies;
};

DataMovie.requestMovieDetails = async function(id) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getMovieDetail&id=" + id);
  let movieDetails = await answer.json();
  return movieDetails;
}

DataMovie.requestCategories = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getCategories");
  let categories = await answer.json();
  return categories;
};

DataMovie.requestMovieagecategory = async function (categorie, age) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getMoviesagecategory&categorie=" + categorie + "&age=" + age);
  let movies = await answer.json();
  return movies;
};

DataMovie.requestMovies_mea = async function (age) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getMise_en_avant&ageLimit=" + age);
  let movies = await answer.json();
  return movies;
};

DataMovie.bar_rechercheController = async function (valeur) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=bar_recherche&titre=" + valeur);
  let movies = await answer.json();
  return movies;
};

export { DataMovie };

