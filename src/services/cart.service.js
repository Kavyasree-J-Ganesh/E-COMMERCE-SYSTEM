import cart from '../models/cart.model';
import Product from '../models/product.model'


// Update cart address details
export const updateAddressDetails = async (updatedData) => {
    const updatedCart = await cart.findByIdAndUpdate(
        { _id: updatedData.cartId },
        {
            fullName: updatedData.fullName,
            mobile: updatedData.mobile,
            address: updatedData.address,
            town: updatedData.town,
            state: updatedData.state
        },
        { new: true }
    );
    return updatedCart;
};

// get all product of cart
export const getCart = async (userId) => {
    let cartDetails = await cart.findOne({ userId: userId });
    if (!cartDetails) {
        return {
            userId: userId,
            Product: [],
            cart_total: 0
        }
    }
    return cartDetails
}

// add product to cart
export const addedToCart = async (userId, params_id) => {
    try {
        const prooo = await Product.findOne({ _id: params_id });
        if (!prooo) throw new Error('prooo not found');

        console.log('prooo:', prooo);

        const userCart = (await cart.findOne({ userId: userId })) || {
            userId: userId,
            product: [],
            cart_total: 0
        };
        let totalPrice = userCart.cart_total;

        const existingBook = userCart.product.find(
            (prooo) => prooo.productId === params_id
        );
        if (existingBook) {
            existingBook.quantity++;
            totalPrice += existingBook.discountedPrice;
            console.log('Existing prooo quantity:', existingBook.quantity);
        } else {
            const newBook = {
                productId: prooo._id,
                description: prooo.description,
                title: prooo.title,
                image: prooo.image,
                manufacturer: prooo.manufacturer,
                realPrice: parseInt(prooo.realPrice),
                discountedPrice: parseInt(prooo.discountedPrice),
                quantity: 1
            };
            userCart.product.push(newBook);
            totalPrice += newBook.discountedPrice;
            console.log('Added new prooo:', newBook);
        }

        console.log(`Cart total after adding prooo(s): ${totalPrice}`);

        const updatedCart = await cart.findOneAndUpdate(
            { userId: userId },
            { product: userCart.product, cart_total: totalPrice },
            { new: true, upsert: true }
        );
        return updatedCart;
    } catch (error) {
        console.error(error);
        throw {
            message: "whatever",
            code: "400"
        }
    }
};



// Remove product from cart
export const removeproductFromCart = async (userId, params_product_id) => {
    const checkCart = await cart.findOne({ userId: userId });
    if (checkCart) {
        console.log('If User Exists');
        let productFound = false;
        let totalPrice = 0;
        let productquanitity = 0;
        checkCart.product.forEach((element) => {
            if (element.productId === params_product_id) {
                element.quantity = element.quantity -= 1;
                productquanitity = element.quantity;
                totalPrice = totalPrice - element.realPrice * element.quantity;
                let indexofelement = checkCart.product.indexOf(element);
                console.log('If product found');
                checkCart.product.splice(indexofelement, 1);
                productFound = true;
            }
        });
        console.log('After deleting the product', checkCart.product);
        if (productFound === false) {
            console.log('If product not found');
            throw new Error('product not in the cart');
        }

        const updatedCart = await cart.findOneAndUpdate(
            { userId: userId },
            { product: checkCart.product, cart_total: totalPrice },
            { new: true }
        );
        return updatedCart;
    } else {
        throw new Error("User cart doesn't exist");
    }
};

// Purchase By Id from cart
export const purchaseById = async (cartId) => {
    const updatedCart = await cart.findByIdAndUpdate(
        { _id: cartId },
        { isPurchased: true },
        { new: true }
    );
    return updatedCart;
};
