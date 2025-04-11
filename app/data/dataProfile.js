let HOST_URL = "https://mmi.unilim.fr/~mande3/SAE2.03-Arthur-Mande-1";

let DataProfile = {};

DataProfile.read = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getProfil");
  let profil = await answer.json();
  return profil;
}

export {DataProfile};