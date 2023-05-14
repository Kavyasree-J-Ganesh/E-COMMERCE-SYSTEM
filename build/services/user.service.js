"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegistration = exports.login = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
// create new user
var userRegistration = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var userExist, salt, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _user["default"].findOne({
            email: body.email
          });
        case 2:
          userExist = _context.sent;
          if (userExist) {
            _context.next = 16;
            break;
          }
          _context.next = 6;
          return _bcrypt["default"].genSalt(10);
        case 6:
          salt = _context.sent;
          _context.next = 9;
          return _bcrypt["default"].hash(body.password, salt);
        case 9:
          body.password = _context.sent;
          _context.next = 12;
          return _user["default"].create(body);
        case 12:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 16:
          throw new Error('User already exists');
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function userRegistration(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.userRegistration = userRegistration;
var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var isAdmin,
      user,
      validPassword,
      token,
      _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          isAdmin = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
          _context2.prev = 1;
          _context2.next = 4;
          return _user["default"].findOne({
            email: body.email
          });
        case 4:
          user = _context2.sent;
          console.log(body, "asdasdasdasdasd");
          if (user) {
            _context2.next = 8;
            break;
          }
          throw new Error('Invalid Email');
        case 8:
          _context2.next = 10;
          return _bcrypt["default"].compare(body.password, user.password);
        case 10:
          validPassword = _context2.sent;
          if (validPassword) {
            _context2.next = 13;
            break;
          }
          throw new Error('Invalid Password');
        case 13:
          // If logging in as admin,user.isAdmin is true
          token = _jsonwebtoken["default"].sign({
            email: user.email,
            id: user._id
          }, process.env.USER_SECRET_KEY);
          return _context2.abrupt("return", {
            isAdmin: user.isAdmin,
            token: token
          });
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](1);
          throw new Error(_context2.t0);
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 17]]);
  }));
  return function login(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.login = login;