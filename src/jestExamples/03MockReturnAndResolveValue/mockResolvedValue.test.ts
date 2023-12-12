import { getAverageBtcPrice } from '../../api/getAverageBtcPrice';
import { fetchBtcRate } from '../../api/fetchBtcRate';

jest.mock('../../api/fetchBtcRate');

//testing getAverageBtcPrice without invoking fetchBtcRate
describe('getAverageBtcPrice', () => {
  test('returns average price when data is available', async () => {
    (fetchBtcRate as jest.Mock).mockResolvedValue({
      status: 'Ok',
      stats: {
        h: '150000.30',
        l: '144000.90',
        m: 'BTC-PLN',
        r24h: '148921.12',
        v: '35.14772654',
      },
    });

    const result = await getAverageBtcPrice('pln');

    expect(fetchBtcRate).toHaveBeenCalled();
    expect(result).toBe(147000.6); // (150000.30 + 144000.90) / 2
  });

  test('returns null when data is not available', async () => {
    (fetchBtcRate as jest.Mock).mockResolvedValue({
      status: 'Fail',
      errors: ['Some error message'],
    });

    const result = await getAverageBtcPrice('pln');

    expect(result).toBeNull();
  });

  test('should handle errors', async () => {
    (fetchBtcRate as jest.Mock).mockRejectedValue(new Error('Mocked error'));

    try {
      await getAverageBtcPrice('pln');
    } catch (error) {
      // @ts-ignore
      // eslint-disable-next-line
      expect(error.message).toBe('Mocked error');
    }
  });
});
