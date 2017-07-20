import React, { Component } from "react";
import "./stylesheets/numberpad.css";

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // when button pressed, display the digit on the input field
  handleClick(digit) {
    if (this.props.onClick) {
      const value = this.props.onClick.call(this, this.state.value);
      this.setState({
        // if value is empty, put digit or what is valued + digit
        value: value === "" ? String(digit) : value + digit
      });
    }
  }

  render() {
    return (
      <button
        className="Grid-cell"
        id={this.props.id}
        onClick={() => this.handleClick()}
      >
        {this.props.children}
      </button>
    );
  }
}
