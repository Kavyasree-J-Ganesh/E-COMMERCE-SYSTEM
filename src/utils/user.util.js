// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');

// // These id's and secrets should come from .env file.
// const CLIENT_ID = 'YOUR CLIENT ID';
// const CLEINT_SECRET = 'YOUR CLIENT SECRET';
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
// const REFRESH_TOKEN = 'YOUR REFRESH TOKEN';

// const oAuth2Client = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLEINT_SECRET,
//     REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// async function sendMail() {
//     try {
//         const accessToken = await oAuth2Client.getAccessToken();

//         const transport = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: 'yours authorised email address',
//                 clientId: CLIENT_ID,
//                 clientSecret: CLEINT_SECRET,
//                 refreshToken: REFRESH_TOKEN,
//                 accessToken: accessToken,
//             },
//         });

//         const mailOptions = {
//             from: 'SENDER NAME <yours authorised email address@gmail.com>',
//             to: 'to email address here',
//             subject: 'Hello from gmail using API',
//             text: 'Hello from gmail email using API',
//             html: '<h1>Hello from gmail email using API</h1>',
//         };

//         const result = await transport.sendMail(mailOptions);
//         return result;
//     } catch (error) {
//         return error;
//     }
// }

// sendMail()
//     .then((result) => console.log('Email sent...', result))
//     .catch((error) => console.log(error.message));

const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID =
  '795090287571-skp802kpo5n7p5f7fdkq51lc10d186p4.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = 'ya29.a0AWY7CklKaObVsWQXszgBgZCQxArStN2aZxUDo0na6f9sUJDjFFnSax8NEdK0_N4djd20w4h7ICbiG0CxhaUUIZGLf3tkSBWUBphRw3e0p8susgrmeN4YhUvMBJ2tc8BHKqwTG5BSqaYfHB9VxykW4MGXhiW7UyhzaCgYKAVkSARESFQG1tDrpOb76yqB1JuS-lear68xabg0167';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function sendMail(email, token, extraArguments) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: email,
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    const mailOptions = {
      from: 'E-Kart <E-kart@gmail.com>',
      to: email,
      subject: 'Hello from gmail using API',
      text: 'Hello from gmail email using API',
      html: `<h1> Your order is confirmed</h1> Cart Total: ${extraArguments.cartTotal
        }, Title ${extraArguments.productList.length
          ? extraArguments.productList.map((item) => {
            return item.title + ', ';
          })
          : ''
        }, manufacturer ${extraArguments.productList.length
          ? extraArguments.productList.map((item) => {
            return item.manufacturer + ', ';
          })
          : ''
        }, discountedPrice ${extraArguments.productList.length
          ? extraArguments.productList.map((item) => {
            return item.discountedPrice + ', ';
          })
          : ''
        }</h1>`
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw error;
  }
}
