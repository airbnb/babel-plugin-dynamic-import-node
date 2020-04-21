Promise.resolve().then(() => require('test-module')).then(() => Promise.resolve().then(() => require('test-module-2')));
Promise.all([Promise.resolve().then(() => require('test-1')), Promise.resolve().then(() => require('test-2')), Promise.resolve().then(() => require('test-3'))]).then(() => {});
