const { business } = require('../business/fluture');
const request = require('request-promise-native');

jest.mock('request');

test('should fail with an error', (done) => {
  request.mockReturnValueOnce(Promise.reject(new Error('oops')));
  const future = business(2);
  future.fork((err) => {
    expect(err).toHaveProperty('message', 'oops');
    done();
  }, () => {
    done(new Error('fail'));
  });
});

test('should do the stuff', (done) => {
  request.mockReturnValueOnce(Promise.resolve({ data: 42 }));
  request.mockReturnValueOnce(Promise.resolve({ data2: 666 }));
  const future = business(2);
  future.fork(() => {}, (d) => {
    expect(d).toMatchObject({
      data: 42,
      data2: 666,
    });
    done();
  });
});
