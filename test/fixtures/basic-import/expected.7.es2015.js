var testModule = Promise.resolve('test-module').then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
