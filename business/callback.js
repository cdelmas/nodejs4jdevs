const request = require('request');

// TODO: search two things and combine the result

const search = (term, r, cb) => {
  request({
    url: `https://www.qwant.com/?q=${term}%20${r}&t=all`,
    json: true,
  }, (err, res, body) => {
    cb(err, body);
  });
};

module.exports = { search };
