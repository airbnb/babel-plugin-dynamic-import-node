var MODULE = Object('test-module');
Promise.resolve("".concat(MODULE)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve("test-".concat(MODULE)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
