-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2024 at 12:56 PM
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
-- Database: `library_app_test`
--
CREATE DATABASE IF NOT EXISTS `library_app_test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `library_app_test`;

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
('1984-3', '1984', 'George Orwell', 92, '2024-03-28 12:09:00', '2024-03-29 18:32:17', NULL),
('CT-8', 'Charlotte\'s Web', 'E.B. White', 100, '2024-03-28 12:09:00', NULL, NULL),
('DO-6', 'The Da Vinci Code', 'Dan Brown', 100, '2024-03-28 12:09:00', NULL, NULL),
('FR-10', 'Frankenstein', 'Mary Shelley', 100, '2024-03-28 12:09:00', NULL, NULL),
('GG-5', 'The Great Gatsby', 'F. Scott Fitzgerald', 1, '2024-03-28 12:09:00', NULL, NULL),
('GP-20', 'The Grapes of Wrath', 'John Steinbeck', 1, '2024-03-28 12:09:00', NULL, NULL),
('GT-19', 'Great Expectations', 'Charles Dickens', 1, '2024-03-28 12:09:00', NULL, NULL),
('HG-14', 'The Hunger Games', 'Suzanne Collins', 1, '2024-03-28 12:09:00', NULL, NULL),
('HOB-83', 'The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 1, '2024-03-28 12:09:00', NULL, NULL),
('JK-45', 'Harry Potter', 'J.K Rowling', 1, '2024-03-28 12:09:00', '2024-03-29 17:05:37', NULL),
('JN-18', 'Jane Eyre', 'Charlotte Bronte', 1, '2024-03-28 12:09:00', NULL, NULL),
('LOT-1', 'The Lord of the Rings: The Fellowship of the Ring', 'J.R.R. Tolkien', 1, '2024-03-28 12:09:00', NULL, NULL),
('LP-17', 'Les Miserables', 'Victor Hugo', 1, '2024-03-28 12:09:00', NULL, NULL),
('MA-12', 'The Martian', 'Andy Weir', 1, '2024-03-28 12:09:00', NULL, NULL),
('MB-11', 'Moby-Dick', 'Herman Melville', 1, '2024-03-28 12:09:00', NULL, NULL),
('NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 1, '2024-03-28 12:09:00', NULL, NULL),
('PD-2', 'Pride and Prejudice', 'Jane Austen', 1, '2024-03-28 12:09:00', NULL, NULL),
('SHR-1', 'A Study in Scarlet', 'Arthur Conan Doyle', 1, '2024-03-28 12:09:00', NULL, NULL),
('TC-13', 'The Chronicles of Narnia', 'C.S. Lewis', 1, '2024-03-28 12:09:00', NULL, NULL),
('TO-9', 'The Outsiders', 'S.E. Hinton', 1, '2024-03-28 12:09:00', NULL, NULL),
('TP-7', 'The Catcher in the Rye', 'J.D. Salinger', 1, '2024-03-28 12:09:00', NULL, NULL),
('TS-4', 'To Kill a Mockingbird', 'Harper Lee', 0, '2024-03-28 12:09:00', NULL, NULL),
('TW-11', 'Twilight', 'Stephenie Meyer', 0, '2024-03-28 12:09:00', NULL, NULL),
('WL-16', 'Wuthering Heights', 'Emily Bronte', 0, '2024-03-28 12:09:00', NULL, NULL),
('WP-15', 'War and Peace', 'Leo Tolstoy', 0, '2024-03-28 12:09:00', NULL, NULL);

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
('M003', 'Putri', '2024-03-28 12:10:18', NULL, NULL),
('M004', 'Budi', '2024-03-28 12:10:18', NULL, NULL),
('M005', 'Cindy', '2024-03-28 12:10:18', NULL, NULL),
('M006', 'David', '2024-03-28 12:10:18', NULL, NULL),
('M007', 'Elsa', '2024-03-28 12:10:18', NULL, NULL),
('M008', 'Fadil', '2024-03-28 12:10:18', NULL, NULL),
('M009', 'Gina', '2024-03-28 12:10:18', NULL, NULL),
('M010', 'Hendra', '2024-03-28 12:10:18', NULL, NULL),
('M011', 'Ivan', '2024-03-28 12:10:18', NULL, NULL),
('M012', 'Joko', '2024-03-28 12:10:18', NULL, NULL),
('M013', 'Kiki', '2024-03-28 12:10:18', NULL, NULL),
('M014', 'Linda', '2024-03-28 12:10:18', NULL, NULL),
('M015', 'Mega', '2024-03-28 12:10:18', NULL, NULL),
('M016', 'Nadia', '2024-03-28 12:10:18', NULL, NULL),
('M017', 'Oscar', '2024-03-28 12:10:18', NULL, NULL),
('M018', 'Putra', '2024-03-28 12:10:18', NULL, NULL);

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

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `book_code`, `member_code`, `borrowed_at`, `returned_at`, `deleted_at`) VALUES
(2, '1984-3', 'M001', '2024-03-29 18:20:57', NULL, NULL),
(3, '1984-3', 'M001', '2024-03-29 18:21:05', NULL, NULL),
(4, '1984-3', 'M002', '2024-03-29 18:22:31', NULL, NULL),
(5, '1984-3', 'M002', '2024-03-29 18:22:32', NULL, NULL),
(6, '1984-3', 'M003', '2024-03-29 18:23:38', NULL, NULL),
(7, '1984-3', 'M003', '2024-03-29 18:23:40', NULL, NULL),
(8, '1984-3', 'M004', '2024-03-20 18:28:49', '2024-03-29 18:29:58', NULL),
(10, '1984-3', 'M005', '2024-03-19 18:32:17', NULL, NULL);

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
-- Dumping data for table `restrictions`
--

INSERT INTO `restrictions` (`id`, `member_code`, `type`, `start_date`, `end_date`, `deleted_at`) VALUES
(1, 'M002', 'borrow_limit_restriction', '0000-00-00 00:00:00', NULL, NULL),
(2, 'M003', 'borrow_limit_restriction', '0000-00-00 00:00:00', NULL, NULL),
(3, 'M004', 'borrow_limit_restriction', '0000-00-00 00:00:00', '2024-03-29 18:30:08', NULL),
(4, 'M004', 'penalty_restriction', '2024-03-29 18:29:58', '2024-04-01 18:29:58', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `restrictions`
--
ALTER TABLE `restrictions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
