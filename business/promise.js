const request = require('request-promise-native');
const { combine } = require('./util.js');

const search = (term, r) =>
  request({
    url: `https://www.qwant.com/?q=${term}%20${r}&t=all`,
    json: true,
  });

const business = r =>
  Promise.all([search('zombie survive', r), search('weapons', r)])
    .then(([data, data2]) => combine(data, data2));

module.exports = { business };
