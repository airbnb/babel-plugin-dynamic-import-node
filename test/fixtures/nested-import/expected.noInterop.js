function getModule(path) {
  return Promise.resolve('test-module').then(_ => require(_));
}

getModule().then(() => {});
