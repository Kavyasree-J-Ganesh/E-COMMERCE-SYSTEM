import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// get all product of cart
router.get('/', userAuth, cartController.getCart);

// add Products to the cart
router.post('/:_id', userAuth, cartController.addedToCart);

//remove Products from the cart
router.put('/:_id/', userAuth, cartController.removeProductFromCart);

// purchase Products from cart
router.post('/purchase/:_id', userAuth, cartController.purchaseById);

export default router;
