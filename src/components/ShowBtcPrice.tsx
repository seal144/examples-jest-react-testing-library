import React, { useEffect, useState } from 'react';
import { getAverageBtcPrice } from '../api/getAverageBtcPrice';
import { AvailableCurrencies } from '../types/types';

interface ShowBtcPriceProps {
  currency: AvailableCurrencies;
}

const ShowBtcPrice = ({ currency }: ShowBtcPriceProps) => {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);

  useEffect(() => {
    const getBtcPrice = async () => {
      const averageBtcPrice = await getAverageBtcPrice(currency);
      setBtcPrice(averageBtcPrice);
    };
    getBtcPrice();
  }, []);

  return (
    <div>
      {btcPrice && (
        <p>
          BTC-{currency.toUpperCase()}: {btcPrice} {currency.toUpperCase()}
        </p>
      )}
    </div>
  );
};

export default ShowBtcPrice;
