import React, { Component } from "react";
import SymbolForm from "./SymbolForm";
import StockChart from "./StockChart";
import RangeButtons from "./RangeButtons";
import { fetchStocksData } from "./utils";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stocksData: {},
      symbol: "",
      range: "1m"
    };

    this.handleChangeSymbol = this.handleChangeSymbol.bind(this);
    this.handleSubmitSymbol = this.handleSubmitSymbol.bind(this);
    this.handleClickRange = this.handleClickRange.bind(this);
  }

  handleChangeSymbol(symbol) {
    this.setState({ symbol });
  }

  handleSubmitSymbol() {
    const { symbol, range } = this.state;

    fetchStocksData(symbol, range).then(stocksData => {
      this.setState({ stocksData });
    });
  }

  handleClickRange(range) {
    const { symbol } = this.state;

    this.setState({ range });

    fetchStocksData(symbol, range).then(stocksData => {
      this.setState({ stocksData });
    });
  }

  render() {
    const { symbol, range, stocksData } = this.state;

    const company = stocksData[symbol]
      ? stocksData[symbol].quote.companyName
      : undefined;

    const stockData = stocksData[symbol] ? stocksData[symbol].chart : undefined;

    return (
      <div className="App">
        <header className="App-header">
          <h1>StockChart</h1>
          <SymbolForm
            value={symbol}
            onChange={this.handleChangeSymbol}
            onSubmit={this.handleSubmitSymbol}
          />
        </header>
        {symbol && company && stockData && (
          <div className="App-chart-container">
            <RangeButtons value={range} onClick={this.handleClickRange} />
            <StockChart
              symbol={symbol}
              company={company}
              stockData={stockData}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
