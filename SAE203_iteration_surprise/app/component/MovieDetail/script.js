let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (movie) {
  let detail = template;

  detail = detail.replace("{{url}}", movie.trailer);
  detail = detail.replace("{{titre}}", movie.name);
  console.log(movie);

  detail = detail.replace("{{image}}", movie.image);
  detail = detail.replace("{{desc}}", movie.description);
  detail = detail.replace("{{realisateur}}", movie.director);
  detail = detail.replace("{{annee}}", movie.year);
  detail = detail.replace("{{duree}}", movie.length);
  detail = detail.replace("{{categorie}}", movie.category_name);
  detail = detail.replace("{{age}}", movie.min_age);
  detail = detail.replace("{{note}}", movie.note);

  detail = detail.replace("{{handlerfavori}}", `event.stopPropagation(); C.handlerfavori(${movie.id})`);
  detail = detail.replace("{{handlerdelfav}}", `event.stopPropagation(); C.handlerdelfav(${movie.id})`);
  console.log(movie.note);

  return detail;
};

export { MovieDetail };
