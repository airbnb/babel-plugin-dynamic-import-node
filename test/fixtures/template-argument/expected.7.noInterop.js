Promise.resolve().then(() => require(`1`));
Promise.resolve(`${tag`2`}`).then(s => require(s));
Promise.resolve(`3-${MODULE}`).then(s => require(s));
