const request = require('request');
const { business } = require('../business/promise');

jest.mock('request');

test('should do the stuff', () => {
  request.mockReturnValueOnce(Promise.resolve({ data: 42 }));
  request.mockReturnValueOnce(Promise.resolve({ data2: 666 }));
  return expect(business(33))
    .resolves.toMatchObject({
      data: 42,
      data2: 666,
    });
});

test('should fail with an error, not idiomatic', (done) => {
  request.mockReturnValueOnce(Promise.reject(new Error('oops')));
  request.mockReturnValueOnce(Promise.resolve({ data2: 666 }));
  business(12)
    .then(() => done(new Error('fail')))
    .catch((err) => {
      expect(err).toHaveProperty('message', 'oops');
      done();
    });
});

test('should fail with an error', () => {
  request.mockReturnValueOnce(Promise.reject(new Error('oops')));
  request.mockReturnValueOnce(Promise.resolve({ data2: 666 }));
  return expect(business(12))
    .rejects.toHaveProperty('message', 'oops');
});
