const MODULE = Object('test-module');
Promise.resolve(`${MODULE}`).then(s => require(s));
Promise.resolve(`test-${MODULE}`).then(s => require(s));
