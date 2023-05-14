"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeProduct = exports.getWishlist = exports.addToWishlist = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _wishlist = _interopRequireDefault(require("../models/wishlist.model"));
var _product = _interopRequireDefault(require("../models/product.model"));
var addToWishlist = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId, productId) {
    var product, wishlist, existingProduct, updatedWishlist, newWishlist, createdWishlist;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _product["default"].findById(productId);
        case 2:
          product = _context.sent;
          if (product) {
            _context.next = 5;
            break;
          }
          throw new Error('Product not found');
        case 5:
          _context.next = 7;
          return _wishlist["default"].findOne({
            userId: userId
          });
        case 7:
          wishlist = _context.sent;
          if (!wishlist) {
            _context.next = 21;
            break;
          }
          existingProduct = wishlist.products.find(function (item) {
            return item.productId === productId;
          });
          if (!existingProduct) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", wishlist);
        case 14:
          wishlist.products.push({
            productId: product._id,
            description: product.description,
            title: product.title,
            Image: product.image,
            manufacturer: product.manufacturer,
            discountedPrice: product.discountedPrice,
            realPrice: product.realPrice
          });
          _context.next = 17;
          return wishlist.save();
        case 17:
          updatedWishlist = _context.sent;
          return _context.abrupt("return", updatedWishlist);
        case 19:
          _context.next = 26;
          break;
        case 21:
          newWishlist = new _wishlist["default"]({
            userId: userId,
            products: [{
              productId: product._id,
              description: product.description,
              title: product.title,
              Image: product.image,
              manufacturer: product.manufacturer,
              discountedPrice: product.discountedPrice,
              realPrice: product.realPrice
            }]
          });
          _context.next = 24;
          return newWishlist.save();
        case 24:
          createdWishlist = _context.sent;
          return _context.abrupt("return", createdWishlist);
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addToWishlist(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//remove product from wishlist
exports.addToWishlist = addToWishlist;
var removeProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId, productId) {
    var checkWishlist, product, newProducts, updatedCart;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _wishlist["default"].findOne({
            userId: userId
          });
        case 2:
          checkWishlist = _context2.sent;
          if (checkWishlist) {
            _context2.next = 5;
            break;
          }
          throw new Error("User wishlist doesn't exist");
        case 5:
          product = checkWishlist.products.find(function (p) {
            return p.productId === productId;
          });
          if (product) {
            _context2.next = 8;
            break;
          }
          throw new Error('product not in the wishlist');
        case 8:
          newProducts = checkWishlist.products.filter(function (p) {
            return p.productId !== productId;
          });
          _context2.next = 11;
          return _wishlist["default"].findOneAndUpdate({
            userId: userId
          }, {
            products: newProducts
          }, {
            "new": true
          });
        case 11:
          updatedCart = _context2.sent;
          return _context2.abrupt("return", updatedCart);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function removeProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//Get all from wishlist
exports.removeProduct = removeProduct;
var getWishlist = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId) {
    var checkWishlist;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _wishlist["default"].findOne({
            userId: userId
          });
        case 2:
          checkWishlist = _context3.sent;
          if (!checkWishlist) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", checkWishlist);
        case 7:
          throw new Error('Error getting Wishlist');
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getWishlist(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getWishlist = getWishlist;