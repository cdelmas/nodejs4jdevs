
Promise.resolve({ then: () => console.log('Hello!') })
  .then(() => console.log('The end'));
