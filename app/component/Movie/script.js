let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movies) {
  if (movies.length === 0) {
    return "<p>Aucun film disponible dans cette catégorie   </p>";
  }

  let html = "";
  movies.forEach((movie) => {
    let movieHtml = template;
    movieHtml = movieHtml.replace("{{titre}}", movie.name);
    movieHtml = movieHtml.replace("{{image}}", movie.image);
    movieHtml = movieHtml.replace("{{handler}}",`C.handlerDetail(${movie.id})`);
    html += movieHtml;
  });
  return html;
};


export { Movie };