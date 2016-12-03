Promise.resolve().then(() => {
  return require('test-module');
}).then(() => Promise.resolve().then(() => {
  return require('test-module-2');
}));

Promise.all([Promise.resolve().then(() => {
  return require('test-1');
}), Promise.resolve().then(() => {
  return require('test-2');
}), Promise.resolve().then(() => {
  return require('test-3');
})]).then(() => {});
