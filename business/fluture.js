const Future = require('fluture');
const request = require('request-promise-native');

const search = (term, r) =>
  Future.encaseP(request)(`https://www.qwant.com/?q=${term}%20${r}&t=all`);

module.exports = { search };
