import { helloWorld, goodbyeMoon } from '.';

describe('helloWorld()', () => {
  test('helloWorld()', () => {
    const result = helloWorld();
    expect(result).toBe('Hello world!');
  });
});

describe('goodbyeMoon()', () => {
  test('goodbyeMoon()', () => {
    const result = goodbyeMoon();
    expect(result).toBe('Goodbye moon!');
  });
});
