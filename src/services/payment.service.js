// const Stripe = require('stripe');
// const stripe = Stripe(
//     process.env.PAYMENT_SECRET_KEY ||
//     'sk_test_51N12BsSHL3ZIWrpnYrt2oBZigHN5hVGOmEJAFPeOsc1qNhDgMkKxtUrInFfLyMlChF5jlQby4qb6BlMsqFuRWTaN007kCWWHTQ'
// );

// export const createCharge = async (amount, token, demoProduct, res) => {
//     stripe.customers
//         .create({
//             email: 'Shashank@gmail.com',
//             source: token.id,
//             name: 'Shashank Rathore',
//             address: {
//                 line1: '36, ridhi sidhi nagar',
//                 postal_code: '312001',
//                 city: 'Chittorgarh',
//                 state: 'Rajasthan',
//                 country: 'India'
//             }
//         })
//         .then((customer) => {
//             return stripe.charges.create({
//                 amount: 2500,
//                 description: 'Web Development Product',
//                 currency: 'INR'
//                 // customer: customer.id
//             });
//         })
//         .then((charge) => {
//             res.send('Success');
//         })
//         .catch((err) => {
//             res.send(err);
//         });
// };



const Stripe = require('stripe');
const stripe = Stripe(
  process.env.PAYMENT_SECRET_KEY ||
  'sk_test_51N12BsSHL3ZIWrpnYrt2oBZigHN5hVGOmEJAFPeOsc1qNhDgMkKxtUrInFfLyMlChF5jlQby4qb6BlMsqFuRWTaN007kCWWHTQ'
);

import { sendMail } from '../utils/user.util';

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
        country: 'India',
        sendMail: 'hellllooooooooo'
      }
    });

    const charge = await stripe.charges.create({
      amount: 2500,
      description: 'Web Development Product',
      currency: 'INR',
      customer: customer.id,
      sendMail: 'hellllooooooooo', token
    });

    return charge;




  } catch (error) {
    throw error;
  }
};
