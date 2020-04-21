function getModule(path) {
  return Promise.resolve().then(function () {
    return babelHelpers.interopRequireWildcard(require('test-module'));
  });
}

getModule().then(function () {});
