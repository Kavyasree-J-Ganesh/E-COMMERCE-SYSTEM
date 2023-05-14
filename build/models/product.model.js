"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var mongoose = require('mongoose');
var productSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  realPrice: {
    type: Number,
    required: true
  },
  discountedPrice: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: false,
    "default": 0
  },
  reviewcount: {
    type: Number,
    required: false,
    "default": 0
  },
  quantity: {
    type: Number,
    required: true
  },
  buyprice: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Product', productSchema);
exports["default"] = _default;