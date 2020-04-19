function _interopRequireWildcard(obj) {}

Promise.resolve(`${{ 'answer': 42 }}`).then(_ => _interopRequireWildcard(require(_)));
Promise.resolve(`${['foo', 'bar']}`).then(_ => _interopRequireWildcard(require(_)));
Promise.resolve(`${42}`).then(_ => _interopRequireWildcard(require(_)));
Promise.resolve(`${void 0}`).then(_ => _interopRequireWildcard(require(_)));
Promise.resolve(`${undefined}`).then(_ => _interopRequireWildcard(require(_)));
Promise.resolve(`${null}`).then(_ => _interopRequireWildcard(require(_)));
Promise.resolve(`${true}`).then(_ => _interopRequireWildcard(require(_)));
Promise.resolve(`${Symbol()}`).then(_ => _interopRequireWildcard(require(_)));
