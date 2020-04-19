function _interopRequireWildcard(obj) {}

function getModule(path) {
  return Promise.resolve('test-module').then(_ => _interopRequireWildcard(require(_)));
}

getModule().then(() => {});
