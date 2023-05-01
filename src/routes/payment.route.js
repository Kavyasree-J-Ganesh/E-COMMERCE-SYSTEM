import express from 'express';
import * as paymentController from '../controllers/payment.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('', paymentController.makePayment);
router.post(
  '/createPaymentIntent',
  userAuth,
  paymentController.createPaymentIntend
);

export default router;
