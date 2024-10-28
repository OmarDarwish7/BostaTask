// routes/bookRoutes.js
import express from 'express';
import * as BorrowerController from '../controllers/BorrowersController.js'
const router = express.Router();

router.get('/',BorrowerController.getAllBorrowers);
router.post('/',BorrowerController.addBorrower);
router.patch('/:id',BorrowerController.updateBorrower);
router.delete('/:id',BorrowerController.deleteBorrower);
export default router;