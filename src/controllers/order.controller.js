import HttpStatus from "http-status-codes"
import * as orderService from "./../services/order.service"

export const createOrder = async (req, res, next) => {
    try {
        const orderData = req.body;
        const order = await orderService.createOrder(orderData);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: order,
            message: 'Order created successfully'
          })
    } catch (error) {
        next(error);
    }
};

export const getOrders = async (req, res, next) => {
    try {
        const order = await orderService.getOrders(req.body.userId);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: order,
            message: 'Orders Fetched successfully'
          })
    } catch (error) {
        next(error);
    }
};


