"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var cartSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  productId: {
    type: String
  },
  description: {
    type: String
  },
  title: {
    type: String
  },
  category: {
    type: String
  },
  image: {
    type: String
  },
  manufacturer: {
    type: String
  },
  quantity: {
    type: Number,
    "default": 1
  },
  realPrice: {
    type: Number,
    required: true
  },
  discountedPrice: {
    type: Number,
    required: true
  },
  isPurchased: {
    type: Boolean,
    "default": false
  }
});
var _default = (0, _mongoose.model)('cart', cartSchema);
exports["default"] = _default;