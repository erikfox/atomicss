'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScaledEmValues = exports.emScaleFactors = exports.getEnumeratedValues = exports.globalPropValues = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _camelCase = require('camel-case');

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const globalPropValues = exports.globalPropValues = ['inherit', 'initial', 'unset'];

const getEnumeratedValues = exports.getEnumeratedValues = (ruleName, possibleValues = []) => globalPropValues.concat(possibleValues).reduce((rules, value) => _extends({}, rules, {
  [(0, _camelCase2.default)(value)]: { [ruleName]: value }
}), {});

const emScaleFactors = exports.emScaleFactors = [['smallest', 0.25], ['small', 0.5], ['medium', 1], ['large', 2], ['largest', 4]];

const getScaledEmValues = exports.getScaledEmValues = (ruleName, possibleValues) => emScaleFactors.reduce((rules, [scale, factor]) => _extends({}, rules, {
  [(0, _camelCase2.default)(scale)]: { [ruleName]: `${factor}em` }
}), getEnumeratedValues(ruleName, possibleValues));