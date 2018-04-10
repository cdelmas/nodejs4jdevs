const EventEmitter = require('events');

class Notifier extends EventEmitter {}

const notifier = new Notifier();

const lookForWeapons = (map) => {
  console.log(`Looking for weapons on map: ${map}`);
};

class Zombie {
  constructor(strength) {
    this.strength = strength;
  }

  hit(damage) {
    console.log(`Hit zombie: ${damage}/${this.strength}`);
  }
}

const walkAround = async (chance, map) => {
  notifier.emit('zombie!', new Zombie(13));
  console.log('Starting to look for weapons...');
  lookForWeapons(map);
  console.log('Finished!');
  notifier.emit('zombie!', new Zombie(40));
  return 42;
};

const exp = {
  walkAround,
  on: (event, cb) => {
    notifier.on(event, cb);
  },
};

exp.on('zombie!', (z) => {
  if (z.strength < 20) {
    z.hit(30);
  } else {
    setImmediate(() => {
      z.hit(100);
    });
  }
});

const world = async () => {
  console.log(`${await exp.walkAround(13, 'a map')}`);
};

world();
