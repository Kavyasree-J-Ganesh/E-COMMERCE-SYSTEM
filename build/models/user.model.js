"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  confirmpassword: {
    type: String,
    required: true,
    trim: true
  },
  phonenumber: {
    type: String,
    required: true,
    trim: true
  },
  companyname: {
    type: String,
    trim: true,
    required: false
  },
  isAdmin: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('User', userSchema);
exports["default"] = _default;