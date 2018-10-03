function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

_interopRequireWildcard(require(`${{ 'answer': 42 }}`));
_interopRequireWildcard(require(`${['foo', 'bar']}`));
_interopRequireWildcard(require(`${42}`));
_interopRequireWildcard(require(`${void 0}`));
_interopRequireWildcard(require(`${undefined}`));
_interopRequireWildcard(require(`${null}`));
_interopRequireWildcard(require(`${true}`));
_interopRequireWildcard(require(`${Symbol()}`));
