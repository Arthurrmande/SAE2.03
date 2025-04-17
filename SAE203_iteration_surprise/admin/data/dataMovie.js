// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "..";

let DataMovie = {};

/** DataMovie.add
 * 
 * @param {*} fdata un objet FormData contenant les données du formulaire à envoyer au serveur.
 * @returns la réponse du serveur.
 */
DataMovie.add = async function (fdata) {
    // fetch possède un deuxième paramètre (optionnel) qui est un objet de configuration de la requête HTTP:
    //  - method : la méthode HTTP à utiliser (GET, POST...)
    //  - body : les données à envoyer au serveur (sous forme d'objet FormData ou bien d'une chaîne de caractères, par exempe JSON)
    let config = {
        method: "POST", // méthode HTTP à utiliser
        body: fdata // données à envoyer sous forme d'objet FormData
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addMovie", config);
    let data = await answer.json();
    return data;
}

/** DataMovie.update
 *
 * @param {*} fdata un objet FormData contenant les données du formulaire à envoyer au serveur.
 * @returns la réponse du serveur.
 */

DataMovie.update = async function (fdata) {
  // fetch possède un deuxième paramètre (optionnel) qui est un objet de configuration de la requête HTTP:
  //  - method : la méthode HTTP à utiliser (GET, POST...)
  //  - body : les données à envoyer au serveur (sous forme d'objet FormData ou bien d'une chaîne de caractères, par exempe JSON)
  
  let config = {
    method: "POST", // méthode HTTP à utiliser
    body: fdata, // données à envoyer sous forme d'objet FormData
  };

  let answer = await fetch(HOST_URL + "/server/script.php?todo=update", config);
  console.log(answer);
  let data = await answer.json();
  return data;
};

DataMovie.bar_rechercheController = async function (valeur) {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=bar_recherche&titre=" + valeur);
  let movies = await answer.json();
  return movies;
};

DataMovie.Mise_en_avant = async function (id, mea) {
  const fdata = new FormData();
  fdata.append("id", id);
  fdata.append("mise_en_avant", mea);

  let config = {
    method: "POST", // méthode HTTP à utiliser
    body: fdata, // données à envoyer sous forme d'objet FormData
  };

  const response = await fetch(HOST_URL + "/server/script.php?todo=changeMise_en_avant", config);
  let data = await response.json();
  return data;
};

export {DataMovie};
