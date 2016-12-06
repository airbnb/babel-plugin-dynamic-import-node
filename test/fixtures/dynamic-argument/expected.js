const MODULE = 'test-module';

Promise.resolve().then(() => require(MODULE));
Promise.resolve().then(() => require(`test-${ MODULE }`));
