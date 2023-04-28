// import stripeService from '../services/payment.service'
import * as stripService from '../services/payment.service';

export const makePayment = async (req, res, next) => {
    try {
        const { amount, token, demoProduct } = req.body;
        const charge = await stripService.createCharge(
            amount,
            token,
            demoProduct,
            res
        );
        res.json({ message: 'Payment successful', charge });
    } catch (error) {
        res.status(500).json({ message: 'Payment failed', error });
    }
};
