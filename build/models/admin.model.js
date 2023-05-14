"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var mongoose = require('mongoose');
var adminSchema = new _mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  phonenumber: {
    type: Number
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  companyname: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('Admin', adminSchema);
exports["default"] = _default;