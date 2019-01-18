import React, { Component } from "react";
import SymbolForm from "./SymbolForm";
import StockChart from "./StockChart";
import RangeButtons from "./RangeButtons";
import { fetchStocksData } from "./utils";
import "@progress/kendo-theme-material/dist/all.css";
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
    this.handleClickRange = this.handleClickRange.bind(this);
    this.updateStockData = this.updateStockData.bind(this);
  }

  handleChangeSymbol(symbol) {
    this.setState({ symbol }, this.updateStockData);
  }

  handleClickRange(range) {
    this.setState({ range }, this.updateStockData);
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
          <SymbolForm
            value={symbol}
            onChange={this.handleChangeSymbol}
            onSubmit={this.handleSubmitSymbol}
          />
          <RangeButtons value={range} onClick={this.handleClickRange} />
        </header>
        {symbol && company && stockData && (
          <div className="App-chart">
            <StockChart
              symbol={symbol}
              company={company}
              stockData={stockData}
            />
            <p>
              Data provided for free by <a href="https://iextrading.com/developer/">IEX</a>. View <a href="https://iextrading.com/api-exhibit-a/">IEX’s Terms of Use</a>.
            </p>
          </div>
        )}
      </div>
    );
  }

  updateStockData() {
    const { symbol, range } = this.state;

    fetchStocksData(symbol, range).then(stocksData => {
      this.setState({ stocksData });
    });
  }
}

export default App;
