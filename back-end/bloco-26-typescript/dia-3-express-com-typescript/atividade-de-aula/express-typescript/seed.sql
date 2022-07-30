
USE books_api;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `books`;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO books_api.books (title, price, author, isbn)
VALUES ('Código Limpo', 125.9, 'Robert C Martin', '8576082675'),
	('Refatoração', 129.9, 'Martin Fowler', '8575227246'),
	('Padrões de Projetos', 141.98, 'Erich Gamma', '8573076100');