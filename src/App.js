import React from 'react';

import './App.css';
import ApexChart from './Chart';
import CircleChart from './CircleChart';
import Monochrome from './Monochrome';


function App() {
  return (
    <div className="App">
      <CircleChart />
      <Monochrome />
      <ApexChart  />
    </div>
  );
}

export default App;
