Promise.resolve(`${{
  'answer': 42
}}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
Promise.resolve(`${['foo', 'bar']}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
Promise.resolve(`${42}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
Promise.resolve(`${void 0}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
Promise.resolve(`${undefined}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
Promise.resolve(`${null}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
Promise.resolve(`${true}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
Promise.resolve(`${Symbol()}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
