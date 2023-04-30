const mongoose = require('mongoose');
import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });


export default model('categories', categorySchema);