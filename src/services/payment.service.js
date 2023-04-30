const Stripe = require('stripe');
const stripe = Stripe(
  process.env.PAYMENT_SECRET_KEY ||
  'sk_test_51N12BsSHL3ZIWrpnYrt2oBZigHN5hVGOmEJAFPeOsc1qNhDgMkKxtUrInFfLyMlChF5jlQby4qb6BlMsqFuRWTaN007kCWWHTQ'
);

export const createCharge = async (amount, token, demoProduct, res) => {
  stripe.customers
    .create({
      email: 'Shashank@gmail.com',
      source: token.id,
      name: 'Shashank Rathore',
      address: {
        line1: 'TC 9/4 Old MES colony',
        postal_code: '312001',
        city: 'Chittorgarh',
        state: 'Rajasthan',
        country: 'India'
      }
    })
    .then((customer) => {
      return stripe.charges.create({
        amount: 2500, // Charging Rs 25
        description: 'Web Development Product',
        currency: 'INR'
        // customer: customer.id
      });
    })
    .then((charge) => {
      res.send('Success'); // If no error occurs
    })
    .catch((err) => {
      res.send(err); // If some error occurs
    });
  //   console.log('tokenidddddddd', token.id, amount, demoProduct);
  //   const charge = await stripe.charges.create({
  //     amount,
  //     currency: 'USD',
  //     source: token.id,
  //     description: demoProduct.description,
  //     metadata: {
  //       name: demoProduct.name
  //       api_key: '-u sk_test_51N12BsSHL3ZIWrpnYrt2oBZigHN5hVGOmEJAFPeOsc1qNhDgMkKxtUrInFfLyMlChF5jlQby4qb6BlMsqFuRWTaN007kCWWHTQ'
  //     }
  //   });
  //   return charge;
};
