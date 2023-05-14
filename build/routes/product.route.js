"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var productController = _interopRequireWildcard(require("../controllers/product.controller"));
var _auth = require("../middlewares/auth.middleware");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = _express["default"].Router();

// CRUD Product 
router.post('/', _auth.userAuth, productController.createProduct);
router.put('/:id', _auth.userAuth, productController.updateProduct);
router["delete"]('/:id', _auth.userAuth, productController.deleteProduct);

// Get product by id for User
router.get('/', productController.getAllProducts);
// Get product for User
router.get('/:_id', productController.getProductsbyID);

// sort product High to Low
router.get('/hightolow', _auth.userAuth, productController.sortHighToLow);

// sort product Low to High
router.get('/lowtohigh', _auth.userAuth, productController.sortLowToHigh);

// sort product by searching
router.get('/search/:searchText', productController.searchByText);

// sort product by New Arrival
router.get('/newarrival', _auth.userAuth, productController.newArrival);
var _default = router;
exports["default"] = _default;