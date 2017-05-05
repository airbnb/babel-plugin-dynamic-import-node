'use strict';

Promise.resolve().then(function () {
  return require('' + String({ 'answer': 42 }));
});
Promise.resolve().then(function () {
  return require('' + String(['foo', 'bar']));
});
Promise.resolve().then(function () {
  return require('' + 42);
});
Promise.resolve().then(function () {
  return require('' + String(void 0));
});
Promise.resolve().then(function () {
  return require('' + String(undefined));
});
Promise.resolve().then(function () {
  return require('' + String(null));
});
Promise.resolve().then(function () {
  return require('' + String(true));
});
Promise.resolve().then(function () {
  return require('' + String(Symbol()));
});
