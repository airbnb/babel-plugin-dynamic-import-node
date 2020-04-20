Promise.resolve('test-module').then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
}).then(function () {
  return Promise.resolve('test-module-2').then(function (s) {
    return babelHelpers.interopRequireWildcard(require(s));
  });
});

Promise.all([Promise.resolve('test-1').then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
}), Promise.resolve('test-2').then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
}), Promise.resolve('test-3').then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
})]).then(function () {});
