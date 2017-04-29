new Promise(resolve => resolve(require(`${{ 'answer': 42 }}`)));
new Promise(resolve => resolve(require(`${['foo', 'bar']}`)));
new Promise(resolve => resolve(require(`${42}`)));
new Promise(resolve => resolve(require(`${void 0}`)));
new Promise(resolve => resolve(require(`${undefined}`)));
new Promise(resolve => resolve(require(`${null}`)));
new Promise(resolve => resolve(require(`${true}`)));
new Promise(resolve => resolve(require(`${Symbol()}`)));
