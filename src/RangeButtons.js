import React, { Component } from "react";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";

import "./RangeButtons.css";

class ButtonGroupContainer extends Component {
  constructor(props) {
    super(props);

    this.handleClickOneMonth = this.handleClick.bind(this, "1m");
    this.handleClickSixMonths = this.handleClick.bind(this, "6m");
    this.handleClickOneYear = this.handleClick.bind(this, "1y");
  }

  render() {
    const { value } = this.props;

    return (
      <div className="RangeButtons">
        <ButtonGroup>
          <Button
            togglable={true}
            selected={value === "1m"}
            onClick={this.handleClickOneMonth}
          >
            1 month
          </Button>
          <Button
            togglable={true}
            selected={value === "6m"}
            onClick={this.handleClickSixMonths}
          >
            6 months
          </Button>
          <Button
            togglable={true}
            selected={value === "1y"}
            onClick={this.handleClickOneYear}
          >
            1 year
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

export default ButtonGroupContainer;