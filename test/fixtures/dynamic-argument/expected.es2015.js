'use strict';

function _interopRequireWildcard(obj) {}

var MODULE = Object('test-module');

Promise.resolve('' + String(MODULE)).then(function (_) {
  return _interopRequireWildcard(require(_));
});
Promise.resolve('test-' + String(MODULE)).then(function (_) {
  return _interopRequireWildcard(require(_));
});
