"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrders = exports.createOrder = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cartNew = _interopRequireDefault(require("../models/cart.new.model"));
var _order = _interopRequireDefault(require("../models/order.model"));
var _cartNew2 = require("./cart.new.service");
var createOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var order;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _cartNew2.purchaseById)(body.userId);
        case 2:
          _context.next = 4;
          return _order["default"].create(body);
        case 4:
          order = _context.sent;
          return _context.abrupt("return", order);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createOrder(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.createOrder = createOrder;
var getOrders = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _order["default"].find({
            userId: userId
          });
        case 2:
          result = _context2.sent;
          return _context2.abrupt("return", result);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getOrders(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getOrders = getOrders;