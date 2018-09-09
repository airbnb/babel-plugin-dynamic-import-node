"use strict";

function _interopRequireWildcard(obj) {}

Promise.resolve().then(function () {
  return _interopRequireWildcard(require('test-module'));
}).then(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('test-module-2'));
  });
});
Promise.all([Promise.resolve().then(function () {
  return _interopRequireWildcard(require('test-1'));
}), Promise.resolve().then(function () {
  return _interopRequireWildcard(require('test-2'));
}), Promise.resolve().then(function () {
  return _interopRequireWildcard(require('test-3'));
})]).then(function () {});
