const request = require('request-promise-native');
const { combine } = require('./util.js');

const search = async (term, r) =>
  request({
    url: `https://www.qwant.com/?q=${term}%20${r}&t=all`,
    json: true,
  });

const business = async r =>
  combine(
    await search('weapons', r),
    await search('zombie survive', r),
  );

module.exports = { business };
