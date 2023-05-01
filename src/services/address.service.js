import Address from '../models/address.model.js';

export const addAddress = async (userId, { fullName, mobile, address, town, state }) => {
    try {
        const newAddress = await Address.create({
            userId,
            address: [
                {
                    fullName,
                    mobile,
                    address,
                    town,
                    state,
                },
            ],
        });
        return newAddress;
    } catch (error) {
        throw new Error(error.message);
    }
};

//get address by id
export const getAddressById = async (addressId) => {
    const address = await Address.findById(addressId);
    if (!address) {
        throw new Error('Address not found');
    }
    return address;
};

// get all address
export const getAllAddresses = async (userId) => {
    try {
        const addresses = await Address.find({ userId });
        return addresses;
    } catch (error) {
        throw new Error(error.message);
    }
};