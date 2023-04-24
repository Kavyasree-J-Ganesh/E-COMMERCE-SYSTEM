const mongoose = require('mongoose');
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    realPrice: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    reviewcount: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        required: true
    },
    buyprice: {
        type: Number,
        required: true
    },
    categories: {
        type: String,
        required: true,
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                "Books",
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ]
        }
    }
},
    {
        timestamps: true
    });


export default model('Product', productSchema);