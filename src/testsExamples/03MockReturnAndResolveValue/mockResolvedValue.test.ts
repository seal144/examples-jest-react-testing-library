import { getAverageBtcPlnPrice } from '../getAverageBtcPlnPrice';
import { fetchBtcPlnRate } from '../fetchBtcPlnRate';

jest.mock('../fetchBtcPlnRate');

//testing getAverageBtcPlnPrice without invoking fetchBtcPlnRate
describe('getAverageBtcPlnPrice', () => {
  test('returns average price when data is available', async () => {
    (fetchBtcPlnRate as jest.Mock).mockResolvedValue({
      status: 'Ok',
      stats: {
        h: '150000.30',
        l: '144000.90',
        m: 'BTC-PLN',
        r24h: '148921.12',
        v: '35.14772654',
      },
    });

    const result = await getAverageBtcPlnPrice();

    expect(result).toBe(147000.6); // (150000.30 + 144000.90) / 2
  });

  test('returns null when data is not available', async () => {
    (fetchBtcPlnRate as jest.Mock).mockResolvedValue({
      status: 'Fail',
      errors: ['Some error message'],
    });

    const result = await getAverageBtcPlnPrice();

    expect(result).toBeNull();
  });

  test('should handle errors', async () => {
    (fetchBtcPlnRate as jest.Mock).mockRejectedValue(new Error('Mocked error'));

    try {
      await getAverageBtcPlnPrice();
    } catch (error) {
      // @ts-ignore
      // eslint-disable-next-line
      expect(error.message).toBe('Mocked error');
    }
  });
});
