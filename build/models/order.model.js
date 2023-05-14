"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var orderSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  product: [{
    productId: {
      type: String
    },
    description: {
      type: String
    },
    title: {
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
    }
  }],
  address: {
    fullName: {
      type: String,
      required: true
    },
    mobile: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    town: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    userId: {
      type: String
    }
  },
  paymenttype: {
    type: String,
    required: true,
    "default": "Credit card"
  }
});
var _default = (0, _mongoose.model)('order', orderSchema);
exports["default"] = _default;