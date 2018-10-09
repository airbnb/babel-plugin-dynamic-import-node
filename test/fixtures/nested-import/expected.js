function _interopRequireWildcard(obj) {}

function getModule(path) {
  return Promise.resolve().then(() => _interopRequireWildcard(require('test-module')));
}

getModule().then(() => {});
