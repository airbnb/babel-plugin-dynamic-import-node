'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

Promise.resolve().then(function () {
  return _interopRequireWildcard(require('my-module'));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require('my-module'));
});
