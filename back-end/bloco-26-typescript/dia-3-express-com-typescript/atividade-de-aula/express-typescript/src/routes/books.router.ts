import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middlewares';

const booksRouter = Router();

const booksController = new BooksController();

const booksSlashId = '/books/:id';

booksRouter.get('/books', booksController.getAll);
booksRouter.get(booksSlashId, booksController.getById);
booksRouter.post('/books/', validationBook, booksController.create);
booksRouter.put(booksSlashId, validationBook, booksController.update);
booksRouter.delete(booksSlashId, booksController.remove);

export default booksRouter;