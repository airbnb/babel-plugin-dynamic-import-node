'use strict';

function getModule(path) {
  return Promise.resolve().then(function () {
    return require('test-module');
  });
}

getModule().then(function () {});
