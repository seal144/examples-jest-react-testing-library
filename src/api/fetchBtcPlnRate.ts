export interface zondaRes {
  status: 'Ok' | 'Fail';
  stats?: {
    h: string;
    l: string;
    m: string;
    r24h: string;
    v: string;
  };
  errors?: string[];
}

//fetching the btc-pln rate from the cryptocurrency exchange;
export const fetchBtcPlnRate = async (): Promise<zondaRes | undefined> => {
  try {
    const response = await fetch('https://api.zondacrypto.exchange/rest/trading/stats/btc-pln');
    const data: zondaRes = await response.json();
    if (data.status === 'Fail') {
      if (data.errors) {
        throw new Error(data.errors.join(' '));
      }
      throw new Error('unknown error');
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

// example "Ok" data
// stats:
//   h: "153451.72"
//   l: "148050"
//   m: "BTC-PLN"
//   r24h: "148921.12"
//   v: "35.14772654"
// status: "Ok"
