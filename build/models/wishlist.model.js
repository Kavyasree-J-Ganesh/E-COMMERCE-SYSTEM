"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var wishlistSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  products: [{
    productId: {
      type: String
    },
    description: {
      type: String
    },
    title: {
      type: String
    },
    Image: {
      type: String
    },
    manufacturer: {
      type: String
    },
    discountedPrice: {
      type: Number
    },
    realPrice: {
      type: Number
    }
  }]
});
var _default = (0, _mongoose.model)('Wishlist', wishlistSchema);
exports["default"] = _default;