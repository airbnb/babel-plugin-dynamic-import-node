function _interopRequireWildcard(obj) {}

Promise.resolve('test-module').then(_ => _interopRequireWildcard(require(_))).then(() => Promise.resolve('test-module-2').then(_ => _interopRequireWildcard(require(_))));

Promise.all([Promise.resolve('test-1').then(_ => _interopRequireWildcard(require(_))), Promise.resolve('test-2').then(_ => _interopRequireWildcard(require(_))), Promise.resolve('test-3').then(_ => _interopRequireWildcard(require(_)))]).then(() => {});
