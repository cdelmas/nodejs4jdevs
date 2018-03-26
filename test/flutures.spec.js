const Future = require('fluture');
const request = require('request-promise-native');

const search = (term, r) =>
  Future.encaseP(request)(`https://www.qwant.com/?q=${term}%20${r}&t=all`);

test('future as pure data, no side effect, no mocks', () => {
  const future = search('fluture js', Math.random());
  expect(future).toBeInstanceOf(Future);
  expect(future._a).toMatch(/.*qwant\.com.*/); // eslint-disable-line no-underscore-dangle
  expect(future._fn).toHaveProperty('get'); // eslint-disable-line no-underscore-dangle
});
