import React, { Component } from "react";

import "./stylesheets/numberpad.css";

function Button(props) {
  return <button className="Grid-cell" id={props.id} {...props} />;
}

class NumberPad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // when button pressed, value the digit on the input field
  handleClick(digit) {
    if (this.props.handleClick) {
      const value = this.props.handleClick.call(this, this.state.value);
      this.setState({
        // if value is empty, put digit or what is valued + digit
        value: value === "" ? String(digit) : value + digit
      });
    }
  }

  componentWillReceiveProps({ value }) {
    this.setState({ value: value });
  }

  render() {
    return (
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
    );
  }
}

export default NumberPad;
