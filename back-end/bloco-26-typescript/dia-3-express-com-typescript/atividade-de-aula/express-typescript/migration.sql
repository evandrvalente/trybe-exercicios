CREATE DATABASE IF NOT EXISTS books_api;

USE books_api;

CREATE TABLE IF NOT EXISTS  books
(
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	price DECIMAL(10, 2),
	author VARCHAR(100) NOT NULL,
	isbn VARCHAR(100),
	PRIMARY KEY(id)
);

SET SQL_SAFE_UPDATES = 0;