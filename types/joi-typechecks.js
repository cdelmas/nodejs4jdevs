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

const invalid = {
  b: 12,
};

const val = R.pick(['a'], obj);
const joiOptions = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};
const result = Joi.validate(obj, schema, joiOptions);
const result2 = Joi.validate(val, schema, joiOptions);
const result3 = Joi.validate(invalid, schema, joiOptions);

console.log(`Results: obj->${JSON.stringify(result)}; 
  val->${JSON.stringify(result2)}; 
  invalid->${JSON.stringify(result3)}`);
