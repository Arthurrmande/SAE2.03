let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (categories) {
  let listHTML = categories
  let html = template.replace("{{categories}}", listHTML);
  return html;
};

export { MovieCategory };


// MovieCategory.format = function (categories) {
//   let listHTML = categories.map(cat =>
//     `<li class="categorie__item">
//       <button onclick="C.handlerCategory(${cat.id})">${cat.name}</button>
//     </li>`
//   ).join("");
//   return template.replace("{{categories}}", listHTML);
// };

