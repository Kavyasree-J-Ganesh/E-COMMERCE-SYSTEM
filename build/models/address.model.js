"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var addressSchema = new _mongoose.Schema({
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
    required: true,
    unique: true
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
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('address', addressSchema);
exports["default"] = _default;