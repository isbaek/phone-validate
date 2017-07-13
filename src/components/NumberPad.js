import React, { Component } from "react";

import "./stylesheets/numberpad.css";

function Button(props) {
  return <button className="Grid-cell" id={props.id} {...props} />;
}

class NumberPad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: props.display
    };

    this._handleClick = this._handleClick.bind(this);
  }

  // when button pressed, display the digit on the input field
  _handleClick(digit) {
    const { display } = this.props;
    this.setState({
      // if display is empty, put digit or what is displayed + digit
      display: display === "" ? String(digit) : display + digit
    });
  }

  render() {
    return (
      <div className="Grid">
        <Button id="1" onClick={() => this._handleClick(1)}>
          1
        </Button>
        <Button id="2" onClick={() => this._handleClick(2)}>
          2
        </Button>
        <Button id="3" onClick={() => this._handleClick(3)}>
          3
        </Button>
        <Button id="4" onClick={() => this._handleClick(4)}>
          4
        </Button>
        <Button id="5" onClick={() => this._handleClick(5)}>
          5
        </Button>
        <Button id="6" onClick={() => this._handleClick(6)}>
          6
        </Button>
        <Button id="7" onClick={() => this._handleClick(7)}>
          7
        </Button>
        <Button id="8" onClick={() => this._handleClick(8)}>
          8
        </Button>
        <Button id="9" onClick={() => this._handleClick(9)}>
          9
        </Button>
        <Button id="0" onClick={() => this._handleClick(0)}>
          0
        </Button>
      </div>
    );
  }
}

export default NumberPad;
