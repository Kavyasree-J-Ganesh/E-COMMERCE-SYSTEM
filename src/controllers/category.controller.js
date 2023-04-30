import *as categoryService from "../services/category.service"
import HttpStatus from "http-status-codes"

// Get cart details
export const getCategory = async (req, res, next) => {
    try {
        const data = await categoryService.getCategory(
        );
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Fetched cart successfully'
        });

    } catch (error) {
        next(error)
    }
}