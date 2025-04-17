Itération 5 : 

Pour la cinquième itération, il nous est demandé de gérer des utilisateurs. 
J'ai donc décidé de créer une nouvelle table nommée Profil. 

Cette table comporte les attributs suivants :

id : Une clé unique en mode auto-incrément de type INT.
name : de type VARCHAR(150) pour stocker le nom de l'utilisateur.
image : de type VARCHAR(150) pour stocker le nom de l'image.
age : de type DATE pour enregistrer la date de naissance de l'utilisateur.


Iteration 9 : 

Pour la neuvième itération, il nous est demandé de gérer des favoris. 
J'ai donc décidé de créer une nouvelle table nommée Favoris. 

Cette table comporte les attributs suivants :

id : Une clé unique en mode auto-incrément de type INT.
id_profil : de type INT pour stocker l'id du profil qui a aimer le film.
id_movie : de type INT pour stocker l'id du film aimer.


Iteration 11 : 

Pour la onzième itération, il nous est demandé de gérer des films mis en avant. 
J'ai donc décidé de rajouter un attribut dans la table Movie. 

J'ai rajouté l'attribut suivant :

mise_en_avant :  de type tinyinit et qui met une valeur par default 0.
(le but et d'afficher les films avec une valeur 1, si 0 ils ne sont pas mis en avant et si 1 ils sont mis en avant)


Iteration 14 : 

Pour la quatorzieme itération, il nous est demandé de gérer un systeme de notation. 
J'ai donc décidé de créer une nouvelle table nommée Note. 

Cette table comporte les attributs suivants :

id : Une clé unique en mode auto-incrément de type INT.
id_profil : de type INT pour stocker l'id du profil qui a noter le film.
id_movie : de type INT pour stocker l'id du film noter.
note : de type INT pour stocker la note donne par un profil.