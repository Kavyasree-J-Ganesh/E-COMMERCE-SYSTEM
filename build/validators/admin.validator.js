"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newAdminValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var newAdminValidator = function newAdminValidator(req, res, next) {
  var schema = _joi["default"].object({
    firstname: _joi["default"].string().min(4).required(),
    lastname: _joi["default"].string().min(4),
    phonenumber: _joi["default"].number().min(9).required(),
    email: _joi["default"].string().min(4).required(),
    password: _joi["default"].string().min(4).required(),
    companyname: _joi["default"].string().min(4).required()
  });
  var _schema$validate = schema.validate(req.body),
    error = _schema$validate.error,
    value = _schema$validate.value;
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
exports.newAdminValidator = newAdminValidator;