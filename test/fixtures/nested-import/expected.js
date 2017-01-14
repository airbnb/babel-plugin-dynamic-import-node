function getModule(path) {
  return Promise.resolve().then(() => require('test-module'));
}

getModule().then(() => {});
