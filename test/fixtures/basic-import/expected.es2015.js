'use strict';

var testModule = Promise.resolve().then(function () {
  return require('test-module');
});
