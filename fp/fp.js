const R = require('ramda');

const add = (a, b) => a + b;
const mult = (a, b) => a * b;

const add4 = R.curry(add)(4);
const mult6 = R.curry(mult)(6);

console.log(R.compose(add4, mult6)(5));
