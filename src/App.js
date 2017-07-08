import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NumberPad from "./components/NumberPad";
import NumberInput from "./components/NumberInput";
import Validator from "./validators/Validator";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: "Correct 10-digit number",
      phoneNumber: ""
    };

    this.validate = this.validate.bind(this);
    this.change = this.change.bind(this);
  }

  validate(value) {
    console.log(`VALUE: ${value}`);
    let result = Validator(value);
    this.setState({ valid: "Correct 10-digit number" });

    return result;
  }

  change({ target: { value } }) {
    this.setState({ phoneNumber: value });
  }

  render() {
    return (
      <div className="App">

        <NumberPad />
        <NumberInput
          value={this.state.phoneNumber}
          onChange={this.change}
          validate={this.validate}
        />

        <pre id="valid">valid = {JSON.stringify(this.state.valid)}</pre>
      </div>
    );
  }
}

export default App;
