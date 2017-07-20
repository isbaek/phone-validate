import React, { Component } from "react";
import "./stylesheets/numberpad.css";

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

export class DeleteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  // when button pressed, display the digit on the input field
  handleDelete() {
    if (this.props.onClick) {
      const value = this.props.onClick.call(this, this.state.value);
      this.setState({
        // if value is empty, put digit or what is valued + digit
        value: value.substring(0, value.length - 1) || ""
      });
    }
  }

  render() {
    return (
      <div className="Grid-cell">
        <button
          className="delete-button"
          id={this.props.id}
          onClick={this.handleDelete()}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}
