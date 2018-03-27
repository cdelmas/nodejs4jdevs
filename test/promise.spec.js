const request = require('request');
const { search } = require('../business/promise');

jest.mock('request');

test('should do the stuff', () => {
  request.mockReturnValueOnce(Promise.resolve({ some: 'data' }));
  return expect(search('promises', 42))
    .resolves.toMatchObject({ some: 'data' });
});

test('should fail with an error', () => {
  request.mockReturnValueOnce(Promise.reject(new Error('oops')));
  return expect(search('promises', 666))
    .rejects.toHaveProperty('message', 'oops');
});
