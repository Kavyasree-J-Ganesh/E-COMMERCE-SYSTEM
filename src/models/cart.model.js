import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
    userId: {
        type: String
    },
    product: [
        {
            productId: {
                type: String
            },
            description: {
                type: String
            },
            title: {
                type: String
            },
            image: {
                type: String
            },
            manufacturer: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            },
            realPrice: {
                type: Number,
                required: true
            },
            discountedPrice: {
                type: Number,
                required: true
            },
        }
    ],
    cart_total: {
        type: Number
    },
    isPurchased: {
        type: Boolean,
        default: false
    }

});

export default model('cart', cartSchema);
