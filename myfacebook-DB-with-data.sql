-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 21, 2022 at 09:31 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.30

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testbd`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--
-- Creation: Nov 21, 2022 at 08:26 PM
--

CREATE TABLE `users` (
  `user_ID` varchar(10) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `birthday` date NOT NULL DEFAULT '1999-01-01',
  `password` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `users`:
--

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_ID`, `first_name`, `last_name`, `username`, `email`, `birthday`, `password`) VALUES
('24d2f9821d', 'ADMIN', '', 'ADMIN ', 'admin@gmail.com', '0000-00-00', '$2a$12$6N8URNofNlfw2Z/2vcqYoutEw1toq/OmgyZKKW4i3a3J1xJIVR4jS');

-- --------------------------------------------------------

--
-- Table structure for table `user_credentials`
--
-- Creation: Nov 21, 2022 at 08:26 PM
--

CREATE TABLE `user_credentials` (
  `user_credential_ID` varchar(10) NOT NULL,
  `user_ID` varchar(10) NOT NULL,
  `access_token` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `user_credentials`:
--   `user_ID`
--       `users` -> `user_ID`
--

--
-- Dumping data for table `user_credentials`
--

INSERT INTO `user_credentials` (`user_credential_ID`, `user_ID`, `access_token`) VALUES
('29f96adb55', '24d2f9821d', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX0lEIjoiMjRkMmY5ODIxZCIsImZpcnN0TmFtZSI6IkFETUlOIiwibGFzdE5hbWUiOiIiLCJ1c2VybmFtZSI6IkFETUlOICIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiYmlydGhkYXkiOm51bGwsInBpY3R1cmVzIjp7InByb2ZpbGUiOiIvYXNzZXRzL3VzZXItcHJvZmlsZS1pbWcvZGVmYXVsdC5wbmciLCJjb3ZlciI6Ii9hc3NldHMvZmVlZC1pbWcvZGVmYXVsdC5qcGcifSwiaWF0IjoxNjY5MDYwNDg3LCJleHAiOjE2NjkwNjEzODd9.DVeRR6MXNmIDrRM4Mm8ITEHqVH-5FWInNNdV_wsUZJ8');

-- --------------------------------------------------------

--
-- Table structure for table `user_infos`
--
-- Creation: Nov 21, 2022 at 08:26 PM
--

CREATE TABLE `user_infos` (
  `user_info_ID` varchar(10) NOT NULL,
  `user_ID` varchar(10) NOT NULL,
  `bio` varchar(255) DEFAULT 'Add your bio here',
  `city` varchar(255) DEFAULT 'Antananarivo, Madagascar',
  `country` varchar(255) DEFAULT 'Antananarivo, Madagascar',
  `love_cituation` varchar(255) DEFAULT 'Single',
  `hobbies` varchar(5000) DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `user_infos`:
--   `user_ID`
--       `users` -> `user_ID`
--

--
-- Dumping data for table `user_infos`
--

INSERT INTO `user_infos` (`user_info_ID`, `user_ID`, `bio`, `city`, `country`, `love_cituation`, `hobbies`) VALUES
('29f96adb55', '24d2f9821d', 'Hey there🖐 Your beautiful ADMIN here! ', 'Antananarivo, Madagascar', 'Antananarivo, Madagascar', 'Single', '[\"coding\"]');

-- --------------------------------------------------------

--
-- Table structure for table `user_pictures`
--
-- Creation: Nov 21, 2022 at 08:26 PM
--

CREATE TABLE `user_pictures` (
  `user_picture_ID` varchar(10) NOT NULL,
  `user_ID` varchar(10) NOT NULL,
  `profile_picture` varchar(255) DEFAULT '/assets/user-profile-img/default.png',
  `cover_picture` varchar(255) DEFAULT '/assets/feed-img/default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `user_pictures`:
--   `user_ID`
--       `users` -> `user_ID`
--

--
-- Dumping data for table `user_pictures`
--

INSERT INTO `user_pictures` (`user_picture_ID`, `user_ID`, `profile_picture`, `cover_picture`) VALUES
('29f96adb55', '24d2f9821d', '/assets/user-profile-img/default.png', '/assets/feed-img/default.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user_posts`
--
-- Creation: Nov 21, 2022 at 08:26 PM
--

CREATE TABLE `user_posts` (
  `post_ID` varchar(10) NOT NULL,
  `user_ID` varchar(10) NOT NULL,
  `type` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `confidentiality` int(11) NOT NULL DEFAULT 2,
  `description` varchar(1500) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `reactions` varchar(5000) NOT NULL DEFAULT '{"like":[],"care":[],"heart":[],"wow":[],"angry":[],"sad":[],"haha":[]}',
  `shares` varchar(5000) NOT NULL DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELATIONSHIPS FOR TABLE `user_posts`:
--   `user_ID`
--       `users` -> `user_ID`
--

--
-- Dumping data for table `user_posts`
--

INSERT INTO `user_posts` (`post_ID`, `user_ID`, `type`, `date`, `confidentiality`, `description`, `content`, `reactions`, `shares`) VALUES
('20091c9c22', '24d2f9821d', 'text', '2022-11-21 20:03:19', 2, 'POST FROM ADMIN 🤗', '{\"bg\":\"#f44336\",\"color\":\"#e4e6eb\"}', '{\"like\":[],\"care\":[],\"heart\":[\"24d2f9821d\"],\"wow\":[],\"angry\":[],\"sad\":[],\"haha\":[]}', '[]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_ID`);

--
-- Indexes for table `user_credentials`
--
ALTER TABLE `user_credentials`
  ADD PRIMARY KEY (`user_credential_ID`),
  ADD UNIQUE KEY `user_ID` (`user_ID`);

--
-- Indexes for table `user_infos`
--
ALTER TABLE `user_infos`
  ADD PRIMARY KEY (`user_info_ID`),
  ADD UNIQUE KEY `user_ID` (`user_ID`);

--
-- Indexes for table `user_pictures`
--
ALTER TABLE `user_pictures`
  ADD PRIMARY KEY (`user_picture_ID`),
  ADD KEY `user_ID` (`user_ID`);

--
-- Indexes for table `user_posts`
--
ALTER TABLE `user_posts`
  ADD PRIMARY KEY (`post_ID`),
  ADD KEY `user_ID` (`user_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_credentials`
--
ALTER TABLE `user_credentials`
  ADD CONSTRAINT `user_credentials_ibfk_1` FOREIGN KEY (`user_ID`) REFERENCES `users` (`user_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_infos`
--
ALTER TABLE `user_infos`
  ADD CONSTRAINT `user_infos_ibfk_1` FOREIGN KEY (`user_ID`) REFERENCES `users` (`user_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_pictures`
--
ALTER TABLE `user_pictures`
  ADD CONSTRAINT `user_pictures_ibfk_1` FOREIGN KEY (`user_ID`) REFERENCES `users` (`user_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_posts`
--
ALTER TABLE `user_posts`
  ADD CONSTRAINT `user_posts_ibfk_1` FOREIGN KEY (`user_ID`) REFERENCES `users` (`user_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
