import cart from '../models/cart.new.model';
import Product from '../models/product.model'


// Update cart address details
// export const updateAddressDetails = async (updatedData) => {
//     const updatedCart = await cart.findByIdAndUpdate(
//         { _id: updatedData.cartId },
//         {
//             fullName: updatedData.fullName,
//             mobile: updatedData.mobile,
//             address: updatedData.address,
//             town: updatedData.town,
//             state: updatedData.state
//         },
//         { new: true }
//     );
//     return updatedCart;
// };

export const updateAddressDetails = async (cartId, updatedData) => {
    const updatedCart = await cart.findByIdAndUpdate(
        { _id: cartId },
        {
            $set: {
                'address.$[elem].fullName': updatedData.fullName,
                'address.$[elem].mobile': updatedData.mobile,
                'address.$[elem].address': updatedData.address,
                'address.$[elem].town': updatedData.town,
                'address.$[elem].state': updatedData.state
            }
        },
        {
            arrayFilters: [{ 'elem._id': updatedData.addressId }],
            new: true
        }
    );
    return updatedCart;
};


//get address by id
export const getAddresses = async (userId) => {
    const cart = await cart.findOne({ userId });
    if (!cart) {
        throw new Error('Cart not found');
    }
    return cart.address;
};

// get all address
export const getAllAddresses = async () => {
    const carts = await cart.find({});
    return carts.flatMap(cart => cart.address);
};


// get all product
export const getCart = async (userId) => {
    let cartList = await cart.find({ userId: userId, isPurchased: false });
    let cart_total = cartList.reduce((accu, currentCart) => {
        return accu + (parseInt(currentCart.discountedPrice) * parseInt(currentCart.quantity))
    }, 0)
    return {
        userId: userId,
        product: cartList,
        cart_total: cart_total
    }
}

export const cartOrdersAnalysis = () => {
    return cart.aggregate([
        {
            $match: {
                "isPurchased": { $eq: true }
            }
        },
        {
            $group: {
                _id: "$category",
                quantity: { "$sum": "$quantity" }
            }
        }
    ])
}

export const cartProductAnalysis = () => {
    return cart.aggregate([
        {
            $match: {
                "isPurchased": { $eq: true }
            }
        },
        {
            $group: {
                _id: "$title",
                quantity: { "$sum": "$quantity" }
            }
        },
        {
            $sort: {
                quantity: -1
            }
        },
        {
            $limit: 5
        }
    ])
}

// add product to cart
export const addedToCart = async (userId, params_id) => {
    try {
        const product = await Product.findOne({ _id: params_id });
        if (!product) throw new Error('product does not exist');
        const cartItem = await cart.findOne({ userId: userId, isPurchased: false, productId: params_id })

        if (cartItem) {
            console.log(cartItem.quantity)
            const quantity = parseInt(cartItem.quantity) + 1;
            console.log(quantity)
            const updatedCart = await cart.findOneAndUpdate(
                { userId: userId, isPurchased: false, productId: params_id },
                { quantity },
                { new: true }
            );
            return updatedCart;
        } else {
            const newProduct = {
                productId: product._id,
                description: product.description,
                title: product.title,
                image: product.image,
                manufacturer: product.manufacturer,
                realPrice: parseInt(product.realPrice),
                discountedPrice: parseInt(product.discountedPrice),
                quantity: 1,
                category: product.category,
                userId: userId
            };
            const newCart = await cart.create(newProduct);
            return newCart;
        }
    } catch (error) {
        throw {
            message: `${error.message}`,
            code: "400"
        }
    }
};

export const deleteProductFromCart = async(userId, productId) =>{
    const result = await cart.findOneAndDelete({userId, productId })
    return result;
}



// Remove product from cart
export const removeproductFromCart = async (userId, params_product_id) => {
    try {
        const product = await Product.findOne({ _id: params_product_id });
        if (!product) throw new Error('product does not exist');
        const cartItem = await cart.findOne({ userId: userId, isPurchased: false, productId: params_product_id })

        if (cartItem) {
            const quantity = parseInt(cartItem.quantity) - 1;
            let updatedCart;
            console.log(quantity)
            if (quantity > 0) {
                updatedCart = await cart.findOneAndUpdate(
                    { userId: userId, isPurchased: false, productId: params_product_id },
                    { quantity },
                    { new: true })
            } else {
                updatedCart = await cart.findOneAndDelete(
                    { userId: userId, isPurchased: false, productId: params_product_id }
                );
            }

            return updatedCart;
        } else {
            throw new Error('product is not added to cart');
        }
    } catch (error) {
        throw {
            message: `${error.message}`,
            code: "400"
        }
    }
};

// Purchase By Id from cart
export const purchaseById = async (userId) => {
    const updatedCart = await cart.updateMany(
        { userId: userId },
        {isPurchased: true}
    );
    return updatedCart;
};
