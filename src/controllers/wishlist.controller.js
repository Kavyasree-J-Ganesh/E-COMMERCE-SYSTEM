import HttpStatus from 'http-status-codes';
import * as wishlistService from '../services/wishlist.service'


// Add to wishlist
export const addToWishlistController = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const productId = req.params._id;

        const result = await wishlistService.addToWishlist(userId, productId);

        res.status(200).json({
            success: true,
            message: 'Product added to wishlist',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


//remove from wishlist 
export const removeProduct = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const productId = req.params._id;

        const result = await wishlistService.removeProduct(userId, productId);

        res.status(200).json({
            success: true,
            message: 'Product removed from wishlist',
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


// Remove Product from Wishlist
export const getWishlist = async (req, res) => {
    try {
        const data = await wishlistService.getWishlist(req.body.userId);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Wishlist'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};


