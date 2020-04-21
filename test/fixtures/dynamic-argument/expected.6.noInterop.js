Promise.resolve(`${MODULE}`).then(s => require(s));

let i = 0;
Promise.resolve(`${i++}`).then(s => require(s));

Promise.resolve(`${fn()}`).then(s => require(s));

async () => Promise.resolve(`${await "x"}`).then(s => require(s));

function* f() {
  Promise.resolve(`${yield "x"}`).then(s => require(s));
}
