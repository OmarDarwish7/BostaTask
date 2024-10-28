import express from 'express';
import * as BookControllers from '../controllers/BookController.js';

const router = express.Router();

router.get('/',BookControllers.getBooks);
router.delete('/:id',BookControllers.deleteBook);
router.post('/',BookControllers.addBook);
router.patch('/:id',BookControllers.updateBook);

export default router;