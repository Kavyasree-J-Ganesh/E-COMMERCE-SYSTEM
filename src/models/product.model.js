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
        required: false,
        default: 0
    },
    reviewcount: {
        type: Number,
        required: false,
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
    category: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });


export default model('Product', productSchema);