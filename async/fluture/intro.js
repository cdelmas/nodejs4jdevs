const { node, encase } = require('fluture');
const fs = require('fs');

const getPackageName = file =>
  node((done) => {
    fs.readFile(file, 'utf8', done);
  })
    .chain(encase(JSON.parse))
    .map(x => x.name);

getPackageName('package.json') // nothing run yet
  .fork(console.error, console.log);

