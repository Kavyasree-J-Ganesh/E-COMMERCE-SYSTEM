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
const REFRESH_TOKEN =
  '1//04gSfomIp63H_CgYIARAAGAQSNwF-L9IrzE6I4u4jIUG4R9iX7ot4dvkPuKuOjBHdA2afk5Trba_E3A-zY_sfDzP6m0EHT1i6_UI';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function sendMail(email, extraArguments) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'shashankrathore606@gmail.com',
            clientId: CLIENT_ID,
            clientSecret: CLEINT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
        },
    });

    const mailOptions = {
      from: 'E-Kart <E-kart@gmail.com>',
      to: 'shashankrathore606@gmail.com',
      subject: 'Hello from gmail using API',
      text: 'Hello from gmail email using API',
      html: `<h1> Your order is confirmed</h1> Cart Total: ${
        extraArguments.cartTotal
      }, Title ${
        extraArguments.productList.length
          ? extraArguments.productList.map((item) => {
              return item.title + ', ';
            })
          : ''
      }, manufacturer ${
        extraArguments.productList.length
          ? extraArguments.productList.map((item) => {
              return item.manufacturer + ', ';
            })
          : ''
      }, discountedPrice ${
        extraArguments.productList.length
          ? extraArguments.productList.map((item) => {
              return item.discountedPrice + ', ';
            })
          : ''
      }</h1>`
    };

    const result = await transport.sendMail(mailOptions);
    // return result;
  } catch (error) {
    throw error;
  }
}
