Promise.resolve(`${{ 'answer': 42 }}`).then(s => require(s));
Promise.resolve(`${['foo', 'bar']}`).then(s => require(s));
Promise.resolve(`${42}`).then(s => require(s));
Promise.resolve(`${void 0}`).then(s => require(s));
Promise.resolve(`${undefined}`).then(s => require(s));
Promise.resolve(`${null}`).then(s => require(s));
Promise.resolve(`${true}`).then(s => require(s));
Promise.resolve(`${Symbol()}`).then(s => require(s));
