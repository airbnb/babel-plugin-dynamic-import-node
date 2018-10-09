'use strict';

function _interopRequireWildcard(obj) {}

var MODULE = Object('test-module');

Promise.resolve().then(function () {
  return _interopRequireWildcard(require('' + String(MODULE)));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require('test-' + String(MODULE)));
});
