const MODULE = 'test-module';

Promise.resolve().then(() => {
  return require(MODULE);
});
Promise.resolve().then(() => {
  return require(`test-${ MODULE }`);
});
