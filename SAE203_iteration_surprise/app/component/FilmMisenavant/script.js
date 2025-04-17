let FilmMisenavant = {};

async function loadTemplate() {
  let templateFile = await fetch("./component/FilmMisenavant/template.html");
  return await templateFile.text();
}

FilmMisenavant.format = async function (movies) {
  if (!movies.length) return "";

  let template = await loadTemplate();
  let card = "";
  for (let movie of movies) {
    const image = movie.image ?? "placeholder.jpg";
    const name = movie.name ?? "Sans titre";
    const description = movie.description ?? "Aucune description disponible.";

    card += `
      <div class="mea__slide" onclick="C.handlerDetail(${movie.id})">
        <img class="mea__image" src="../server/images/${image}" alt="${name}" />
        <div class="mea__overlay">
          <h3 class="mea__name">${name}</h3>
          <p class="mea__desc">${description}</p>
        </div>
      </div>
    `;
  }

  return template.replace("{{card}}", card);
};



export { FilmMisenavant };
