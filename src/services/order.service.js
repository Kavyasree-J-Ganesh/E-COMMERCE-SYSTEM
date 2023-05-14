import cartNewModel from "../models/cart.new.model";
import orderModel from "../models/order.model";
import { purchaseById } from "./cart.new.service";


export const createOrder= async (body)=>{
    await purchaseById(body.userId)
    let order = await orderModel.create(body)
    return order;
}

export const getOrders = async(userId)=>{
    const result = await orderModel.find({userId})
    return result;
}