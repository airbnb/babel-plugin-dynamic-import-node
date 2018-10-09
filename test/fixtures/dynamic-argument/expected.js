function _interopRequireWildcard(obj) {}

const MODULE = Object('test-module');

Promise.resolve().then(() => _interopRequireWildcard(require(`${MODULE}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`test-${MODULE}`)));
