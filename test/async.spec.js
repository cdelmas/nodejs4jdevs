const request = require('request');
const { search } = require('../business/async');

jest.mock('request');

test('should do the stuff', async () => {
  request.mockReturnValueOnce(Promise.resolve({ some: 'data' }));
  return expect(await search('promises', 42))
    .toMatchObject({ some: 'data' });
});

test('should fail with an error', async () => {
  expect.assertions(1);
  request.mockReturnValueOnce(Promise.reject(new Error('oops')));
  try {
    await search('promises', 666);
  } catch (e) {
    return expect(e).toHaveProperty('message', 'oops');
  }
  return 0; // must return something anyway
});
