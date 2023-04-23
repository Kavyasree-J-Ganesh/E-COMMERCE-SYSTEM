import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.service';

// update Cart address Details
export const updateAddressDetails = async (req, res) => {
    try {
        const data = await cartService.updateAddressDetails(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Product updated as purchased'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};

// Add Book To Card
export const addedToCart = async (req, res, next) => {
    try {
        const data = await cartService.addedToCart(
            req.body.userId,
            req.params._id
        );
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Added to Cart successfully'
        });
    } catch (error) {
        next(error);
    }
};


// Remove Product From Cart
export const removeProductFromCart = async (req, res) => {
    try {
        const data = await cartService.removeproductFromCart(
            req.body.EmailId,
            req.params._id
        );
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'book removed from cart successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};


// purchase Product by id
export const purchaseById = async (req, res) => {
    try {
        const data = await cartService.purchaseById(req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Product updated as purchased'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};
