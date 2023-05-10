import Product from '../models/product.model';

// Get all products
export const getAllProducts = async (category) => {
    let filter = {};
    if (category && category != "") {
        filter.category = category
    }
    try {
        const products = await Product.find(filter);
        return products;
    } catch (error) {
        throw new Error(err);
    }
};

// get Product by id
export const getProductsbyID = async (_id, userId) => {
    try {
        const data = await Product.findById({ _id, userId: userId });
        return data;
    } catch (err) {
        throw new Error(err);
    }
};


// sort Product high to low
export const highToLow = async () => {
    try {
        const data = await Product.find().sort({ discountedPrice: -1 });
        return data;
    } catch (err) {
        throw new Error(err);
    }
};

// sort Product high to low
export const lowToHigh = async () => {
    try {
        const data = await Product.find().sort({ discountedPrice: 1 });
        return data;
    } catch (err) {
        throw new Error(err);
    }
};

// Search Product by text
export const searchByText = async (searchText) => {
    try {
        const data = await Product.find({
            $or: [
                {
                    title: { $regex: searchText, $options: 'i' }
                },
                {
                    manufacturer: { $regex: searchText, $options: 'i' }
                },
                {
                    description: { $regex: searchText, $options: 'i' }
                }
            ]
        });
        return data;
    } catch (err) {
        throw new Error(err);
    }
};

// sort Product New Arrival
export const newArrival = async () => {
    try {
        const data = await Product.find().sort({ 'createdAt': -1 });
        return data;
    } catch (err) {
        throw new Error(err);
    }
};
// Create a new product
export const createProduct = async (productData) => {
    try {
        const product = new Product(productData);
        const newProduct = await product.save();
        return newProduct;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a product
export const updateProduct = async (id, productData) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });
        return updatedProduct;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a product
export const deleteProduct = async (id) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        return deletedProduct;
    } catch (error) {
        throw new Error(error.message);
    }
};

