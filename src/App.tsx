import React from 'react';
import './App.css';
import Title from './components/Title';
import ShowBtcPrice from './components/ShowBtcPrice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title text="EXAMPLE: Jest and Testing Library" />
        <ShowBtcPrice currency="usd" />
        <ShowBtcPrice currency="eur" />
        <ShowBtcPrice currency="pln" />
      </header>
    </div>
  );
}

export default App;
