import React, { Component } from "react";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";

import "./RangeButtons.css";

class RangeButtons extends Component {
  constructor(props) {
    super(props);

    this.handleClickOneMonth = this.handleClick.bind(this, "1m");
    this.handleClickThreeMonths = this.handleClick.bind(this, "3m");
    this.handleClickSixMonths = this.handleClick.bind(this, "6m");
    this.handleClickOneYear = this.handleClick.bind(this, "1y");
    this.handleClickTwoYears = this.handleClick.bind(this, "2y");
    this.handleClickFiveYears = this.handleClick.bind(this, "5y");
  }

  render() {
    const { value } = this.props;

    return (
      <div className="RangeButtons">
        <ButtonGroup>
          <Button
            title="1 month"
            togglable={true}
            selected={value === "1m"}
            onClick={this.handleClickOneMonth}
          >
            1M
          </Button>
          <Button
            title="3 months"
            togglable={true}
            selected={value === "3m"}
            onClick={this.handleClickThreeMonths}
          >
            3M
          </Button>
          <Button
            title="6 months"
            togglable={true}
            selected={value === "6m"}
            onClick={this.handleClickSixMonths}
          >
            6M
          </Button>
          <Button
            title="1 year"
            togglable={true}
            selected={value === "1y"}
            onClick={this.handleClickOneYear}
          >
            1Y
          </Button>
          <Button
            title="2 years"
            togglable={true}
            selected={value === "2y"}
            onClick={this.handleClickTwoYears}
          >
            2Y
          </Button>
          <Button
            title="5 years"
            togglable={true}
            selected={value === "5y"}
            onClick={this.handleClickFiveYears}
          >
            5Y
          </Button>
        </ButtonGroup>
      </div>
    );
  }

  handleClick(range) {
    const { onClick } = this.props;
    onClick(range);
  }
}

export default RangeButtons;
