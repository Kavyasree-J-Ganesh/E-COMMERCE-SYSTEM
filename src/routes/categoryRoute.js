import express from 'express';
import * as categoryController from '../controllers/category.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


// get categories
router.get('/', categoryController.getCategory);



export default router;
