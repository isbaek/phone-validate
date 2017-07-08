import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, please type in your phone number: <br />
        </p>
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
