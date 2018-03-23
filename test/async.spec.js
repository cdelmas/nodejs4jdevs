
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const asyncId = async d => d;

test('asynchronous test', async () => {
  const result = await asyncId(42);
  expect(result).toBe(42);
});
