import express from 'express';
import * as BorrowingController from '../controllers/BorrowingController.js'
const router = express.Router();

router.post('/checkout_book',BorrowingController.checkoutBook);
router.post('/return_book',BorrowingController.returnBook);
router.get('/borrowed_books/:id',BorrowingController.getBorrowerBorrowedBooks);
router.get('/overdue_books',BorrowingController.getOverdueBooks);

export default router;