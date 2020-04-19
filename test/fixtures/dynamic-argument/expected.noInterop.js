const MODULE = Object('test-module');

Promise.resolve(`${MODULE}`).then(_ => require(_));
Promise.resolve(`test-${MODULE}`).then(_ => require(_));
