const Future = require('fluture');
const request = require('request-promise-native');
const { combine } = require('./util.js');
const { curry2 } = require('sanctuary');

const search = (term, r) =>
  Future.encaseP(request)(`https://www.qwant.com/?q=${term}%20${r}&t=all`);

const business = r =>
  Future.of(curry2(combine))
    .ap(search('weapons', r))
    .ap(search('zombie survive', r));

module.exports = { business };
