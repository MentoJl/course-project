-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 11 2024 г., 17:23
-- Версия сервера: 8.3.0
-- Версия PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `info`
--

-- --------------------------------------------------------

--
-- Структура таблицы `base_information`
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
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `base_information`
--

INSERT INTO `base_information` (`id`, `img`, `title`, `time`, `bpm`, `tags`, `link`, `price`, `key`, `mood`, `genre`, `soundSrc`) VALUES
(1, 'public\\db\\img\\beef.png', 'Beef', '00:02:26', 105, '{\"beat\": \"\", \"music\": \"\", \"bitmaker\": \"\"}', '', 34.95, 'Dm', 'shoreline mafia & ohgeesy', 'Hip Hop', 'public\\db\\sound\\beef.mp3'),
(2, 'public\\db\\img\\down with me.png', 'Down With Me', '00:02:14', 100, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'Bm', '', 'Hip Hop', 'public\\db\\sound\\down with me.mp3'),
(3, 'public\\db\\img\\dreamy.png', 'Dreamy', '00:03:16', 100, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'C#m', '', 'West Coast', 'public\\db\\sound\\dreamy.mp3'),
(4, 'public\\db\\img\\finesse.png', 'Finesse', '00:02:44', 105, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'Bm', '', 'Rnb', 'public\\db\\sound\\finesse.mp3'),
(5, 'public\\db\\img\\focused.png', 'Focused', '00:03:12', 100, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'Gm', '', 'Trap', 'public\\db\\sound\\focused.mp3'),
(6, 'public\\db\\img\\forget me.png', 'Forget Me', '00:02:38', 100, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'A#m', '', 'Hip Hop', 'public\\db\\sound\\forget me.mp3'),
(7, 'public\\db\\img\\get jiggy.png', 'Get Jiggy', '00:02:54', 99, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'Dm', '', 'Alternative Rnb', 'public\\db\\sound\\get jiggy.mp3'),
(8, 'public\\db\\img\\groupie.png', 'Groupie', '00:02:26', 105, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'Ebm', '', 'Electronic', 'public\\db\\sound\\groupie.mp3'),
(9, 'public\\db\\img\\heat stick.png', 'Heat Stick', '00:02:17', 105, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'C#m', 'test1', 'Electronic', 'public\\db\\sound\\heat stick.mp3'),
(10, 'public\\db\\img\\keep silent.png', 'Keep Silent', '00:02:56', 100, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'G#m', '', 'Trap', 'public\\db\\sound\\keep silent.mp3'),
(11, 'public\\db\\img\\location.png', 'Location', '00:02:34', 90, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'Fm', '', 'Hip Hop', 'public\\db\\sound\\location.mp3'),
(12, 'public\\db\\img\\lost angeles.png', 'Lost Angeles', '00:02:11', 102, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'C#m', '', 'Trap', 'public\\db\\sound\\lost angeles.mp3'),
(13, 'public\\db\\img\\musty.png', 'Musty', '00:02:33', 100, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'Dm', '', 'Rnb', 'public\\db\\sound\\musty.mp3'),
(14, 'public\\db\\img\\pour it up.png', 'Pour It Up', '00:02:26', 105, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'C#m', '', 'Alternative Rnb', 'public\\db\\sound\\pour it up.mp3'),
(15, 'public\\db\\img\\private jet.png', 'Private Jet', '00:02:40', 97, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'Fm', '', 'West Coast', 'public\\db\\sound\\private jet.mp3'),
(16, 'public\\db\\img\\risty.png', 'Risty', '00:02:55', 102, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'Abm', '', 'Rnb', 'public\\db\\sound\\risty.mp3'),
(17, 'public\\db\\img\\street credibility.png', 'Street Credibility', '00:02:30', 105, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'B', '', 'Trap', 'public\\db\\sound\\street credibility.mp3'),
(18, 'public\\db\\img\\summer time.png', 'Summer Time', '00:02:23', 94, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'Ebm', '', 'Alternative Rnb', 'public\\db\\sound\\summer time.mp3'),
(19, 'public\\db\\img\\too much.png', 'Too Much', '00:02:33', 100, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'C#m', '', 'Trap', 'public\\db\\sound\\too much.mp3'),
(20, 'public\\db\\img\\yacht master.png', 'Yacht Master', '00:02:41', 95, '{\"ohgeesy\": \"\", \"shoreline mafia\": \"\"}', '', 50, 'F#m', '', 'Hip Hop', 'public\\db\\sound\\yacht master.mp3');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
