// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~mande3/SAE2.03-Arthur-Mande-1";

let DataMovie = {};

DataMovie.requestMovies = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getMovie");
  let movies = await answer.json();
  return movies;
};

DataMovie.requestMoviesbyage = async function (ageLimit = 100) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getMovie&ageLimit=" + ageLimit);
  let movies = await answer.json();

  // On filtre les films en fonction de l'âge limite
  let filtered = movies.filter(movie => {
    return parseInt(movie.ageLimit) <= ageLimit; //assure qu'on compare bien des entiers
  });

  return filtered;
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

