
const businessCode = (i, cb) => {
  if (i % 2 === 0) {
    cb(new Error('even'));
  } else {
    cb(null, i);
  }
};

test('should give an error', (done) => {
  businessCode(666, (err) => {
    expect(err).toBeDefined();
    expect(err).toHaveProperty('message', 'even');
    done();
  });
});

test('should do the stuff', (done) => {
  businessCode(731, (err, r) => {
    expect(err).toBeNull();
    expect(r).toBe(731);
    done();
  });
});
