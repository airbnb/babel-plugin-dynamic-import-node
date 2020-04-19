Promise.resolve(`${{ 'answer': 42 }}`).then(_ => require(_));
Promise.resolve(`${['foo', 'bar']}`).then(_ => require(_));
Promise.resolve(`${42}`).then(_ => require(_));
Promise.resolve(`${void 0}`).then(_ => require(_));
Promise.resolve(`${undefined}`).then(_ => require(_));
Promise.resolve(`${null}`).then(_ => require(_));
Promise.resolve(`${true}`).then(_ => require(_));
Promise.resolve(`${Symbol()}`).then(_ => require(_));
