'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helloWorld = helloWorld;
exports.goodbyeMoon = goodbyeMoon;
function helloWorld() {
  return 'Hello world!';
}

function goodbyeMoon() {
  return 'Goodbye moon!';
}

exports.default = {
  helloWorld,
  goodbyeMoon
};