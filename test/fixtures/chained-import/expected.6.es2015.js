Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('test-module'));
}).then(function () {
  return Promise.resolve().then(function () {
    return babelHelpers.interopRequireWildcard(require('test-module-2'));
  });
});

Promise.all([Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('test-1'));
}), Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('test-2'));
}), Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('test-3'));
})]).then(function () {});
