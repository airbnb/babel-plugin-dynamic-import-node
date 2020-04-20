function getModule(path) {
  return Promise.resolve('test-module').then(s => babelHelpers.interopRequireWildcard(require(s)));
}

getModule().then(() => {});
