const Future = require('fluture');

const f = (r, cb) => {
  console.log('Executing f');
  cb(null, r);
};

const p = (r) => {
  console.log('Executing p');  
  return Promise.resolve(r);
};

const a = async (r) => {
  console.log('Executing a');
  return r;
};

const consume = async () => {
  f(5, (err, r) => {
      f(6, (err2, d) => { // do not clash names!
        console.log(`Result: ${r + d}`);
      });
  });

  p(5)
    .then((r) => p(6))
    .then((d) => { /* lost r... */ })
    .catch(err => {/* do something */});

  // TODO: add exceptions

  Promise.all([p(6), p(5)])
    .then(arr => {
      console.log(`Promise all: ${arr.reduce((a,b) => a+b, 0)}`);
    });

  try {
    const r = await a(5);
    const d = await a(6);
    console.log(`Sequential awaits: ${r + d}`);
  } catch(e) {
    /* do something */
  }

  try {
    const res = await a(5) + await a(6); // parallel style => TODO: add a blocking option to a to show the parallel
    // TODO copy this code, then throw an exception from here and from the awaited functions
    console.log(`Parallel awaits: ${res}`);
  } catch(e) {
    /* do something */
  }


};

consume();
