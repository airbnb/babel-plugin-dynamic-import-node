function getModule(path) {
  return Promise.resolve().then(() => {
    return require('test-module');
  });
}

getModule().then(() => {});
