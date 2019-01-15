import React, { Component } from "react";
import "./SymbolForm.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { value } = this.props;

    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h2 className="Form-label">Enter company's symbol:</h2>
            <input type="text" value={value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
    );
  }

  handleChange(evt) {
    const { onChange } = this.props;
    onChange(evt.target.value);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const { onSubmit } = this.props;
    onSubmit();
  }
}

export default Form;
