import React, { Component } from "react";
import Button from "./Button";
import "./stylesheets/numberpad.css";

class NumberPad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: ""
    };

    this.change = this.change.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  change({ target: { value } }) {
    this.setState({ number: value });
  }

  // when button pressed, display the digit on the input field
  _handleClick(digit) {
    const { display } = this.state;
    this.setState({
      // if display is empty, put digit or what is displayed + digit
      display: display === "" ? String(digit) : display + digit
    });
  }

  render() {
    return (
      <div className="Grid">
        <input type="text" value={this.state.display} onChange={this.change} />
        <Button
          className="Grid-cell"
          id="1"
          onClick={() => this._handleClick(1)}
        >
          1
        </Button>
        <Button
          className="Grid-cell"
          id="2"
          onClick={() => this._handleClick(2)}
        >
          2
        </Button>
        <Button
          className="Grid-cell"
          id="3"
          onClick={() => this._handleClick(3)}
        >
          3
        </Button>
        <Button
          className="Grid-cell"
          id="4"
          onClick={() => this._handleClick(4)}
        >
          4
        </Button>
        <Button
          className="Grid-cell"
          id="5"
          onClick={() => this._handleClick(5)}
        >
          5
        </Button>
        <Button
          className="Grid-cell"
          id="6"
          onClick={() => this._handleClick(6)}
        >
          6
        </Button>
        <Button
          className="Grid-cell"
          id="7"
          onClick={() => this._handleClick(7)}
        >
          7
        </Button>
        <Button
          className="Grid-cell"
          id="8"
          onClick={() => this._handleClick(8)}
        >
          8
        </Button>
        v
        <Button
          className="Grid-cell"
          id="9"
          onClick={() => this._handleClick(9)}
        >
          9
        </Button>
        <Button
          className="Grid-cell"
          id="0"
          onClick={() => this._handleClick(0)}
        >
          0
        </Button>
      </div>
    );
  }
}

export default NumberPad;
