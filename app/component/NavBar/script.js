let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout, hProfile, profiles, handlerfavoris) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hProfile}}", `"${hProfile}"`);
  html = html.replace("{{handlerfavoris}}", handlerfavoris);

  let options = "";
  for (let i = 0; i < profiles.length; i++) {
    let p = profiles[i];
    options += `<option value="${p.name}" data-img="${p.image}" data-dob="${p.age}" data-id="${p.id}">${p.name}</option>`;
  }

  let image = profiles.length > 0 ? profiles[0].image : "";
  html = html.replace("{{options}}", options);
  html = html.replace("{{image}}", image);

  return html;
};

export { NavBar };

