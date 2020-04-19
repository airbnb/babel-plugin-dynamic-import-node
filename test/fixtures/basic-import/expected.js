function _interopRequireWildcard(obj) {}

const testModule = Promise.resolve('test-module').then(_ => _interopRequireWildcard(require(_)));
