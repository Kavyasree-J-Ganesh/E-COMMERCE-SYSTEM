"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAddressDetails = exports.removeproductFromCart = exports.purchaseById = exports.getCart = exports.getAllAddresses = exports.getAddresses = exports.deleteProductFromCart = exports.cartProductAnalysis = exports.cartOrdersAnalysis = exports.addedToCart = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cartNew = _interopRequireDefault(require("../models/cart.new.model"));
var _product = _interopRequireDefault(require("../models/product.model"));
// Update cart address details
// export const updateAddressDetails = async (updatedData) => {
//     const updatedCart = await cart.findByIdAndUpdate(
//         { _id: updatedData.cartId },
//         {
//             fullName: updatedData.fullName,
//             mobile: updatedData.mobile,
//             address: updatedData.address,
//             town: updatedData.town,
//             state: updatedData.state
//         },
//         { new: true }
//     );
//     return updatedCart;
// };

var updateAddressDetails = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cartId, updatedData) {
    var updatedCart;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _cartNew["default"].findByIdAndUpdate({
            _id: cartId
          }, {
            $set: {
              'address.$[elem].fullName': updatedData.fullName,
              'address.$[elem].mobile': updatedData.mobile,
              'address.$[elem].address': updatedData.address,
              'address.$[elem].town': updatedData.town,
              'address.$[elem].state': updatedData.state
            }
          }, {
            arrayFilters: [{
              'elem._id': updatedData.addressId
            }],
            "new": true
          });
        case 2:
          updatedCart = _context.sent;
          return _context.abrupt("return", updatedCart);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function updateAddressDetails(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//get address by id
exports.updateAddressDetails = updateAddressDetails;
var getAddresses = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId) {
    var cart;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return cart.findOne({
            userId: userId
          });
        case 2:
          cart = _context2.sent;
          if (cart) {
            _context2.next = 5;
            break;
          }
          throw new Error('Cart not found');
        case 5:
          return _context2.abrupt("return", cart.address);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getAddresses(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

// get all address
exports.getAddresses = getAddresses;
var getAllAddresses = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var carts;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _cartNew["default"].find({});
        case 2:
          carts = _context3.sent;
          return _context3.abrupt("return", carts.flatMap(function (cart) {
            return cart.address;
          }));
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getAllAddresses() {
    return _ref3.apply(this, arguments);
  };
}();

// get all product
exports.getAllAddresses = getAllAddresses;
var getCart = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId) {
    var cartList, cart_total;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _cartNew["default"].find({
            userId: userId,
            isPurchased: false
          });
        case 2:
          cartList = _context4.sent;
          cart_total = cartList.reduce(function (accu, currentCart) {
            return accu + parseInt(currentCart.discountedPrice) * parseInt(currentCart.quantity);
          }, 0);
          return _context4.abrupt("return", {
            userId: userId,
            product: cartList,
            cart_total: cart_total
          });
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getCart(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getCart = getCart;
var cartOrdersAnalysis = function cartOrdersAnalysis() {
  return _cartNew["default"].aggregate([{
    $match: {
      "isPurchased": {
        $eq: true
      }
    }
  }, {
    $group: {
      _id: "$category",
      quantity: {
        "$sum": "$quantity"
      }
    }
  }]);
};
exports.cartOrdersAnalysis = cartOrdersAnalysis;
var cartProductAnalysis = function cartProductAnalysis() {
  return _cartNew["default"].aggregate([{
    $match: {
      "isPurchased": {
        $eq: true
      }
    }
  }, {
    $group: {
      _id: "$title",
      quantity: {
        "$sum": "$quantity"
      }
    }
  }, {
    $sort: {
      quantity: -1
    }
  }, {
    $limit: 5
  }]);
};

// add product to cart
exports.cartProductAnalysis = cartProductAnalysis;
var addedToCart = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userId, params_id) {
    var product, cartItem, quantity, updatedCart, newProduct, newCart;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _product["default"].findOne({
            _id: params_id
          });
        case 3:
          product = _context5.sent;
          if (product) {
            _context5.next = 6;
            break;
          }
          throw new Error('product does not exist');
        case 6:
          _context5.next = 8;
          return _cartNew["default"].findOne({
            userId: userId,
            isPurchased: false,
            productId: params_id
          });
        case 8:
          cartItem = _context5.sent;
          if (!cartItem) {
            _context5.next = 19;
            break;
          }
          console.log(cartItem.quantity);
          quantity = parseInt(cartItem.quantity) + 1;
          console.log(quantity);
          _context5.next = 15;
          return _cartNew["default"].findOneAndUpdate({
            userId: userId,
            isPurchased: false,
            productId: params_id
          }, {
            quantity: quantity
          }, {
            "new": true
          });
        case 15:
          updatedCart = _context5.sent;
          return _context5.abrupt("return", updatedCart);
        case 19:
          newProduct = {
            productId: product._id,
            description: product.description,
            title: product.title,
            image: product.image,
            manufacturer: product.manufacturer,
            realPrice: parseInt(product.realPrice),
            discountedPrice: parseInt(product.discountedPrice),
            quantity: 1,
            category: product.category,
            userId: userId
          };
          _context5.next = 22;
          return _cartNew["default"].create(newProduct);
        case 22:
          newCart = _context5.sent;
          return _context5.abrupt("return", newCart);
        case 24:
          _context5.next = 29;
          break;
        case 26:
          _context5.prev = 26;
          _context5.t0 = _context5["catch"](0);
          throw {
            message: "".concat(_context5.t0.message),
            code: "400"
          };
        case 29:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 26]]);
  }));
  return function addedToCart(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();
exports.addedToCart = addedToCart;
var deleteProductFromCart = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(userId, productId) {
    var result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _cartNew["default"].findOneAndDelete({
            userId: userId,
            productId: productId
          });
        case 2:
          result = _context6.sent;
          return _context6.abrupt("return", result);
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function deleteProductFromCart(_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();

// Remove product from cart
exports.deleteProductFromCart = deleteProductFromCart;
var removeproductFromCart = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(userId, params_product_id) {
    var product, cartItem, quantity, updatedCart;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _product["default"].findOne({
            _id: params_product_id
          });
        case 3:
          product = _context7.sent;
          if (product) {
            _context7.next = 6;
            break;
          }
          throw new Error('product does not exist');
        case 6:
          _context7.next = 8;
          return _cartNew["default"].findOne({
            userId: userId,
            isPurchased: false,
            productId: params_product_id
          });
        case 8:
          cartItem = _context7.sent;
          if (!cartItem) {
            _context7.next = 24;
            break;
          }
          quantity = parseInt(cartItem.quantity) - 1;
          console.log(quantity);
          if (!(quantity > 0)) {
            _context7.next = 18;
            break;
          }
          _context7.next = 15;
          return _cartNew["default"].findOneAndUpdate({
            userId: userId,
            isPurchased: false,
            productId: params_product_id
          }, {
            quantity: quantity
          }, {
            "new": true
          });
        case 15:
          updatedCart = _context7.sent;
          _context7.next = 21;
          break;
        case 18:
          _context7.next = 20;
          return _cartNew["default"].findOneAndDelete({
            userId: userId,
            isPurchased: false,
            productId: params_product_id
          });
        case 20:
          updatedCart = _context7.sent;
        case 21:
          return _context7.abrupt("return", updatedCart);
        case 24:
          throw new Error('product is not added to cart');
        case 25:
          _context7.next = 30;
          break;
        case 27:
          _context7.prev = 27;
          _context7.t0 = _context7["catch"](0);
          throw {
            message: "".concat(_context7.t0.message),
            code: "400"
          };
        case 30:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 27]]);
  }));
  return function removeproductFromCart(_x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}();

// Purchase By Id from cart
exports.removeproductFromCart = removeproductFromCart;
var purchaseById = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(userId) {
    var updatedCart;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return _cartNew["default"].updateMany({
            userId: userId
          }, {
            isPurchased: true
          });
        case 2:
          updatedCart = _context8.sent;
          return _context8.abrupt("return", updatedCart);
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function purchaseById(_x11) {
    return _ref8.apply(this, arguments);
  };
}();
exports.purchaseById = purchaseById;