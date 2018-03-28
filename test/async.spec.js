const request = require('request');
const { business } = require('../business/async');

jest.mock('request');

test('should do the stuff', async () => {
  request.mockReturnValueOnce(Promise.resolve({ data: 42 }));
  request.mockReturnValueOnce(Promise.resolve({ data2: 666 }));
  return expect(await business(11))
    .toMatchObject({
      data: 42,
      data2: 666,
    });
});

test('should fail with an error', async () => {
  expect.assertions(1);
  request.mockReturnValueOnce(Promise.reject(new Error('oops')));
  try {
    await business(666);
  } catch (e) {
    return expect(e).toHaveProperty('message', 'oops');
  }
  return 0; // must return something anyway
});
