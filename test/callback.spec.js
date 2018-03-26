const request = require('request');
const { search } = require('../business/callback.js');

jest.mock('request');

test('should give an error', (done) => {
  request.mockImplementationOnce((url, cb) => cb(new Error('some http error')));
  search('callback hell', 42, (err, res, body) => {
    expect(err).toBeDefined();
    expect(res).toBeUndefined();
    expect(body).toBeUndefined();
    done();
  });
});

// do not forget the case where statusCode !== 2xx

test('should do the stuff', (done) => {
  request.mockImplementationOnce((url, cb) => cb(null, { statusCode: 200 }, { data: 42 }));
  search('callback hell', 42, (err, body) => {
    expect(err).toBeNull();
    expect(body).toMatchObject({
      data: 42,
    });
    done();
  });
});
