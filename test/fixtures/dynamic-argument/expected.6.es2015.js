var MODULE = Object('test-module');

Promise.resolve('' + String(MODULE)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve('test-' + String(MODULE)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
