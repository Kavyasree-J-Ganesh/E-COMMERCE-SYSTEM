import Wishlist from '../models/wishlist.model';
import products from '../models/product.model';


export const addToWishlist = async (userId, productId) => {
    const product = await products.findById(productId)
    if (!product) throw new Error('Product not found');

    const wishlist = await Wishlist.findOne({ userId })
    if (wishlist) {
        const existingProduct = wishlist.products.find((item) => item.productId === productId);
        if (existingProduct) {
            return wishlist;
        } else {
            wishlist.products.push({
                productId: product._id,
                description: product.description,
                title: product.title,
                Image: product.image,
                manufacturer: product.manufacturer,
                discountedPrice: product.discountedPrice,
                realPrice: product.realPrice
            });
            const updatedWishlist = await wishlist.save();
            return updatedWishlist;
        }
    } else {
        const newWishlist = new Wishlist({
            userId: userId,
            products: [
                {
                    productId: product._id,
                    description: product.description,
                    title: product.title,
                    Image: product.image,
                    manufacturer: product.manufacturer,
                    discountedPrice: product.discountedPrice,
                    realPrice: product.realPrice
                },
            ],
        });
        const createdWishlist = await newWishlist.save();
        return createdWishlist;
    }
}


//remove product from wishlist
export const removeProduct = async (userId, productId) => {
    const checkWishlist = await Wishlist.findOne({ userId });
    if (!checkWishlist) {
        throw new Error("User wishlist doesn't exist");
    }

    const product = checkWishlist.products.find(p => p.productId === productId);
    if (!product) {
        throw new Error('product not in the wishlist');
    }

    const newProducts = checkWishlist.products.filter(p => p.productId !== productId);

    const updatedCart = await Wishlist.findOneAndUpdate(
        { userId: userId },
        { products: newProducts },
        { new: true }
    );

    return updatedCart;
};



//Get all from wishlist
export const getWishlist = async (userId) => {
    const checkWishlist = await Wishlist.findOne({ userId });
    if (checkWishlist) {
        return checkWishlist;
    } else {
        throw new Error('Error getting Wishlist');
    }
};