import categoriesModel from "../models/categories.model";

export const getCategory= async (userId)=>{
    let categories = await categoriesModel.find();
    return categories;
}