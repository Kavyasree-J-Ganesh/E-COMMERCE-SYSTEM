"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPaymentIntend = exports.createCharge = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = require("../utils/user.util");
var _cartNew = require("./cart.new.service");
var Stripe = require('stripe');
require('dotenv').config();
var stripe = Stripe(process.env.PAYMENT_SECRET_KEY);
var createCharge = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(amount, token, demoProduct) {
    var customer, charge;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return stripe.customers.create({
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
        case 3:
          customer = _context.sent;
          _context.next = 6;
          return stripe.charges.create({
            amount: 2500,
            description: 'Web Development Product',
            currency: 'INR',
            customer: customer.id,
            token: token
          });
        case 6:
          charge = _context.sent;
          // Send email after the charge is created
          (0, _user.sendMail)(userId, {
            cartTotal: cart.cart_total,
            productList: cart.product
          });
          return _context.abrupt("return", charge);
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
  return function createCharge(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.createCharge = createCharge;
var createPaymentIntend = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(amount, token, demoProduct, userId) {
    var customer, cart;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return stripe.paymentIntents.create({
            currency: 'INR',
            amount: 1999,
            description: 'Payment'
          });
        case 3:
          customer = _context2.sent;
          _context2.next = 6;
          return (0, _cartNew.getCart)(userId);
        case 6:
          cart = _context2.sent;
          (0, _user.sendMail)(userId, {
            cartTotal: cart.cart_total,
            productList: cart.product
          });
          return _context2.abrupt("return", {
            clientSecret: customer.client_secret
          });
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          throw _context2.t0;
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function createPaymentIntend(_x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createPaymentIntend = createPaymentIntend;