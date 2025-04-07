// let templateFile = await fetch("./component/MovieCategory/template.html");
// let template = await templateFile.text();

// let MovieCategory = {};

// MovieCategory.format = function (category) {
//   let listHTML = category.map((cat) =>`<li class="categorie__item" onclick="C.handlerCategory("${cat.name}")">${cat.name}</li>`)
//   .join("");

//   let html = template.replace("{{category}}", listHTML);
//   return html;
// };

// export { MovieCategory };

let templateFile = await fetch("./component/Moviecategorie/template.html");
let template = await templateFile.text();

let Moviecategorie = {};

Moviecategorie.format = function (categories) {
  let listHTML = categories
    .map(
      (cat) =>
        `<li class="categorie__tag" onclick="C.handlerCategorie('${cat.name}')">${cat.name}</li>`
    )
    .join("");

  let html = template.replace("{{categories}}", listHTML);
  return html;
};

export { Moviecategorie };

