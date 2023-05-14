"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.sortLowToHigh = exports.sortHighToLow = exports.searchByText = exports.newArrival = exports.getProductsbyID = exports.getAllProducts = exports.deleteProduct = exports.createProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var productService = _interopRequireWildcard(require("../services/product.services"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var getAllProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return productService.getAllProducts(req.query.category, req.query.searchText);
        case 3:
          products = _context.sent;
          res.json(products);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getAllProducts(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// Get Product by id
exports.getAllProducts = getAllProducts;
var getProductsbyID = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return productService.getProductsbyID(req.params._id, req.body.userId);
        case 3:
          data = _context2.sent;
          res.status(_httpStatusCodes["default"].ACCEPTED).json({
            code: _httpStatusCodes["default"].ACCEPTED,
            data: data,
            message: 'Product fetched successfully'
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getProductsbyID(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// Sorting of product High to Low using price
exports.getProductsbyID = getProductsbyID;
var sortHighToLow = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return productService.highToLow();
        case 3:
          data = _context3.sent;
          res.status(_httpStatusCodes["default"].ACCEPTED).json({
            code: _httpStatusCodes["default"].ACCEPTED,
            data: data,
            message: 'Product fetched successfully'
          });
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function sortHighToLow(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

// Sorting of product Low to High using price
exports.sortHighToLow = sortHighToLow;
var sortLowToHigh = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return productService.lowToHigh();
        case 3:
          data = _context4.sent;
          res.status(_httpStatusCodes["default"].ACCEPTED).json({
            code: _httpStatusCodes["default"].ACCEPTED,
            data: data,
            message: 'Product fetched successfully'
          });
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function sortLowToHigh(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

// Find Product by search
exports.sortLowToHigh = sortLowToHigh;
var searchByText = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return productService.searchByText(req.params.searchText);
        case 3:
          data = _context5.sent;
          res.status(_httpStatusCodes["default"].ACCEPTED).json({
            code: _httpStatusCodes["default"].ACCEPTED,
            data: data,
            message: 'Product fetched successfully'
          });
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function searchByText(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

// Find Product by Arrival
exports.searchByText = searchByText;
var newArrival = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return productService.newArrival(req.params.searchText);
        case 3:
          data = _context6.sent;
          res.status(_httpStatusCodes["default"].ACCEPTED).json({
            code: _httpStatusCodes["default"].ACCEPTED,
            data: data,
            message: 'Product fetched successfully'
          });
          _context6.next = 10;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function newArrival(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
exports.newArrival = newArrival;
var createProduct = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var productData, newProduct;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          productData = req.body;
          _context7.next = 4;
          return productService.createProduct(productData);
        case 4:
          newProduct = _context7.sent;
          res.json(newProduct);
          _context7.next = 11;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          next(_context7.t0);
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function createProduct(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
exports.createProduct = createProduct;
var updateProduct = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var productId, productData, updatedProduct;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          productId = req.params.id;
          productData = req.body;
          _context8.next = 5;
          return productService.updateProduct(productId, productData);
        case 5:
          updatedProduct = _context8.sent;
          res.json(updatedProduct);
          _context8.next = 12;
          break;
        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          next(_context8.t0);
        case 12:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return function updateProduct(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();
exports.updateProduct = updateProduct;
var deleteProduct = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var productId, deletedProduct;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          productId = req.params.id;
          _context9.next = 4;
          return productService.deleteProduct(productId);
        case 4:
          deletedProduct = _context9.sent;
          res.json(deletedProduct);
          _context9.next = 11;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          next(_context9.t0);
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return function deleteProduct(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();
exports.deleteProduct = deleteProduct;