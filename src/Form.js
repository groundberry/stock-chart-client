import React from "react";
import './Form.css';

const Form = (props) => {
  const { onChange } = props;

  return (
    <div className="Form">
      <form>
        <label>
          <h2 className="Form-label">Select company:</h2>
          <select onChange={onChange}>
            <option value="MSFT">Microsoft</option>
            <option value="APPL">Apple</option>
            <option value="FB">Facebook</option>
            <option value="AMZN">Amazon</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Form;
