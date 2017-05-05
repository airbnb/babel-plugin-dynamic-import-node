'use strict';

var MODULE = Object('test-module');

Promise.resolve().then(function () {
  return require('' + String(MODULE));
});
Promise.resolve().then(function () {
  return require('test-' + String(MODULE));
});
