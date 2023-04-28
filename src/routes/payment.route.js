import express from 'express';
import * as paymentController from '../controllers/payment.controller'

const router = express.Router();

router.post('', paymentController.makePayment);

export default router;