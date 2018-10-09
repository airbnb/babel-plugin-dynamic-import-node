'use strict';

function _interopRequireWildcard(obj) {}

function getModule(path) {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('test-module'));
  });
}

getModule().then(function () {});
