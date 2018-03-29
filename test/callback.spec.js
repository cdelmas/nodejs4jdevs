const request = require('request');
const { business } = require('../business/callback.js');

jest.mock('request');

test('should give an error', (done) => {
  request.mockImplementationOnce((url, cb) => cb(new Error('some http error')));
  business(13, (err, body) => {
    expect(err).toBeDefined();
    expect(body).toBeUndefined();
    done();
  });
});

test('should do the stuff', (done) => {
  request
    .mockImplementationOnce((url, cb) => cb(null, { statusCode: 200 }, { data: 42 }))
    .mockImplementationOnce((url, cb) => cb(null, { statusCode: 200 }, { data2: 666 }));
  business(33, (err, body) => {
    expect(err).toBeNull();
    expect(body).toMatchObject({
      data: 42,
      data2: 666,
    });
    done();
  });
});
