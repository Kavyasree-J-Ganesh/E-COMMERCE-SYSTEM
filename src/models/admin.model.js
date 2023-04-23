import { Schema, model } from 'mongoose';
const mongoose = require('mongoose');


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
        },
        companyname: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

export default model('Admin', adminSchema);
