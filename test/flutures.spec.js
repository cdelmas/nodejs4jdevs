
const Future = require('fluture');
const request = require('request-promise-native');

const compute = (a, c) => {
  const b = Math.floor(a + (c * 100));
  return Future.encaseP(request)(`https://www.qwant.com/?q=fluture%20js%20${b}&t=all`);
};

test('future as pure data, no side effect, no mocks', () => {
  const future = compute(35, Math.random());
  expect(future).toBeInstanceOf(Future);
  expect(future._a).toMatch(/.*qwant\.com.*/);
  expect(future._fn).toHaveProperty('get');
});
