
Promise.race([
  Promise.resolve('Done.'),
  new Promise(res => setTimeout(res, 20000, 1)),
])
  .then(console.log)