import express from 'express';

// import * as { adminController } from '../controllers/admin.controller';
import * as adminController from '../controllers/admin.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { newAdminValidator } from '../validators/admin.validator';

const router = express.Router();

//route to create a new user
router.post('', newAdminValidator, adminController.newUserAdmin);

// login
router.post('/login', adminController.loginAdmin);




export default router;
