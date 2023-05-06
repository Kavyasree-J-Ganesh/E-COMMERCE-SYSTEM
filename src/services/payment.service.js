// const Stripe = require('stripe');
// const stripe = Stripe(
//   process.env.PAYMENT_SECRET_KEY ||
//   'sk_test_51N12BsSHL3ZIWrpnYrt2oBZigHN5hVGOmEJAFPeOsc1qNhDgMkKxtUrInFfLyMlChF5jlQby4qb6BlMsqFuRWTaN007kCWWHTQ'
// );

// import { sendMail } from '../utils/user.util';
// import { getCart } from './cart.service';

// export const createCharge = async (amount, token, demoProduct) => {
//   try {
//     const customer = await stripe.customers.create({
//       email: 'shashankrathore606@gmail.com',
//       source: token.id,
//       name: 'Shashank Rathore',
//       address: {
//         line1: '36, ridhi sidhi nagar',
//         postal_code: '312001',
//         city: 'Chittorgarh',
//         state: 'Rajasthan',
//         country: 'India',
//         sendMail: 'hellllooooooooo'
//       }
//     });

//     const charge = await stripe.charges.create({
//       amount: 2500,
//       description: 'Web Development Product',
//       currency: 'INR',
//       customer: customer.id,
//       sendMail: 'hellllooooooooo',
//       token
//     });

//     return charge;
//   } catch (error) {
//     throw error;
//   }
// };

// export const createPaymentIntend = async (
//   amount,
//   token,
//   demoProduct,
//   userId
// ) => {
//   try {
//     const customer = await stripe.paymentIntents.create({
//       currency: 'INR',
//       amount: 1999,
//       description: 'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdf'
//       // automatic_payment_methods: {
//       //   enabled: true
//       // }
//     });
//     let cart = await getCart(userId);
//     console.log('cart', cart);
//     sendMail(
//       userId,
//       { cartTotal: cart.cart_total, productList: cart.product }
//     );
//     return { clientSecret: customer.client_secret };
//   } catch (error) {
//     throw error;
//   }
// };



const Stripe = require('stripe');
const stripe = Stripe(
  process.env.PAYMENT_SECRET_KEY
  // || 'sk_test_51N12BsSHL3ZIWrpnYrt2oBZigHN5hVGOmEJAFPeOsc1qNhDgMkKxtUrInFfLyMlChF5jlQby4qb6BlMsqFuRWTaN007kCWWHTQ'
);

import { sendMail } from '../utils/user.util';
import { getCart } from './cart.service';

export const createCharge = async (amount, token, demoProduct) => {
  try {
    const customer = await stripe.customers.create({
      email: 'shashankrathore606@gmail.com',
      source: token.id,
      name: 'Shashank Rathore',
      address: {
        line1: '36, ridhi sidhi nagar',
        postal_code: '312001',
        city: 'Chittorgarh',
        state: 'Rajasthan',
        country: 'India'
      }
    });

    const charge = await stripe.charges.create({
      amount: 2500,
      description: 'Web Development Product',
      currency: 'INR',
      customer: customer.id,
      token
    });

    // Send email after the charge is created
    sendMail(userId, { cartTotal: cart.cart_total, productList: cart.product });

    return charge;
  } catch (error) {
    throw error;
  }
};

export const createPaymentIntend = async (userId) => {
  try {
    const customer = await stripe.paymentIntents.create({
      currency: 'INR',
      amount: 1999,
      description: 'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdf'
    });
    let cart = await getCart(userId);
    console.log('cart', cart);
    sendMail(
      userId,
      { cartTotal: cart.cart_total, productList: cart.product }
    );
    return { clientSecret: customer.client_secret };
  } catch (error) {
    throw error;
  }
};
