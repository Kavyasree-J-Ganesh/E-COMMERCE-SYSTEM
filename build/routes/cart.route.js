"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var cartController = _interopRequireWildcard(require("../controllers/cart.new.controller"));
var _auth = require("../middlewares/auth.middleware");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = _express["default"].Router();

// get all product of cart
router.get('/', _auth.userAuth, cartController.getCart);
router.get('/cart_orders_analysis', _auth.userAuth, cartController.cartOrdersAnalysis);
router.get('/top_selled_products', _auth.userAuth, cartController.cartProductAnalysis);

// add Products to the cart
router.post('/:_id', _auth.userAuth, cartController.addedToCart);

//remove Products from the cart
router.put('/:_id/', _auth.userAuth, cartController.removeProductFromCart);

// delete product from cart
router["delete"]('/:_id', _auth.userAuth, cartController.deleteProductFromCart);

// purchase Products from cart
router.post('/purchase/:_id', _auth.userAuth, cartController.purchaseById);
var _default = router;
exports["default"] = _default;