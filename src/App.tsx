import React, { useState, useEffect } from 'react';
import './App.css';
import { getAverageBtcPlnPrice } from './jestTest/getAverageBtcPlnPrice';

function App() {
  const [btcPln, setBtcPln] = useState<number | null>(null);

  // example of fetching data after component reloads (not related to testing)
  useEffect(() => {
    const getBtcPln = async () => {
      const averageBtcPlnPrice = await getAverageBtcPlnPrice();
      setBtcPln(averageBtcPlnPrice);
    };
    getBtcPln();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>EXAMPLE: Jest and Testing Library</h3>
        {btcPln && <p>BTC-PLN: {btcPln}PLN</p>}
      </header>
    </div>
  );
}

export default App;
