const nodemailer = require('nodemailer');
const { google } = require('googleapis');


const CLIENT_ID =
  '795090287571-jco1o615l61o8pnd7hcgjej6ls754sdr.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04GLjViojlT2MCgYIARAAGAQSNwF-L9IrezjeI74J29guB--dCZrON5rrcR2PHqn20Tc5VANGqyO_82MOJl7g59RByvHR3UVXr3Y';

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