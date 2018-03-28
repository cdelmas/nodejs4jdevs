const request = require('request-promise-native');
const { combine } = require('./util.js');

const search = (term, r) =>
  request({
    url: `https://www.qwant.com/?q=${term}%20${r}&t=all`,
    json: true,
  });

const business = r =>
  search('promises', r)
    .then(data => Promise.all([data, search('hell', r)]))
    .then(([data, data2]) => combine(data, data2));

module.exports = { business };
