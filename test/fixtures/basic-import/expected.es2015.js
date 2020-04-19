'use strict';

function _interopRequireWildcard(obj) {}

var testModule = Promise.resolve('test-module').then(function (_) {
  return _interopRequireWildcard(require(_));
});
