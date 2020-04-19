Promise.resolve('test-module').then(_ => require(_)).then(() => Promise.resolve('test-module-2').then(_ => require(_)));

Promise.all([Promise.resolve('test-1').then(_ => require(_)), Promise.resolve('test-2').then(_ => require(_)), Promise.resolve('test-3').then(_ => require(_))]).then(() => {});
