import React, { useState, useEffect } from 'react';
import './App.css';
import { getAverageBtcPlnPrice } from './testsExamples/getAverageBtcPlnPrice';
import Title from './components/Title';

function App() {
  const [btcPln, setBtcPln] = useState<number | null>(null);

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
        <Title text="EXAMPLE: Jest and Testing Library" />
        {btcPln && <p>BTC-PLN: {btcPln}PLN</p>}
      </header>
    </div>
  );
}

export default App;
