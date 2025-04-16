let templateFile = await fetch("./component/BarRecherche/template.html");
let template = await templateFile.text();

let BarRecherche = {};

BarRecherche.format = function () {
  return `
    <input 
      type="text" 
      placeholder="Rechercher un film..." 
      oninput="C.handlerBardeRecherche(this.value)"
    />
  `;
};

export { BarRecherche };
