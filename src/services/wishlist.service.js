import Wishlist from '../models/wishlist.model';
import products from '../models/product.model';

export const addToWishlist = async (userId, productId) => {
    try {
        const product = await products.findById(productId);
        if (!product) throw new Error('Product not found');

        const wishlist = await Wishlist.findOne({ userId });
        if (wishlist) {
            const existingProduct = wishlist.products.find(
                (item) => item.productId === productId
            );
            if (existingProduct) {
                console.log('Product already exists in wishlist');
                return wishlist;
            } else {
                wishlist.products.push({
                    productId: product._id,
                    description: product.description,
                    title: product.title,
                    Image: product.image,
                    manufacturer: product.manufacturer,
                    discountedPrice: product.discountedPrice,
                });
                const updatedWishlist = await wishlist.save();
                console.log('Product added to existing wishlist');
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
                    },
                ],
            });
            const createdWishlist = await newWishlist.save();
            console.log('New wishlist created and product added');
            return createdWishlist;
        }
    } catch (error) {
        console.error(error);
        throw { message: 'Failed to add product to wishlist', code: 500 };
    }
};

export const removeProduct = async (userId, productId) => {
    const checkCart = await Wishlist.findOne({ userId });
    if (checkCart) {
        console.log('If User Exists');
        let productFound = false;
        let totalPrice = 0;
        let productquantity = 0;
        checkCart.products.forEach((element) => {
            if (element.productId == productId) {
                element.quantity -= 1;
                productquantity = element.quantity;
                totalPrice -= element.price * element.quantity;
                let indexofelement = checkCart.products.indexOf(element);
                console.log('If product found');
                checkCart.products.splice(indexofelement, 1);
                productFound = true;
            }
        });
        console.log('After deleting the product', checkCart.products);
        if (!productFound) {
            console.log('If product not found');
            throw new Error('product not in the cart');
        }

        const updatedCart = await Wishlist.findOneAndUpdate(
            { userId: userId },
            { products: checkCart.products, cart_total: totalPrice },
            { new: true }
        );
        return updatedCart;
    } else {
        throw new Error("User cart doesn't exist");
    }
};


//Get all from wishlist
export const getWishlist = async (userId) => {
    const checkCart = await Wishlist.findOne({ userId });
    if (checkCart) {
        return checkCart;
    } else {
        throw new Error('Error getting Wishlist');
    }
};