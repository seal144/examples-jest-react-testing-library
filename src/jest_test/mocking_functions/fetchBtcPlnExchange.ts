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

//pobieranie kursu btc-pln z giełdy krypto;
export const fetchBtcPlnExchange = async (): Promise<zondaRes | undefined> => {
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
