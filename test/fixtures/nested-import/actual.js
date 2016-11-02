function getModule(path) {
  return import('test-module');
}

getModule().then(() => {});
