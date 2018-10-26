function _interopRequireWildcard(obj) {}

Promise.resolve().then(() => _interopRequireWildcard(require(`${{
  'answer': 42
}}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${['foo', 'bar']}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${42}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${void 0}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${undefined}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${null}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${true}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${Symbol()}`)));
