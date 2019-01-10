import React, { Component } from "react";
import Form from "./Form";
import StockChartContainer from "./StockChartContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      companyName: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    console.log(evt.target.value);
    this.setState({
      companyName: evt.target.value,
    });
  }

  render() {
    const { companyName } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>StockChart</h1>
          <Form companyName={companyName} onChange={this.handleChange} />
        </header>
        <StockChartContainer companyName={companyName} />
      </div>
    );
  }
}

export default App;
