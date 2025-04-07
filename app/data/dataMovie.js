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

DataMovie.requestCategory = async function(id) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getCategory");
  let category = await answer.json();
  return category;
}



// On exporte la fonction DataMovie.requestMovies
export { DataMovie };

// https://mmi.unilim.fr/~mande3/SAE2.03-Arthur-Mande-1/server/script.php?todo=getMovieDetail&id=7
// https://mmi.unilim.fr/~mande3/SAE2.03-Arthur-Mande-1/server/script.php?todo=getCategory


// DataMovie.requestMoviesByCategory = async function(id_category) {
//   let answer = await fetch(HOST_URL + `/server/script.php?todo=getMovieByCategory&id_category=${id_category}`);
//   let movies = await answer.json();
//   return movies;
// };
