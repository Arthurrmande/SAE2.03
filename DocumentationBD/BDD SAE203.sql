-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 17 avr. 2025 à 08:00
-- Version du serveur : 10.11.11-MariaDB-0+deb12u1
-- Version de PHP : 8.3.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mande3`
--

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Category`
--

INSERT INTO `Category` (`id`, `name`) VALUES
(1, 'Action'),
(2, 'Comédie'),
(3, 'Drame'),
(4, 'Science-fiction'),
(5, 'Animation'),
(6, 'Thriller'),
(7, 'Horreur'),
(8, 'Aventure'),
(9, 'Fantaisie'),
(10, 'Documentaire');

-- --------------------------------------------------------

--
-- Structure de la table `Favoris`
--

CREATE TABLE `Favoris` (
  `id_profil` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Favoris`
--

INSERT INTO `Favoris` (`id_profil`, `id_movie`, `id`) VALUES
(4, 50, 53),
(4, 72, 54);

-- --------------------------------------------------------

--
-- Structure de la table `Movie`
--

CREATE TABLE `Movie` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `min_age` int(11) DEFAULT NULL,
  `mise_en_avant` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `Movie`
--

INSERT INTO `Movie` (`id`, `name`, `year`, `length`, `description`, `director`, `id_category`, `image`, `trailer`, `min_age`, `mise_en_avant`) VALUES
(7, 'Interstellar', 2014, 169, 'Un groupe d\'explorateurs voyage à travers un trou de ver pour sauver l\'humanité.', 'Christopher Nolan', 4, 'interstellar.jpg', 'https://www.youtube.com/embed/VaOijhK3CRU?si=76Ke4uw4LYjuLuQ6', 12, 1),
(12, 'La Liste de Schindler', 1993, 195, 'Un industriel allemand sauve des milliers de Juifs pendant l\'Holocauste.', 'Steven Spielberg', 3, 'schindler.webp', 'https://www.youtube.com/embed/ONWtyxzl-GE?si=xC3ASGGPy5Ib-aPn', 16, 0),
(17, 'Your Name', 2016, 107, 'Deux adolescents échangent leurs corps de manière mystérieuse.', 'Makoto Shinkai', 5, 'your_name.jpg', 'https://www.youtube.com/embed/AROOK45LXXg?si=aUQyGk2VMCb_ToUL', 10, 0),
(27, 'Le Bon, la Brute et le Truand', 1966, 161, 'Trois hommes se lancent à la recherche d\'un trésor caché.', 'Sergio Leone', 8, 'bon_brute_truand.jpg', 'https://www.youtube.com/embed/WA1hCZFOPqs?si=TwNZAoM4oj4KpGja', 12, 0),
(36, 'The Amazing Spider-Man', 2012, 136, 'En quête de vérité sur ses parents, Peter Parker affronte le Lézard et embrasse son destin de Spider-Man.', 'Marc Webb', 1, 'Amazing spiderman.jpg', 'https://www.youtube.com/embed/mJlDpguadbk?si=5aN3Z5OgR3C5wqSi', 10, 1),
(37, 'The Amazing Spider-Man : Le Destin d\'un héros', 2014, 142, 'Tiraillé entre sa vie de Peter Parker et son rôle de Spider-Man, il affronte un ennemi surpuissant : Electro.', 'Marc Webb', 1, 'Amazing spiderman2.jpg', 'https://www.youtube.com/embed/5DIzJOKh_kY?si=YJz_xKvSSUE5XcJr', 10, 0),
(47, 'Avengers', 2012, 143, 'Des super-héros s’unissent pour sauver la Terre.', 'Joss Whedon', 1, 'avengers2012.jpg', 'https://www.youtube.com/embed/eOrNdBpGMv8', 12, 0),
(48, 'Avengers: L\'Ère d\'Ultron', 2015, 141, 'Les Avengers affrontent le robot Ultron, une IA rebelle.', 'Joss Whedon', 1, 'avengers_age_of_ultron.jpg', 'https://www.youtube.com/embed/tmeOjFno6Do', 12, 0),
(49, 'Avengers: Infinity War', 2018, 149, 'Les Avengers tentent d’arrêter Thanos avant qu’il ne réunisse toutes les pierres d’Infinité.', 'Anthony et Joe Russo', 1, 'avengers_infinity_war.jpg', 'https://www.youtube.com/embed/6ZfuNTqbHE8', 12, 0),
(50, 'Avengers: Endgame', 2019, 181, 'Les survivants cherchent un moyen de vaincre Thanos et sauver l’univers.', 'Anthony et Joe Russo', 1, 'avengers_endgame.jpg', 'https://www.youtube.com/embed/TcMBFSGVi1c', 12, 1),
(51, 'Iron Man', 2008, 126, 'Tony Stark, industriel et inventeur de génie, est kidnappé et contraint de fabriquer une arme dévastatrice. Il construit alors une armure high-tech pour s’échapper.', 'Jon Favreau', 1, 'iron_man.jpg', 'https://www.youtube.com/embed/8hYlB38asDY', 12, 0),
(53, 'Iron Man 2', 2010, 124, 'Tony Stark fait face à la pression du gouvernement pour partager sa technologie, tout en combattant un nouvel ennemi : Whiplash.', 'Jon Favreau', 1, 'iron_man_2.jpg', 'https://www.youtube.com/embed/wKtcmiifycU', 12, 0),
(56, 'Iron Man 3', 2013, 130, 'Tony Stark affronte un nouvel ennemi, le Mandarin, tout en luttant contre ses propres démons.', 'Shane Black', 1, 'iron_man_3.jpg', 'https://www.youtube.com/embed/Ke1Y3P9D0Bc', 12, 0),
(68, 'Dragons', 2010, 98, 'Harold, un jeune Viking, se lie d’amitié avec un dragon et change le destin de son village.', 'Dean DeBlois & Chris Sanders', 5, 'dragons.jpg', 'https://www.youtube.com/embed/oKiYuIsPxYk', 6, 0),
(69, 'Le Chat Potté', 2011, 90, 'Le Chat Potté part à l’aventure pour retrouver des haricots magiques et affronter son passé.', 'Chris Miller', 5, 'chat_potte.jpg', 'https://www.youtube.com/embed/55phnVu9S8A', 6, 0),
(71, 'Kung Fu Panda', 2008, 92, 'Po, un panda maladroit, devient le guerrier dragon et affronte un terrible ennemi.', 'Mark Osborne & John Stevenson', 5, 'kungfupanda.jpg', 'https://www.youtube.com/embed/PXi3Mv6KMzY', 6, 0),
(72, 'Rio', 2011, 96, 'Blu, un ara bleu domestiqué, part au Brésil et découvre la liberté.', 'Carlos Saldanha', 5, 'rio.jpg', 'https://www.youtube.com/embed/P1GRO31ZxUg', 6, 0),
(74, 'Cars', 2006, 117, 'Flash McQueen, une voiture de course ambitieuse, se retrouve coincée dans une petite ville qui va changer sa vie.', 'John Lasseter', 5, 'cars.jpg', 'https://www.youtube.com/embed/W_H7_tDHFE8', 0, 1),
(75, 'Toy Story', 1995, 81, 'Quand les humains ne regardent pas, les jouets prennent vie. Woody, un cowboy, voit sa place menacée par Buzz l’Éclair.', 'John Lasseter', 5, 'toystory.jpg', 'https://www.youtube.com/embed/KYz2wyBy3kc', 0, 0),
(76, 'Conjuring : Les Dossiers Warren', 2013, 112, 'Des enquêteurs du paranormal aident une famille hantée par une présence maléfique.', 'James Wan', 7, 'conjuring.jpg', 'https://www.youtube.com/embed/k10ETZ41q5o', 16, 0),
(77, 'Ça', 2017, 135, 'Un groupe d’enfants affronte un monstre métamorphe qui prend l’apparence d’un clown.', 'Andrés Muschietti', 7, 'ca.jpg', 'https://www.youtube.com/embed/xKJmEC5ieOk', 16, 0),
(79, 'Intouchables', 2011, 112, 'Un aristocrate paraplégique engage un jeune de banlieue comme aide à domicile. Une amitié improbable naît.', 'Éric Toledano & Olivier Nakache', 2, 'intouchables.jpg', 'https://www.youtube.com/embed/0RqDiYnFxTk', 10, 0),
(80, 'Le Dîner de Cons', 1998, 80, 'Chaque semaine, des amis organisent un dîner où chacun invite un \"con\". Mais cette fois, rien ne se passe comme prévu.', 'Francis Veber', 2, 'dinerdecons.jpg', 'https://www.youtube.com/embed/H9J_QcfW8pY', 10, 0),
(81, 'Les Visiteurs', 1993, 107, 'Un chevalier du Moyen Âge et son écuyer sont projetés au XXe siècle par erreur.', 'Jean-Marie Poiré', 2, 'visiteurs.jpg', 'https://www.youtube.com/embed/Bj0yPqf1okQ', 10, 0),
(82, 'Very Bad Trip', 2009, 100, 'Après une nuit folle à Las Vegas, trois amis se réveillent sans souvenir et doivent retrouver le marié.', 'Todd Phillips', 2, 'verybadtrip.jpg', 'https://www.youtube.com/embed/tcdUhdOlz9M', 16, 0),
(83, 'Astérix & Obélix : Mission Cléopâtre', 2002, 107, 'Astérix et Obélix partent en Égypte pour aider un architecte à construire un palais en 3 mois.', 'Alain Chabat', 2, 'missioncleopatre.jpg', 'https://www.youtube.com/embed/fJjb9G9JmbY', 6, 0),
(84, 'Pirates des Caraïbes : La Malédiction du Black Pearl', 2003, 143, 'Le capitaine Jack Sparrow fait équipe avec un forgeron pour sauver une femme kidnappée par des pirates maudits.', 'Gore Verbinski', 8, 'pirates1.jpg', 'https://www.youtube.com/embed/naQr0uTrH_s', 12, 0),
(85, 'Jumanji : Bienvenue dans la Jungle', 2017, 119, 'Quatre lycéens sont aspirés dans un jeu vidéo magique et doivent survivre dans un monde sauvage pour s’en échapper.', 'Jake Kasdan', 8, 'jumanji2017.jpg', 'https://www.youtube.com/embed/2QKg5SZ_35I', 10, 0);

-- --------------------------------------------------------

--
-- Structure de la table `Note`
--

CREATE TABLE `Note` (
  `id_profil` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `note` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Note`
--

INSERT INTO `Note` (`id_profil`, `id_movie`, `id`, `note`) VALUES
(4, 7, 1, 3),
(4, 36, 2, 5),
(9, 36, 3, 3),
(4, 48, 4, 4);

-- --------------------------------------------------------

--
-- Structure de la table `Profil`
--

CREATE TABLE `Profil` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `image` varchar(150) NOT NULL,
  `age` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `Profil`
--

INSERT INTO `Profil` (`id`, `name`, `image`, `age`) VALUES
(4, 'Arthur', 'PhotoProfil.jpeg', '2006-04-12'),
(8, 'enfant', 'PhotoProfilEnfant.jpg', '2017-02-06'),
(9, 'ados', 'PhotoProfilAdos.jpg', '2011-02-06');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Favoris`
--
ALTER TABLE `Favoris`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Index pour la table `Note`
--
ALTER TABLE `Note`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Profil`
--
ALTER TABLE `Profil`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `Favoris`
--
ALTER TABLE `Favoris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT pour la table `Movie`
--
ALTER TABLE `Movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT pour la table `Note`
--
ALTER TABLE `Note`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `Profil`
--
ALTER TABLE `Profil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `Category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
