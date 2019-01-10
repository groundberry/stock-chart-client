import React, { Component } from 'react';
import StockChartContainer from './StockChartContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          StockChart
        </header>
        <StockChartContainer />
      </div>
    );
  }
}

export default App;
