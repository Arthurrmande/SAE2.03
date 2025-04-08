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


// let templateFile = await fetch("./component/Moviecategorie/template.html");
// let template = await templateFile.text();

// let Moviecategorie = {};

// Moviecategorie.format = function (categories) {
//   let optionsHTML = categories
//     .map((cat) => `<option value="${cat.name}">${cat.name}</option>`)
//     .join("");

//   let html = template.replace("{{categories}}", optionsHTML);
//   return html;
// };

// Moviecategorie.init = function () {
//   const select = document.getElementById("categorie-select");
//   if (!select) return;

//   select.addEventListener("change", (e) => {
//     const selectedCategory = e.target.value;
//     if (selectedCategory) {
//       C.handlerCategorie(selectedCategory);
//     }
//   });
// };

// export { Moviecategorie };
