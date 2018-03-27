const Future = require('fluture');
const request = require('request-promise-native');

// TODO: search two things and combine the result

const search = (term, r) =>
  Future.encaseP(request)(`https://www.qwant.com/?q=${term}%20${r}&t=all`);

module.exports = { search };
