let HOST_URL = "..";

let DataProfile = {};

DataProfile.read = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=getProfil");
  let profil = await answer.json();
  return profil;
}

DataProfile.addLike = async function (id_profil, id_movie) {
  const fd = new FormData();
  fd.append("id_profil", id_profil);
  fd.append("id_movie", id_movie);
  
  const res = await fetch(HOST_URL + "/server/script.php?todo=addLike", {
    method: "POST",
    body: fd,
  });

  return await res.json();
}

DataProfile.requestGetfavoris = async function (id_Profil) {
  const fd = new FormData();
  fd.append("id_Profil", id_Profil);

  const res = await fetch(HOST_URL + "/server/script.php?todo=getLikes&id_profil=" + id_Profil);

  return await res.json();
};


DataProfile.deleteLike = async function (id_profil, id_movie) {
  const fd = new FormData();
  fd.append("id_profil", id_profil);
  fd.append("id_movie", id_movie);
  
  const res = await fetch(HOST_URL + "/server/script.php?todo=deleteLike&id_profil=" + id_profil + "&id_movie=" + id_movie,);

  return await res.json();
}





export {DataProfile};