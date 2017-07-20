import React, { Component } from "react";
import "./stylesheets/numberpad.css";

import DeleteIcon from "react-icons/lib/fa/chevron-left";
import ValidateIcon from "react-icons/lib/fa/check";

export class Button extends Component {
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
      <div className="Grid-cell">
        <button id={this.props.id} onClick={() => this.handleClick()}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export function DeleteButton(props) {
  return (
    <div className="Grid-cell">
      <button className="delete-button" id={props.id} {...props}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export function ValidateButton(props) {
  return (
    <div className="Grid-cell">
      <button className="validate-button" id={props.id} {...props}>
        <ValidateIcon />
      </button>
    </div>
  );
}
