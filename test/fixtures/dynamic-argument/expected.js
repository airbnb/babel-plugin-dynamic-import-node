function _interopRequireWildcard(obj) {}

const MODULE = Object('test-module');

Promise.resolve(`${MODULE}`).then(_ => _interopRequireWildcard(require(_)));
Promise.resolve(`test-${MODULE}`).then(_ => _interopRequireWildcard(require(_)));
