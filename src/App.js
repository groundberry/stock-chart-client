import React, { Component } from "react";
import Form from "./Form";
import StockChartContainer from "./StockChartContainer";
import { fetchStocksData } from "./utils";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      stocksData: {},
      symbol: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const symbol = evt.target.value;

    this.setState({
      symbol: symbol
    });

    fetchStocksData(symbol).then(data => {
      this.setState({ stocksData: data });
    });
  }

  render() {
    const { symbol, stocksData } = this.state;

    const company = stocksData[symbol]
      ? stocksData[symbol].quote.companyName
      : "";

    return (
      <div className="App">
        <header className="App-header">
          <h1>StockChart</h1>
          <Form onChange={this.handleChange} />
        </header>
        {symbol && <StockChartContainer symbol={symbol} company={company} />}
      </div>
    );
  }
}

export default App;
