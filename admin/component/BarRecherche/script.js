// let templateFile = await fetch("./component/BarRecherche/template.html");
// let template = await templateFile.text();

// let BarRecherche = {};

// BarRecherche.format = function () {
//   return `
//     <input 
//       type="text" 
//       placeholder="Rechercher un film..." 
//       oninput="C.handlerBardeRecherche(this.value)"
//     />
//   `;
// };

// export { BarRecherche };

let templateFile = await fetch("./component/BarRecherche/template.html");
let template = await templateFile.text();

let BarRecherche = {};

BarRecherche.format = function () {
  return template;
};

BarRecherche.resultat = function (films) {
  const container = document.getElementById("BarRecherche-res");
  container.innerHTML = "";

  if (!films || films.length === 0) {
    container.innerHTML =
      '<li class="BarRecherche__results__item">Aucun film ne correspond à votre recherche.</li>';
    return;
  }

  for (let i = 0; i < films.length; i++) {
    const film = films[i];
    const recoActuel = film.mise_en_avant == 1;
    const recoLabel = recoActuel ? "✅ Mis en avant" : "❌ Non mis en avant";
    const buttonLabel = recoActuel ? "Retirer" : "Mettre en avant";
    const nextStatus = recoActuel ? "0" : "1";

    const li = document.createElement("li");
    li.className = "BarRecherche__results__item";
    li.innerHTML = `
      <div class="result-item">
        <strong>${film.name}</strong> (${film.year}) - ${film.category_name}
        <br/>
          <span>${recoLabel}</span>
        <br/>
        <button onclick="C.handlerMise_en_avant(${film.id}, '${film.mise_en_avant}')">
          ${buttonLabel}
        </button>
      </div>
    `;
    container.appendChild(li);
  }
};

export { BarRecherche };
