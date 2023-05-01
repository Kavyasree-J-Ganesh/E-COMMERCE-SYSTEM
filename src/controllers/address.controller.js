import HttpStatus from 'http-status-codes';
import * as addressService from '../services/address.service';

// update Cart address Details
export const addAddress = async (req, res, next) => {
    const { fullName, mobile, address, town, state } = req.body;
    try {
        const userId = req.body.userId;
        const newAddress = await addressService.addAddress({
            fullName,
            mobile,
            address,
            town,
            state,
        });
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: newAddress,
            message: 'Address created successfully',
        });
    } catch (error) {
        next(error);
    }
};

// get address by id 
export const getAddressById = async (req, res, next) => {
    const addressId = req.params.id;
    try {
        const address = await addressService.getAddressById(addressId);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: address,
            message: 'Address fetched successfully',
        });
    } catch (error) {
        next(error);
    }
};

// get all address
export const getAllUserAddresses = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const addresses = await getAllAddresses(userId);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: addresses,
            message: 'All addresses retrieved successfully',
        });
    } catch (error) {
        next(error);
    }
};
