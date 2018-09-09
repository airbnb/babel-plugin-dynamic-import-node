const MODULE = Object('test-module');
Promise.resolve().then(() => require(`${MODULE}`));
Promise.resolve().then(() => require(`test-${MODULE}`));
