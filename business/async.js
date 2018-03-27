const request = require('request-promise-native');

// TODO: search two things and combine the result

const search = (term, r) =>
  request({
    url: `https://www.qwant.com/?q=${term}%20${r}&t=all`,
    json: true,
  });

module.exports = { search };
