Promise.resolve(`${MODULE}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
let i = 0;
Promise.resolve(`${i++}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
Promise.resolve(`${fn()}`).then(s => babelHelpers.interopRequireWildcard(require(s)));

async () => Promise.resolve(`${await "x"}`).then(s => babelHelpers.interopRequireWildcard(require(s)));

function* f() {
  Promise.resolve(`${yield "x"}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
}
