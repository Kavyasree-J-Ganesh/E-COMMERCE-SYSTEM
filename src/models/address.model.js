import { Schema, model } from 'mongoose';

const addressSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    userId: {
        type: String
    }
}, {
    timestamps: true
});

export default model('address', addressSchema);
