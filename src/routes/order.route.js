import express from 'express';
import * as orderController from '../controllers/order.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// delete product from cart
router.post('/', userAuth, orderController.createOrder)


export default router;
