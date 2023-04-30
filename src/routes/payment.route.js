// import express from 'express';
// const router = express.Router();

// import Stripe from 'stripe';
// const stripe = Stripe(process.env.PAYMENT_SECRET_KEY);

// router.post('/payment', async (req, res) => {
//     const { amount, token } = req.body;
//     try {
//         const charge = await stripe.charges.create({
//             amount,
//             currency: 'usd',
//             source: token.id
//         });
//         res.json({ message: 'Payment successful', charge });
//     } catch (error) {
//         res.status(500).json({ message: 'Payment failed', error });
//     }
// });

// export default router;
import express from 'express';
import * as paymentController from '../controllers/payment.controller'

const router = express.Router();

router.post('', paymentController.makePayment);

export default router;