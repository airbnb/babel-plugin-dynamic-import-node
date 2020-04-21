function getModule(path) {
  return Promise.resolve().then(() => babelHelpers.interopRequireWildcard(require('test-module')));
}

getModule().then(() => {});
