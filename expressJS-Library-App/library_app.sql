-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2024 at 11:50 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_app`
--
CREATE DATABASE IF NOT EXISTS `library_app` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `library_app`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `code` varchar(10) NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `author` varchar(128) DEFAULT NULL,
  `stock` int(8) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`code`, `title`, `author`, `stock`, `created_at`, `updated_at`, `deleted_at`) VALUES
('HOB-83', 'The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 1, '2024-03-28 12:09:00', NULL, NULL),
('JK-45', 'Harry Potter', 'J.K Rowling', 1, '2024-03-28 12:09:00', '2024-03-29 17:05:37', NULL),
('NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 1, '2024-03-28 12:09:00', NULL, NULL),
('SHR-1', 'A Study in Scarlet', 'Arthur Conan Doyle', 1, '2024-03-28 12:09:00', NULL, NULL),
('TW-11', 'Twilight', 'Stephenie Meyer', 1, '2024-03-28 12:09:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `code` varchar(10) NOT NULL,
  `name` varchar(128) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`code`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
('M001', 'Angga', '2024-03-28 12:10:18', NULL, NULL),
('M002', 'Ferry', '2024-03-28 12:10:18', NULL, NULL),
('M003', 'Putri', '2024-03-28 12:10:18', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `book_code` varchar(64) NOT NULL,
  `member_code` varchar(64) NOT NULL,
  `borrowed_at` datetime NOT NULL DEFAULT current_timestamp(),
  `returned_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restrictions`
--

CREATE TABLE `restrictions` (
  `id` int(11) NOT NULL,
  `member_code` varchar(128) DEFAULT NULL,
  `type` enum('borrow_limit_restriction','penalty_restriction') NOT NULL DEFAULT 'borrow_limit_restriction',
  `start_date` datetime NOT NULL DEFAULT current_timestamp(),
  `end_date` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`code`),
  ADD KEY `book_title_index` (`title`),
  ADD KEY `book_author_index` (`author`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD KEY `members_name_index` (`name`);

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `records_book_code_index` (`book_code`) USING BTREE,
  ADD KEY `records_member_code_index` (`member_code`) USING BTREE;

--
-- Indexes for table `restrictions`
--
ALTER TABLE `restrictions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `restricition_member_code_index` (`member_code`),
  ADD KEY `borrower_restriction_index` (`type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `restrictions`
--
ALTER TABLE `restrictions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
