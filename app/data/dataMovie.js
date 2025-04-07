// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~mande3/SAE2.03-Arthur-Mande-1";

let DataMovie = {};

// DataMovie.requestMovies = async function () {
//   // Récupération des films
//   let answer = await fetch(HOST_URL + "server/script.php?todo=getMovie");
//   let movies = await answer.json();
//   return movies;
// };

DataMovie.requestMovies = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getMovie");
  let movies = await answer.json();
  return movies;
};

DataMovie.requestMovieDetails = async function(id) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getMovieDetail&id=" + id);
  let movieDetails = await answer.json();
  return movieDetails;
}

// DataMovie.requestCategory = async function() {
//   let answer = await fetch(HOST_URL + "/server/script.php?todo=getCategory");
//   let cat = await answer.json();
//   return cat;
// }

DataMovie.requestCategories = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getCategories");
  let categories = await answer.json();
  return categories;
};


// DataMovie.requestMoviesByCategory = async function(category) {
//   let answer = await fetch(HOST_URL + "/server/script.php?todo=getMovieByCategory&category=" + category);
//   let categorys = await answer.json();
//   return categorys;
// };

DataMovie.requestMoviecategorie = async function (categorie) {
  let answer = await fetch(
    HOST_URL +
      "/server/script.php?todo=getMoviecategorie&categorie=" +
      categorie
  );
  let movie = await answer.json();
  return movie;
};



// On exporte la fonction DataMovie.requestMovies
export { DataMovie };

// https://mmi.unilim.fr/~mande3/SAE2.03-Arthur-Mande-1/server/script.php?todo=getMovieDetail&id=7
// https://mmi.unilim.fr/~mande3/SAE2.03-Arthur-Mande-1/server/script.php?todo=getCategory


