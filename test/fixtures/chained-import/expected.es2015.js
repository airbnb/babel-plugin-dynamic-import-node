'use strict';

function _interopRequireWildcard(obj) {}

Promise.resolve('test-module').then(function (_) {
  return _interopRequireWildcard(require(_));
}).then(function () {
  return Promise.resolve('test-module-2').then(function (_) {
    return _interopRequireWildcard(require(_));
  });
});

Promise.all([Promise.resolve('test-1').then(function (_) {
  return _interopRequireWildcard(require(_));
}), Promise.resolve('test-2').then(function (_) {
  return _interopRequireWildcard(require(_));
}), Promise.resolve('test-3').then(function (_) {
  return _interopRequireWildcard(require(_));
})]).then(function () {});
