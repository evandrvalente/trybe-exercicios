import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const booksRouter = Router();

const booksController = new BooksController();

booksRouter.get('/books', booksController.getAll);
booksRouter.get('/books/:id', booksController.getById);

export default booksRouter;