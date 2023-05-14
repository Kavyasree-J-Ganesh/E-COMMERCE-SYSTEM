"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAddress = exports.getAllAddresses = exports.getAddressesById = exports.deleteAddress = exports.createAddress = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var addressService = _interopRequireWildcard(require("../services/address.service"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var createAddress = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, fullName, mobile, address, town, state, userId, savedAddress;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, fullName = _req$body.fullName, mobile = _req$body.mobile, address = _req$body.address, town = _req$body.town, state = _req$body.state, userId = _req$body.userId;
          _context.next = 4;
          return addressService.createAddress(fullName, mobile, address, town, state, userId);
        case 4:
          savedAddress = _context.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: savedAddress,
            message: 'Address created'
          });
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function createAddress(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.createAddress = createAddress;
var getAddressesById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var userId, addresses;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          userId = req.body.userId;
          _context2.next = 4;
          return addressService.getAddressesById(userId);
        case 4:
          addresses = _context2.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: addresses,
            message: 'Addresses fetched'
          });
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function getAddressesById(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAddressesById = getAddressesById;
var updateAddress = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var addressId, _req$body2, fullName, mobile, address, town, state, userId, updatedAddress;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          addressId = req.params.addressId;
          _req$body2 = req.body, fullName = _req$body2.fullName, mobile = _req$body2.mobile, address = _req$body2.address, town = _req$body2.town, state = _req$body2.state, userId = _req$body2.userId;
          _context3.next = 5;
          return addressService.updateAddress(userId, addressId, fullName, mobile, address, town, state);
        case 5:
          updatedAddress = _context3.sent;
          if (updatedAddress) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(_httpStatusCodes["default"].NOT_FOUND).json({
            message: 'Address not found'
          }));
        case 8:
          res.status(_httpStatusCodes["default"].OK).json({
            message: 'Address updated',
            data: updatedAddress
          });
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function updateAddress(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateAddress = updateAddress;
var deleteAddress = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return addressService.deleteAddress(req.body.EmailId);
        case 3:
          data = _context4.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: data,
            message: 'Address deleted succesfully'
          });
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
            code: _httpStatusCodes["default"].BAD_REQUEST,
            message: "".concat(_context4.t0)
          });
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function deleteAddress(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteAddress = deleteAddress;
var getAllAddresses = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var userId, addresses;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          userId = req.body.userId;
          _context5.next = 4;
          return addressService.getAllAddresses(userId);
        case 4:
          addresses = _context5.sent;
          res.status(_httpStatusCodes["default"].OK).json({
            code: _httpStatusCodes["default"].OK,
            data: addresses,
            message: 'All addresses fetched successfully'
          });
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function getAllAddresses(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getAllAddresses = getAllAddresses;