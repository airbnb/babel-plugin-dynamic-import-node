function getModule(path) {
  return Promise.resolve('test-module').then(function (s) {
    return babelHelpers.interopRequireWildcard(require(s));
  });
}

getModule().then(function () {});
