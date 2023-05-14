"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var mongoose = require('mongoose');
var categorySchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('categories', categorySchema);
exports["default"] = _default;