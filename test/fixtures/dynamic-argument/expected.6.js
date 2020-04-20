const MODULE = Object('test-module');

Promise.resolve(`${MODULE}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
Promise.resolve(`test-${MODULE}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
