
const fn = () => {
  for (var i = 0; i < 5; i+=1) {
    setTimeout(() => {
      console.log(`${i}`);
    }, 0);
  }
};

fn(); // guess what is printed
console.log('end');
