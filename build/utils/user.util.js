"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMail = sendMail;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var nodemailer = require('nodemailer');
var _require = require('googleapis'),
  google = _require.google;
var CLIENT_ID = '795090287571-jco1o615l61o8pnd7hcgjej6ls754sdr.apps.googleusercontent.com';
var CLEINT_SECRET = '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';
var REDIRECT_URI = 'https://developers.google.com/oauthplayground';
var REFRESH_TOKEN = '1//04GLjViojlT2MCgYIARAAGAQSNwF-L9IrezjeI74J29guB--dCZrON5rrcR2PHqn20Tc5VANGqyO_82MOJl7g59RByvHR3UVXr3Y';
var oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLEINT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});
function sendMail(_x, _x2) {
  return _sendMail.apply(this, arguments);
}
function _sendMail() {
  _sendMail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, extraArguments) {
    var accessToken, transport, mailOptions, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return oAuth2Client.getAccessToken();
        case 3:
          accessToken = _context.sent;
          transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: 'shashankrathore606@gmail.com',
              clientId: CLIENT_ID,
              clientSecret: CLEINT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accessToken
            }
          });
          mailOptions = {
            from: 'E-Kart <E-kart@gmail.com>',
            to: email,
            subject: 'E-Kart Order succesfull',
            text: 'Hello from E-KART email',
            html: "<h1> Your order is confirmed</h1> Cart Total: ".concat(extraArguments.cartTotal, ", Title ").concat(extraArguments.productList.length ? extraArguments.productList.map(function (item) {
              return item.title + ', ';
            }) : '', ", manufacturer ").concat(extraArguments.productList.length ? extraArguments.productList.map(function (item) {
              return item.manufacturer + ', ';
            }) : '', ", discountedPrice ").concat(extraArguments.productList.length ? extraArguments.productList.map(function (item) {
              return item.discountedPrice + ', ';
            }) : '', "</h1>")
          };
          _context.next = 8;
          return transport.sendMail(mailOptions);
        case 8:
          result = _context.sent;
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          throw _context.t0;
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _sendMail.apply(this, arguments);
}