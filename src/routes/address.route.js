import express from 'express';
import * as addressController from '../controllers/address.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


// create address
router.post('', userAuth, addressController.createAddress);

// get address by ID
router.get('/:_id', userAuth, addressController.getAddressesById);

// get all address by ID
router.get('/', userAuth, addressController.getAllAddresses);

// update address by ID
router.put('/:_id', userAuth, addressController.updateAddress);

// delete address by id
router.put('/delete/:_id', userAuth, addressController.deleteAddress);


// get all address
// router.get('', userAuth, addressController.getAllUserAddresses);

export default router;