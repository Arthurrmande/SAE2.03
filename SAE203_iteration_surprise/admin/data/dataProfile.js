// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "..";

let DataProfile = {};
/**
 * DataProfile.add
 *
 * @param {*} fdata un objet FormData contenant les données du formulaire à envoyer au serveur.
 * @returns la réponse du serveur.
 */

DataProfile.addProfil = async function (fdata) {
    // fetch possède un deuxième paramètre (optionnel) qui est un objet de configuration de la requête HTTP:
    //  - method : la méthode HTTP à utiliser (GET, POST...)
    //  - body : les données à envoyer au serveur (sous forme d'objet FormData ou bien d'une chaîne de caractères, par exempe JSON)    
    let config = {
        method: "POST", // méthode HTTP à utiliser
        body: fdata // données à envoyer sous forme d'objet FormData
    };

    let answer = await fetch(HOST_URL + "/server/script.php?todo=addProfil&",config);
    let data = await answer.json();
    return data;
};

DataProfile.changeProfil = async function (fdata) {
    // fetch possède un deuxième paramètre (optionnel) qui est un objet de configuration de la requête HTTP:
    //  - method : la méthode HTTP à utiliser (GET, POST...)
    //  - body : les données à envoyer au serveur (sous forme d'objet FormData ou bien d'une chaîne de caractères, par exempe JSON)    
    let config = {
        method: "POST", // méthode HTTP à utiliser
        body: fdata // données à envoyer sous forme d'objet FormData
    };
    console.log(config);
    let answer = await fetch(HOST_URL + "/server/script.php?todo=changeProfil&",config);
    let data = await answer.json();
    return data;
};

DataProfile.getProfil = async function () {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=getProfil");
    let data = await answer.json();
    return data;
};

export { DataProfile };
