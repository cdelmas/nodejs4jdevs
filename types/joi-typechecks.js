const R = require('ramda');
const Joi = require('joi');

const schema = Joi.object().keys({
  a: Joi.string().required(),
  b: Joi.string(),
});

// Return result.

const obj = {
  a: 'a',
  b: 'b',
};

const val = R.pick(['a'], obj);
const result = Joi.validate(obj, schema);
const result2 = Joi.validate(val, schema);

console.log(`Results: obj->${JSON.stringify(result)}; val->${JSON.stringify(result2)}`);

console.log(JSON.stringify(obj));
console.log(JSON.stringify(val));
