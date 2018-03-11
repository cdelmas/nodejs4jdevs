const fs = require('fs');
const EventEmitter = require('events');

class EventSource extends EventEmitter {}

const source = new EventSource();
const registerListener = (eventName, from) => {
  source.on(eventName, (data) => {
    console.log(`Received ${data} from ${from}`);
  });
};

console.log(`max listeners for a single event: ${source.getMaxListeners()}`);
registerListener('ntdata', 'nextTick 1');
registerListener('ntdata', 'nextTick 2');
registerListener('ntdatacb', 'nextTick registered callback 1');
registerListener('ntdatacb', 'nextTick registered callback 2');
registerListener('ntdatacb', 'nextTick registered callback 3');
registerListener('ntdatacb', 'nextTick registered callback 4');
registerListener('ntdatacb', 'nextTick registered callback 5');
registerListener('ntdatacb', 'nextTick registered callback 6');
registerListener('ntdatacb', 'nextTick registered callback 7');
registerListener('ntdatacb', 'nextTick registered callback 8');
registerListener('ntdatacb', 'nextTick registered callback 9');
registerListener('ntdatacb', 'nextTick registered callback 10');
registerListener('ntdatacb', 'nextTick registered callback 11');
registerListener('ntdatacb', 'nextTick registered callback 12');
registerListener('todata', 'timeout');
registerListener('todatacb', 'timeout registered callback');
registerListener('immdata', 'immediate');
registerListener('immdatacb', 'immediate registered callback');
registerListener('maindata', 'main');

const readFile = (event, message) => {
  fs.readFile('index.js', () => {
    console.log(message);
    source.emit(event, 'cb called');
  });
};

console.log('not a callback 1');
readFile('finished reading the file from main');
source.emit('maindata', 'main1');
setTimeout(() => {
  console.log('timeout: start');
  source.emit('todata', 'to');
  readFile('todatacb', 'finished reading the file from timeout');
  console.log('timeout: end');
}, 0);
setImmediate(() => {
  console.log('immediate: start');
  source.emit('immdata', 'imm');
  readFile('immdatacb', 'finished reading the file from immediate');
  console.log('immediate: end');
});
process.nextTick(() => {
  console.log('nextTick: start');
  source.emit('ntdata', 'nt');
  readFile('ntdatacb', 'finished reading the file from nextTick');
  console.log('nextTick: end');
});
console.log('not a callback 2');
source.emit('maindata', 'main2');
