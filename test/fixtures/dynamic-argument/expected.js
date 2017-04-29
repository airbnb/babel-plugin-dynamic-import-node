const MODULE = 'test-module';

new Promise(resolve => resolve(require(`${MODULE}`)));
new Promise(resolve => resolve(require(`test-${MODULE}`)));
