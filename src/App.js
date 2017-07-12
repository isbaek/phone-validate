import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NumberPad from "./components/NumberPad";
import PhoneNumberInput from "./components/PhoneNumberInput";
import Validator from "./validators/Validator";
import Title from "./components/Title";

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
        <Title />
        <PhoneNumberInput
          value={this.state.phoneNumber}
          onChange={this.change}
          validate={this.validate}
        />
        <NumberPad />
      </div>
    );
  }
}

export default App;
