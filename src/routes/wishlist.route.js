import express from "express";
import * as WishlistController from '../controllers/wishlist.controller'
import { userAuth } from "../middlewares/auth.middleware";


const router = express.Router();

// router.post("/:id", userAuth, WishlistController.addtoWishlist)

export default router;