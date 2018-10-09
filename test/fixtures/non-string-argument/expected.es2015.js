'use strict';

function _interopRequireWildcard(obj) {}

Promise.resolve().then(function () {
  return _interopRequireWildcard(require('' + String({ 'answer': 42 })));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require('' + String(['foo', 'bar'])));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require('' + 42));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require('' + String(void 0)));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require('' + String(undefined)));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require('' + String(null)));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require('' + String(true)));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require('' + String(Symbol())));
});
