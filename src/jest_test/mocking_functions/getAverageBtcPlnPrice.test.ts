import { getAverageBtcPlnPrice } from './getAverageBtcPlnPrice';
import * as fetchBtcPlnExchangeModule from './fetchBtcPlnExchange';

//mockowanie danych które są zwracane a api
jest.mock('./fetchBtcPlnExchange');

describe('getAverageBtcPlnPrice', () => {
  test('returns average price when data is available', async () => {
    const mockFetchBtcPlnExchange = jest.spyOn(fetchBtcPlnExchangeModule, 'fetchBtcPlnExchange');
    mockFetchBtcPlnExchange.mockResolvedValue({
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
    const mockFetchBtcPlnExchange = jest.spyOn(fetchBtcPlnExchangeModule, 'fetchBtcPlnExchange');
    mockFetchBtcPlnExchange.mockResolvedValue({
      status: 'Fail',
      errors: ['Some error message'],
    });

    const result = await getAverageBtcPlnPrice();

    expect(result).toBeNull();
  });
});