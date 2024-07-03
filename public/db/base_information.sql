-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 02, 2024 at 09:42 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `info`
--

-- --------------------------------------------------------

--
-- Table structure for table `base_information`
--

DROP TABLE IF EXISTS `base_information`;
CREATE TABLE IF NOT EXISTS `base_information` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img` text NOT NULL,
  `title` text NOT NULL,
  `time` time NOT NULL,
  `bpm` int NOT NULL,
  `tags` json NOT NULL,
  `link` text NOT NULL,
  `price` float NOT NULL,
  `key` text NOT NULL,
  `mood` text NOT NULL,
  `genre` text NOT NULL,
  `soundSrc` text NOT NULL,
  `likes` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3961 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `base_information`
--

INSERT INTO `base_information` (`id`, `img`, `title`, `time`, `bpm`, `tags`, `link`, `price`, `key`, `mood`, `genre`, `soundSrc`, `likes`) VALUES
(1, './db/img/beef.png', 'Beef', '00:02:26', 105, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'Dm', '[\'Bouncy\', \'Dark\']', 'Hip Hop', './db/sound/beef.mp3', 2),
(2, './db/img/down with me.png', 'Down With Me', '00:02:14', 100, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'Bm', '[\'Calm\', \'Sad\']', 'Hip Hop', './db/sound/down with me.mp3', 1),
(3, './db/img/dreamy.png', 'Dreamy', '00:03:16', 100, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'C#m', '[\'Sad\', \'Dark\']', 'West Coast', './db/sound/dreamy.mp3', 1),
(4, './db/img/finesse.png', 'Finesse', '00:02:44', 105, '[\"ohgeesy\", \"new jazz\"]', '', 34.95, 'Bm', '[\'Bouncy\', \'Energetic\']', 'Trap', './db/sound/finesse.mp3', 1),
(5, './db/img/focused.png', 'Focused', '00:03:12', 100, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'Gm', '[\'Relaxed\', \'Dark\']', 'Trap', './db/sound/focused.mp3', 0),
(6, './db/img/forget me.png', 'Forget Me', '00:02:38', 100, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'A#m', '[\'Bouncy\', \'Angry\']', 'Hip Hop', './db/sound/forget me.mp3', 0),
(7, './db/img/get jiggy.png', 'Get Jiggy', '00:02:54', 99, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'Dm', '[\'Depressed, \'Dark\']', 'West Coast', './db/sound/get jiggy.mp3', 0),
(8, './db/img/groupie.png', 'Groupie', '00:02:26', 105, '[\"ohgeesy\", \"new jazz\"]', '', 34.95, 'Ebm', '[\'Angry\', \'Dark\']', 'Trap', './db/sound/groupie.mp3', 0),
(9, './db/img/heat stick.png', 'Heat Stick', '00:02:17', 105, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'C#m', '[\'Calm\', \'Dark\']', 'West Coast', './db/sound/heat stick.mp3', 2),
(10, './db/img/keep silent.png', 'Keep Silent', '00:02:56', 100, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'G#m', '[\'Relaxed\', \'Sad\']', 'Trap', './db/sound/keep silent.mp3', 0),
(11, './db/img/location.png', 'Location', '00:02:34', 90, '[\"ohgeesy\", \"ebk jaaybo\"]', '', 34.95, 'Fm', '[\'Energetic\', \'Dark\']', 'Hip Hop', './db/sound/location.mp3', 0),
(12, './db/img/lost angeles.png', 'Lost Angeles', '00:02:11', 102, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'C#m', '[\'Lonely\', \'Relaxed\']', 'Trap', './db/sound/lost angeles.mp3', 0),
(13, './db/img/musty.png', 'Musty', '00:02:33', 100, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'Dm', '[\'Angry\', \'Sad\']', 'West Coast', './db/sound/musty.mp3', 0),
(14, './db/img/pour it up.png', 'Pour It Up', '00:02:26', 105, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'C#m', '[\'Relaxed\', \'Angry\']', 'West Coast', './db/sound/pour it up.mp3', 0),
(15, './db/img/private jet.png', 'Private Jet', '00:02:40', 97, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'Fm', '[\'Sad\', \'Depressed\']', 'West Coast', './db/sound/private jet.mp3', 0),
(16, './db/img/risky.png', 'Risky', '00:02:55', 102, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'Abm', '[\'Angry\', \'Sad\']', 'West Coast', './db/sound/risky.mp3', 0),
(17, './db/img/street credibility.png', 'Street Credibility', '00:02:30', 105, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'B', '[\'Energetic\', \'Calm\']', 'Trap', './db/sound/street credibility.mp3', 0),
(18, './db/img/summer time.png', 'Summer Time', '00:02:23', 94, '[\"ohgeesy\", \"yn jay\"]', '', 34.95, 'Ebm', '[\'Depressed\', \'Bouncy\']', 'Hip Hop', './db/sound/summer time.mp3', 0),
(19, './db/img/too much.png', 'Too Much', '00:02:33', 100, '[\"ohgeesy\", \"shoreline mafia\"]', '', 34.95, 'C#m', '[\'Lonely\', \'Depressed\']', 'Trap', './db/sound/too much.mp3', 0),
(20, './db/img/yacht master.png', 'Yacht Master', '00:02:41', 95, '[\"ohgeesy\", \"yn jay\"]', '', 34.95, 'F#m', '[\'Bouncy\', \'Sad\']', 'Hip Hop', './db/sound/yacht master.mp3', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
