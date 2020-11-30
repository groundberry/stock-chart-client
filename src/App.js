import React, { Component } from "react";
import SymbolForm from "./SymbolForm";
import StockChart from "./StockChart";
import RangeButtons from "./RangeButtons";
import { fetchData } from "./utils";
import "@progress/kendo-theme-material/dist/all.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: "",
      range: "1m",
      stockData: {},
    };

    this.handleChangeSymbol = this.handleChangeSymbol.bind(this);
    this.handleClickRange = this.handleClickRange.bind(this);
    this.updateStockData = this.updateStockData.bind(this);
  }

  render() {
    const { symbol, range, stockData } = this.state;

    const company = stockData.quote ? stockData.quote.companyName : undefined;

    const chartData = stockData.chart ? stockData.chart : undefined;

    return (
      <div className="App">
        <header className="App-header">
          <SymbolForm value={symbol} onChange={this.handleChangeSymbol} />
          <RangeButtons value={range} onClick={this.handleClickRange} />
        </header>
        {symbol && company && chartData && (
          <div className="App-chart">
            <StockChart symbol={symbol} company={company} data={chartData} />
            <p>
              Data provided for free by{" "}
              <a href="https://iextrading.com/developer/">IEX</a>. View{" "}
              <a href="https://iextrading.com/api-exhibit-a/">
                IEX’s Terms of Use
              </a>
              .
            </p>
          </div>
        )}
      </div>
    );
  }

  handleChangeSymbol(symbol) {
    this.setState({ symbol }, this.updateStockData);
  }

  handleClickRange(range) {
    this.setState({ range }, this.updateStockData);
  }

  async updateStockData() {
    const { symbol, range } = this.state;

    if (!symbol || !range) {
      return;
    }

    try {
      const stockData = await fetchData(symbol, range);
      this.setState({ stockData });
    } catch (err) {
      console.error("Could not fetch stock data:", err);
    }
  }
}

export default App;
