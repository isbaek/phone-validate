import React, { Component } from "react";
import Button from "./Button";
import PhoneNumberInput from "./PhoneNumberInput";
import Validator from "../validators/Validator";

import "./stylesheets/button.css";

class NumberPad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: "",
      valid: "Correct 10-digit number"
    };

    this.handleClick = this.handleClick.bind(this);
    this.validate = this.validate.bind(this);
    this.change = this.change.bind(this);
  }

  // when button pressed, value the digit on the input field
  handleClick(digit) {
    this.setState({
      // if value is empty, put digit or what is valued + digit
      phoneNumber: this.state.phoneNumber === ""
        ? String(digit)
        : this.state.phoneNumber + digit
    });
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
      <div>
        <PhoneNumberInput
          value={this.state.phoneNumber}
          onChange={this.change}
          validate={this.validate}
        />
        <div className="Grid">
          <Button id="1" onClick={() => this.handleClick(1)}>
            1
          </Button>
          <Button id="2" onClick={() => this.handleClick(2)}>
            2
          </Button>
          <Button id="3" onClick={() => this.handleClick(3)}>
            3
          </Button>
          <Button id="4" onClick={() => this.handleClick(4)}>
            4
          </Button>
          <Button id="5" onClick={() => this.handleClick(5)}>
            5
          </Button>
          <Button id="6" onClick={() => this.handleClick(6)}>
            6
          </Button>
          <Button id="7" onClick={() => this.handleClick(7)}>
            7
          </Button>
          <Button id="8" onClick={() => this.handleClick(8)}>
            8
          </Button>
          <Button id="9" onClick={() => this.handleClick(9)}>
            9
          </Button>
          <Button id="delete">
            Delete
          </Button>
          <Button id="0" onClick={() => this.handleClick(0)}>
            0
          </Button>
          <Button id="enter">
            Enter
          </Button>
        </div>
      </div>
    );
  }
}

export default NumberPad;
