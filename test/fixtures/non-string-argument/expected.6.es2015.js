Promise.resolve('' + String({ 'answer': 42 })).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve('' + String(['foo', 'bar'])).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve('' + 42).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve('' + String(void 0)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve('' + String(undefined)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve('' + String(null)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve('' + String(true)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
Promise.resolve('' + String(Symbol())).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
