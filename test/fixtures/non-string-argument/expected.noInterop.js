Promise.resolve().then(() => require(`${{ 'answer': 42 }}`));
Promise.resolve().then(() => require(`${['foo', 'bar']}`));
Promise.resolve().then(() => require(`${42}`));
Promise.resolve().then(() => require(`${void 0}`));
Promise.resolve().then(() => require(`${undefined}`));
Promise.resolve().then(() => require(`${null}`));
Promise.resolve().then(() => require(`${true}`));
Promise.resolve().then(() => require(`${Symbol()}`));
