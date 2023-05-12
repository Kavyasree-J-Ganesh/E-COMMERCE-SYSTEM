import { Schema, model } from 'mongoose';

const wishlistSchema = new Schema(
    {
        userId: {
            type: String
        },
        products: [{
            productId: {
                type: String
            },
            description: {
                type: String
            },
            title: {
                type: String
            },
            Image: {
                type: String
            },
            manufacturer: {
                type: String
            },
            discountedPrice: {
                type: Number
            },
            realPrice: {
                type: Number,
            }
        }],
    }
)

export default model('Wishlist', wishlistSchema);