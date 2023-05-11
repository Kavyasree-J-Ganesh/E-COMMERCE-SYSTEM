import * as productService from '../services/product.services';
import HttpStatus from 'http-status-codes';


export const getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts(req.query.category, req.query.searchText);
        res.json(products);
    } catch (error) {
        next(error);
    }
};

// Get Product by id
export const getProductsbyID = async (req, res, next) => {
    try {
        const data = await productService.getProductsbyID(req.params._id, req.body.userId);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Product fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

// Sorting of product High to Low using price
export const sortHighToLow = async (req, res, next) => {
    try {
        const data = await productService.highToLow();
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Product fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

// Sorting of product Low to High using price
export const sortLowToHigh = async (req, res, next) => {
    try {
        const data = await productService.lowToHigh();
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Product fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

// Find Product by search
export const searchByText = async (req, res, next) => {
    try {
        const data = await productService.searchByText(req.params.searchText);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Product fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};

// Find Product by Arrival
export const newArrival = async (req, res, next) => {
    try {
        const data = await productService.newArrival(req.params.searchText);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Product fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};


export const createProduct = async (req, res, next) => {
    try {
        const productData = req.body;
        const newProduct = await productService.createProduct(productData);
        res.json(newProduct);
    } catch (error) {
        next(error);
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const productData = req.body;
        const updatedProduct = await productService.updateProduct(productId, productData);
        res.json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await productService.deleteProduct(productId);
        res.json(deletedProduct);
    } catch (error) {
        next(error);
    }
};


