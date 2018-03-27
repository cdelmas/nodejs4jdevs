const Future = require('fluture');
const { search } = require('../business/fluture');

test('future as pure data, no side effect, no mocks', () => {
  const future = search('fluture js', Math.random());
  expect(future).toBeInstanceOf(Future);
  expect(future._a).toMatch(/.*qwant\.com.*/); // eslint-disable-line no-underscore-dangle
  expect(future._fn).toHaveProperty('get'); // eslint-disable-line no-underscore-dangle
});
