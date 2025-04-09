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

// DataMovie.requestMoviecategorie = async function (categorie) {
//   let answer = await fetch(HOST_URL + "/server/script.php?todo=getMoviecategorie&categorie=" + categorie);
//   let movie = await answer.json();
//   return movie;
// };

DataMovie.requestMovieagecategory = async function (categorie, age) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getMoviesagecategory&categorie=" + categorie + "&age=" + age);
  let movies = await answer.json();
  return movies;
};

// On exporte la fonction DataMovie.requestMovies
export { DataMovie };

