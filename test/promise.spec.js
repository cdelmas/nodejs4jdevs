
const business = d => new Promise((resolve, reject) => {
  if (d > 400) {
    resolve(d);
  } else {
    reject(new Error('not enough'));
  }
});

test('should do the stuff', () =>
  expect(business(777)).resolves.toBe(777));

test('should fail with an error', () =>
  expect(business(399)).rejects.toHaveProperty('message', 'not enough'));
