'use strict';

function _interopRequireWildcard(obj) {}

Promise.resolve('' + String({ 'answer': 42 })).then(function (_) {
  return _interopRequireWildcard(require(_));
});
Promise.resolve('' + String(['foo', 'bar'])).then(function (_) {
  return _interopRequireWildcard(require(_));
});
Promise.resolve('' + 42).then(function (_) {
  return _interopRequireWildcard(require(_));
});
Promise.resolve('' + String(void 0)).then(function (_) {
  return _interopRequireWildcard(require(_));
});
Promise.resolve('' + String(undefined)).then(function (_) {
  return _interopRequireWildcard(require(_));
});
Promise.resolve('' + String(null)).then(function (_) {
  return _interopRequireWildcard(require(_));
});
Promise.resolve('' + String(true)).then(function (_) {
  return _interopRequireWildcard(require(_));
});
Promise.resolve('' + String(Symbol())).then(function (_) {
  return _interopRequireWildcard(require(_));
});
