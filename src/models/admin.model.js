import { Schema, model } from 'mongoose';
const mongoose = require('mongoose');

// rest of your code


const adminSchema = new Schema(
    {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        phonenumber: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export default model('Admin', adminSchema);
