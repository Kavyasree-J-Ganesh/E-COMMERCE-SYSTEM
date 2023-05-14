"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productValidator = void 0;
var _joi = _interopRequireDefault(require("@hapi/joi"));
var productValidator = function productValidator(req, res, next) {
  var schema = _joi["default"].object({
    title: _joi["default"].string().required(),
    image: _joi["default"].string().required(),
    realPrice: _joi["default"].number().required(),
    discountPercentage: _joi["default"].number().min(0).max(100).required(),
    description: _joi["default"].string().required(),
    manufacturer: _joi["default"].string().required(),
    quantity: _joi["default"].number().required(),
    category: _joi["default"].string().required(),
    buyprice: _joi["default"].number().min(4).required()
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
exports.productValidator = productValidator;