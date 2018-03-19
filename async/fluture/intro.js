const Future = require('fluture');

const f = (r) => {
  console.log(`Executing f(${r})`);
  return Future.of(r);
};

const consume = () => {
  Future.of(x => y => x + y)
    .ap(f(5))
    .ap(f(6))
    .fork(console.error, console.log);

  f(5)
    .chain(i => f(7 + i))
    .fork(console.error, console.log);
};

consume();
