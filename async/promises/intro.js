
const p = (r) => {
  console.log('Executing p');
  return Promise.resolve(r);
};

const consume = () => {
  p(5)
    .then(r => p(6))
    .then((d) => { /* lost r... */ })
    .catch((err) => { /* do something */ });

  Promise.all([p(6), p(5)])
    .then((arr) => {
      console.log(`Promise all: ${arr.reduce((a, b) => a + b, 0)}`);
    });
};

consume();
