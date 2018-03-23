const EventEmitter = require('events');

class Notifier extends EventEmitter {}

const notifier = new Notifier();

const doTheThingSync = (data) => {
  console.log(`Important business code here: ${data}`);
};

const business = async (id, data) => {
  notifier.emit('start', new Date());
  console.log('Starting an heavy calculation...');
  doTheThingSync(data);
  console.log('Finished that heavy calculation...');  
  notifier.emit('end', new Date());
  return 42;
};

const exp = {
  business,
  on: (event, cb) => {
    notifier.on(event, cb);
  },
};

exp.on('start', (d) => {
  setImmediate(() => {
    console.log(`start -> ${d}`);
  });
});

exp.on('end', (d) => {
  setImmediate(() => {
    console.log(`end -> ${d}`);
  });
});

const usage = async () => {
  console.log(`${await exp.business(13, 'some data')}`);
};

usage();
