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
   let config = {
        method: "POST", 
        body: fdata 
    };

    let answer = await fetch(HOST_URL + "/server/script.php?todo=addProfil&",config);
    let data = await answer.json();
    return data;
};

DataProfile.changeProfil = async function (fdata) {
    let config = {
        method: "POST", 
        body: fdata 
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
