const Joi = require('joi');

const zombie = Joi.object().keys({
  name: Joi.string().required(),
  strength: Joi.number().integer(),
  debility: Joi.number().integer().required(),
});

const realZombie = {
  name: 'zomb',
  strength: 12,
  debility: 100,
};

const human = {
  name: 'bob',
  smart: true,
};

const joiOptions = {
  abortEarly: false,
  allowUnknown: false,
  stripUnknown: true,
};
const result = Joi.validate(realZombie, zombie, joiOptions);
const result2 = Joi.validate(human, zombie, joiOptions);

console.log(`Results: realZombie->${JSON.stringify(result)}; 
  human->${JSON.stringify(result2)};`);
