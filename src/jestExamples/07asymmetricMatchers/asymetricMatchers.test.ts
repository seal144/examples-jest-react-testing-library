import random from '../../utils/random';
import { fetchBtcRate } from '../../api/fetchBtcRate';

// asymmetricMatchers can not be used with toBe
describe('asymmetricMatchers', () => {
  // expect.anything() match to any value but null or undefined
  test('anything()', () => {
    expect(random(1, 6)).toEqual(expect.anything());
  });

  test('stringContaining()', async () => {
    const string = String(random(1, 1)) + ' is the first natural number';
    expect(string).toEqual(expect.stringContaining('1'));
    expect(string).toEqual(expect.not.stringContaining('2'));
  });

  test('arrayContaining()', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers).toEqual(expect.arrayContaining([2, 3, 4]));
    expect(numbers).toEqual(expect.not.arrayContaining(['b', 'c', 'd']));
  });

  test('objectContaining()', async () => {
    const result = await fetchBtcRate('pln');
    expect(result).toEqual(expect.objectContaining({ status: 'Ok' }));
  });

  test('stringMatching', async () => {
    const string = 'raf@gmail.com';
    expect(string).toEqual(expect.stringMatching(/@gmail|@yahoo/));
    expect(string).toEqual(expect.not.stringMatching(/@icloud/));
  });
});
