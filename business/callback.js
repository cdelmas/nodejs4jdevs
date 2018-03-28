const request = require('request');
const { combine } = require('./util');

const search = (term, r, cb) => {
  request({
    url: `https://www.qwant.com/?q=${term}%20${r}&t=all`,
    json: true,
  }, (err, res, body) => {
    cb(err, body);
  });
};

const business = (r, cb) => {
  search('callback', r, (err, data) => {
    if (!err) {
      search('hell', r, (err2, data2) => {
        if (err2) {
          cb(err2);
        } else {
          cb(null, combine(data, data2));
        }
      });
    } else {
      cb(err);
    }
  });
};

module.exports = { business };
