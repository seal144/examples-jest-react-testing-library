import { fetchBtcPlnRate } from '../fetchBtcPlnRate';

//example of testing acync function
describe('fetchBtcPlnRate', () => {
  test('fetch resolves with data', async () => {
    const result = await fetchBtcPlnRate();
    expect(result).toBeDefined();
    expect(result).toHaveProperty('status');
  });
});
