const nodemailer = require('nodemailer');
const { google } = require('googleapis');


const CLIENT_ID =
  '795090287571-skp802kpo5n7p5f7fdkq51lc10d186p4.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04ijeP6Uutg9-CgYIARAAGAQSNwF-L9Ir-6aj7ZMSzwuuPTEh8Lxll3DGd12LjX1MchVsuBSOxE7wk2TtmHqKpbOiK7BeXqa4eSU';

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
      to: email,
      subject: 'E-Kart Order succesfull',
      text: 'Hello from E-KART email',
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
  } catch (error) {
    throw error;
  }
}
