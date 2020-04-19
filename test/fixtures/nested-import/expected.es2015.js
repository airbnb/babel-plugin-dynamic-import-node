'use strict';

function _interopRequireWildcard(obj) {}

function getModule(path) {
  return Promise.resolve('test-module').then(function (_) {
    return _interopRequireWildcard(require(_));
  });
}

getModule().then(function () {});
