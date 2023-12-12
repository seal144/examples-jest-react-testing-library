import { fetchBtcRate } from './fetchBtcRate';
import { AvailableCurrencies } from '../types/types';

// geting the average of the highest and lowest price returned from a crypto exchange
export const getAverageBtcPrice = async (currency: AvailableCurrencies): Promise<number | null> => {
  const data = await fetchBtcRate(currency);
  if (data?.stats) {
    const lowestRate24h = Number(data.stats.l);
    const highestRate24h = Number(data.stats.h);
    return Math.round(((lowestRate24h + highestRate24h) / 2) * 100) / 100;
  }
  return null;
};
