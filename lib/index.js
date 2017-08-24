'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _display = require('./display');

var _display2 = _interopRequireDefault(_display);

var _padding = require('./padding');

var _padding2 = _interopRequireDefault(_padding);

var _margin = require('./margin');

var _margin2 = _interopRequireDefault(_margin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  display: _display2.default,
  padding: _padding2.default,
  margin: _margin2.default
};