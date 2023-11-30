import { fetchBtcPlnRate } from './fetchBtcPlnRate';

// geting the average of the highest and lowest price returned from a crypto exchange
export const getAverageBtcPlnPrice = async (): Promise<number | null> => {
  const data = await fetchBtcPlnRate();
  if (data?.stats) {
    const lowestRate24h = Number(data.stats.l);
    const highestRate24h = Number(data.stats.h);
    return Math.round(((lowestRate24h + highestRate24h) / 2) * 100) / 100;
  }
  return null;
};

// example "Ok" data
// stats:
//   h: "153451.72"
//   l: "148050"
//   m: "BTC-PLN"
//   r24h: "148921.12"
//   v: "35.14772654"
// status: "Ok"