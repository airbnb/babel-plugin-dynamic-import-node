new Promise(resolve => {
  resolve(require('test-module'));
}).then(() => new Promise(resolve => {
  resolve(require('test-module-2'));
}));

Promise.all([new Promise(resolve => {
  resolve(require('test-1'));
}), new Promise(resolve => {
  resolve(require('test-2'));
}), new Promise(resolve => {
  resolve(require('test-3'));
})]).then(() => {});
