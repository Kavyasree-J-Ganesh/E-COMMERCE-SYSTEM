"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAddress = exports.getAllAddresses = exports.getAddressesById = exports.deleteAddress = exports.createAddress = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _address = _interopRequireDefault(require("../models/address.model"));
var createAddress = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(fullName, mobile, address, town, state, userId) {
    var newAddress;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          newAddress = new _address["default"]({
            fullName: fullName,
            mobile: mobile,
            address: address,
            town: town,
            state: state,
            userId: userId
          });
          _context.next = 3;
          return newAddress.save();
        case 3:
          return _context.abrupt("return", _context.sent);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createAddress(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
exports.createAddress = createAddress;
var getAddressesById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId) {
    var addressDetails;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _address["default"].findOne({
            userId: userId
          });
        case 2:
          addressDetails = _context2.sent;
          if (addressDetails) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", {
            userId: userId,
            Address: []
          });
        case 5:
          return _context2.abrupt("return", addressDetails);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getAddressesById(_x7) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAddressesById = getAddressesById;
var updateAddress = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId, addressId, fullName, mobile, address, town, state) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _address["default"].findOneAndUpdate({
            _id: addressId,
            userId: userId
          }, {
            fullName: fullName,
            mobile: mobile,
            address: address,
            town: town,
            state: state
          }, {
            "new": true
          });
        case 2:
          return _context3.abrupt("return", _context3.sent);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function updateAddress(_x8, _x9, _x10, _x11, _x12, _x13, _x14) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateAddress = updateAddress;
var deleteAddress = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId, addressId) {
    var checkCart;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _address["default"].findOneAndDelete({
            userId: userId
          });
        case 2:
          checkCart = _context4.sent;
          if (!checkCart) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", checkCart);
        case 7:
          throw new Error('Error getting Wishlist');
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteAddress(_x15, _x16) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteAddress = deleteAddress;
var getAllAddresses = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userId) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _address["default"].find({
            userId: userId
          });
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getAllAddresses(_x17) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getAllAddresses = getAllAddresses;