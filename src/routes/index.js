import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import adminRoute from './admin.route';
import productRoute from './product.route';
import cartRoute from './cart.route'
import wishlistRoute from './wishlist.route'
import paymentRoute from './payment.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  // router.use('/admin', adminRoute);

  router.use('/product', productRoute);

  router.use('/cart', cartRoute);

  router.use('/wishlist', wishlistRoute);

  router.use('/payment', paymentRoute);

  return router;
};

export default routes;
