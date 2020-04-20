Promise.resolve('test-module').then(s => babelHelpers.interopRequireWildcard(require(s))).then(() => Promise.resolve('test-module-2').then(s => babelHelpers.interopRequireWildcard(require(s))));

Promise.all([Promise.resolve('test-1').then(s => babelHelpers.interopRequireWildcard(require(s))), Promise.resolve('test-2').then(s => babelHelpers.interopRequireWildcard(require(s))), Promise.resolve('test-3').then(s => babelHelpers.interopRequireWildcard(require(s)))]).then(() => {});
