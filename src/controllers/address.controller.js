import HttpStatus from 'http-status-codes';
import * as addressService from '../services/address.service';

export const createAddress = async (req, res, next) => {
  try {
    const { fullName, mobile, address, town, state, userId } = req.body;
    const savedAddress = await addressService.createAddress(
      fullName,
      mobile,
      address,
      town,
      state,
      userId
    );
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: savedAddress,
      message: 'Address created'
    });
  } catch (error) {
    next(error);
  }
};

export const getAddressesById = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const addresses = await addressService.getAddressesById(userId);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: addresses,
      message: 'Addresses fetched'
    });
  } catch (error) {
    next(error);
  }
};

export const updateAddress = async (req, res, next) => {
  try {
    const addressId = req.params.addressId;
    const { fullName, mobile, address, town, state, userId } = req.body;
    const updatedAddress = await addressService.updateAddress(
      userId,
      addressId,
      fullName,
      mobile,
      address,
      town,
      state
    );
    if (!updatedAddress) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Address not found' });
    }
    res
      .status(HttpStatus.OK)
      .json({ message: 'Address updated', data: updatedAddress });
  } catch (error) {
    next(error);
  }
};

export const deleteAddress = async (req, res, next) => {
  //     try {
  //         const userId = req.params.userId;
  //         const addressId = req.params.addressId;
  //         const deletedAddress = await addressService.deleteAddress(userId, addressId);
  //         if (!deletedAddress) {
  //             return res.status(HttpStatus.NOT_FOUND).json({ message: 'Address not found' });
  //         }
  //         res.status(HttpStatus.OK).json({ message: 'Address deleted', data: deletedAddress });
  //     } catch (error) {
  //         next(error);
  //     }
  // };
  try {
    const data = await addressService.deleteAddress(req.body.EmailId);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Address deleted succesfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

export const getAllAddresses = async (req, res, next) => {
  try {
    const { userId } = req.body;
    console.log('console in controller', userId);
    const addresses = await addressService.getAllAddresses(userId);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: addresses,
      message: 'All addresses fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};
