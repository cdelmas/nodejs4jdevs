

const f = (r, cb) => {
  console.log('Executing f');
  cb(null, r);
};

const consume = () => {
  f(5, (err, r) => {
    if (err) {
      console.error('something bad happened');
    } else {
      f(6, (err2, d) => { // do not clash names!
        if (err2) {
          console.error('something bad happened');          
        } else {
          console.log(`Result: ${r + d}`);
        }
      });
    }
  });
};

consume();
