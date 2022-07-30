import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const booksRouter = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);

export default booksRouter;