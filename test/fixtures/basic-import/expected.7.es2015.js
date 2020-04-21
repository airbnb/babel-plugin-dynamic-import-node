var testModule = Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('test-module'));
});
