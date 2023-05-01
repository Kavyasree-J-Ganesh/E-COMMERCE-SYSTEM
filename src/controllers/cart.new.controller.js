import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.new.service';


export const updateAddressDetails = async (req, res) => {
    try {
        const data = await cartService.updateAddressDetails(req.params.cartId, req.body._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Address details updated'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};


// get address by id 
export const getAddresses = async (req, res) => {
    try {
        const userId = req.params.userId;
        const addresses = await cartService.getAddresses(userId);
        res.json(addresses);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// get all address
export const getAllAddresses = async (req, res) => {
    try {
        const addresses = await cartService.getAllAddresses();
        res.json(addresses);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
};


// Get cart details
export const getCart = async (req, res, next) => {
    try {
        const data = await cartService.getCart(
            req.body.userId,
        );
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Fetched cart successfully'
        });

    } catch (error) {
        next(error)
    }
};

export const cartOrdersAnalysis =  async (req,res, next)=>{
    try {
        const data = await cartService.cartOrdersAnalysis(
        );
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Orders against categories fetched'
        });

    } catch (error) {
        next(error)
    }
}

// Add Product To Card
export const addedToCart = async (req, res, next) => {
    try {
        const data = await cartService.addedToCart(
            req.body.userId,
            req.params._id
        );
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
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
            req.body.userId,
            req.params._id
        );
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Product removed from cart successfully'
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
