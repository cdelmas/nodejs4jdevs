const Joi = require('joi');
const { Left, Right, reduce } = require('sanctuary');

const joiOptions = {
  abortEarly: false,
  allowUnknown: false,
  stripUnknown: true,
};

class ValidationError extends Error {
  constructor(err) {
    const message = reduce(acc => d => `${acc} ; ${d.message}`, '', err.details);
    super(message);
    this.details = err.details;
  }
}

const zombieSpec = Joi.object().keys({
  name: Joi.string().required(),
  strength: Joi.number().integer(),
  debility: Joi.number().integer().required(),
});

const realZombie = {
  name: 'zomb',
  strength: 12,
  debility: 100,
  dirty: true,
};

const human = {
  name: 'bob',
  smart: true,
};

const checkZombie = (z) => {
  const result = Joi.validate(z, zombieSpec, joiOptions);
  return result.error ?
    Left(new ValidationError(result.error)) :
    Right(result.value);
};

console.log(`realZombie: ${checkZombie(realZombie)}`);
console.log(`human: ${checkZombie(human)}`);

