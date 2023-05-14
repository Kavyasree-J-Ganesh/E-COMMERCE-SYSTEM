"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.searchByText = exports.newArrival = exports.lowToHigh = exports.highToLow = exports.getProductsbyID = exports.getAllProducts = exports.deleteProduct = exports.createProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _product = _interopRequireDefault(require("../models/product.model"));
// Get all products
var getAllProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(category, searchText) {
    var filter, products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          filter = {
            $or: [{
              title: {
                $regex: searchText,
                $options: 'i'
              }
            }, {
              manufacturer: {
                $regex: searchText,
                $options: 'i'
              }
            }]
          };
          if (category && category != "") {
            filter.category = category;
          }
          _context.prev = 2;
          _context.next = 5;
          return _product["default"].find(filter);
        case 5:
          products = _context.sent;
          return _context.abrupt("return", products);
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          throw new Error(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 9]]);
  }));
  return function getAllProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// get Product by id
exports.getAllProducts = getAllProducts;
var getProductsbyID = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_id, userId) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _product["default"].findById({
            _id: _id,
            userId: userId
          });
        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          throw new Error(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getProductsbyID(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// sort Product high to low
exports.getProductsbyID = getProductsbyID;
var highToLow = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _product["default"].find().sort({
            discountedPrice: -1
          });
        case 3:
          data = _context3.sent;
          return _context3.abrupt("return", data);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          throw new Error(_context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function highToLow() {
    return _ref3.apply(this, arguments);
  };
}();

// sort Product high to low
exports.highToLow = highToLow;
var lowToHigh = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _product["default"].find().sort({
            discountedPrice: 1
          });
        case 3:
          data = _context4.sent;
          return _context4.abrupt("return", data);
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          throw new Error(_context4.t0);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function lowToHigh() {
    return _ref4.apply(this, arguments);
  };
}();

// Search Product by text
exports.lowToHigh = lowToHigh;
var searchByText = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(searchText) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _product["default"].find({
            $or: [{
              title: {
                $regex: searchText,
                $options: 'i'
              }
            }, {
              manufacturer: {
                $regex: searchText,
                $options: 'i'
              }
            }]
          });
        case 3:
          data = _context5.sent;
          return _context5.abrupt("return", data);
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          throw new Error(_context5.t0);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function searchByText(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

// sort Product New Arrival
exports.searchByText = searchByText;
var newArrival = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _product["default"].find().sort({
            'createdAt': -1
          });
        case 3:
          data = _context6.sent;
          return _context6.abrupt("return", data);
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          throw new Error(_context6.t0);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function newArrival() {
    return _ref6.apply(this, arguments);
  };
}();
// Create a new product
exports.newArrival = newArrival;
var createProduct = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(productData) {
    var product, newProduct;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          product = new _product["default"](productData);
          _context7.next = 4;
          return product.save();
        case 4:
          newProduct = _context7.sent;
          return _context7.abrupt("return", newProduct);
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          throw new Error(_context7.t0.message);
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function createProduct(_x6) {
    return _ref7.apply(this, arguments);
  };
}();

// Update a product
exports.createProduct = createProduct;
var updateProduct = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id, productData) {
    var updatedProduct;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _product["default"].findByIdAndUpdate(id, productData, {
            "new": true
          });
        case 3:
          updatedProduct = _context8.sent;
          return _context8.abrupt("return", updatedProduct);
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          throw new Error(_context8.t0.message);
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function updateProduct(_x7, _x8) {
    return _ref8.apply(this, arguments);
  };
}();

// Delete a product
exports.updateProduct = updateProduct;
var deleteProduct = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(id) {
    var deletedProduct;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _product["default"].findByIdAndDelete(id);
        case 3:
          deletedProduct = _context9.sent;
          return _context9.abrupt("return", deletedProduct);
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          throw new Error(_context9.t0.message);
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return function deleteProduct(_x9) {
    return _ref9.apply(this, arguments);
  };
}();
exports.deleteProduct = deleteProduct;