import express from "express";
import * as WishlistController from '../controllers/wishlist.controller'
import { userAuth } from "../middlewares/auth.middleware";


const router = express.Router();

// Add product to wishlist
router.post('/:_id', userAuth, WishlistController.addToWishlistController);

// Remove product from wishlist
router.put('/:_id', userAuth, WishlistController.removeProduct);

// Get all product from Wishlist
router.get('/', userAuth, WishlistController.getWishlist);

export default router;