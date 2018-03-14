
new Promise((resolve, reject) => {
  reject(new Error('HANDLE THIS!!'));
}).then(() => {
  console.log('never seen');
});

/*process.on('unhandledRejection', () => {
  console.log('Ouf, on l\'a finalement attrapée');
});
*/