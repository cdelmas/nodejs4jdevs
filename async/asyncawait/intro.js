
const a = async (r) => {
  console.log('Executing a');
  return r;
};

const consume = async () => {
  try {
    const r = await a(5);
    const d = await a(6);
    console.log(`Sequential awaits: ${r + d}`);
  } catch (e) {
    /* do something */
  }

  try {
    const res = await a(5) + await a(6); // parallel style
    console.log(`Parallel awaits: ${res}`);
  } catch (e) {
    /* do something */
  }
};

consume();
