function getModule(path) {
  return Promise.resolve('test-module').then(s => require(s));
}

getModule().then(() => {});
