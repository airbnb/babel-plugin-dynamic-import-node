function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

Promise.resolve().then(() => _interopRequireWildcard(require(`${{ 'answer': 42 }}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${['foo', 'bar']}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${42}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${void 0}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${undefined}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${null}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${true}`)));
Promise.resolve().then(() => _interopRequireWildcard(require(`${Symbol()}`)));
