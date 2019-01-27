import React, { Component } from "react";
import { Input } from "@progress/kendo-react-inputs";

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { value } = this.props;

    return (
      <form className="k-form">
        <Input
          name="symbol"
          label="Company's symbol"
          pattern={"[A-Za-z-]+"}
          minLength={1}
          required={true}
          value={value}
          onChange={this.handleChange}
        />
      </form>
    );
  }

  handleChange(evt) {
    const { onChange } = this.props;
    const symbol = evt.target.value;
    onChange(symbol);
  }
}

export default Form;
