import(MODULE);

let i = 0;
import(i++);

import(fn());

async () => import(await "x");

function* f() { import(yield "x"); }
