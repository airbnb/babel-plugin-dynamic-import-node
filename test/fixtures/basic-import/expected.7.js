const testModule = Promise.resolve('test-module').then(s => babelHelpers.interopRequireWildcard(require(s)));
