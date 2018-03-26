
const business = async (n) => {
  if (n % 2 === 0) {
    return n;
  }
  throw new Error('too odd for me');
};

test('should do the stuff', async () => {
  expect(await business(2)).toBe(2);
});

test('asynchronous test', async () => {
  await expect(business(7)).rejects.toMatchObject({
    message: 'too odd for me',
  });
});
