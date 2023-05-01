import express from 'express';
import * as addressController from '../controllers/address.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


// create address
router.post('', userAuth, addressController.addAddress);

// get address by ID
router.get('/:_id', userAuth, addressController.getAddressById);

// get all address
router.get('', userAuth, addressController.getAllUserAddresses);

export default router;