import React, { Component } from "react";

// Input field
class numberInput extends Component {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.change = this.change.bind(this);

    //initial state
    this.state = {
      validation: "Correct 10-digit number",
      value: props.value
    };
  }

  // validate whether user inputed data is correct or false
  // call args this and this.state.value when it validates
  validate() {
    if (this.props.validate) {
      const validation = this.props.validate.call(this, this.state.value);
      this.setState({ validation: validation });
    }
  }

  //set state to user inputed value on the input field change
  change({ target: { value } }) {
    if (this.props.onChange) {
      this.props.onChange.apply(this, arguments);
    }

    this.setState({ value: value });
  }

  // value becomes props
  componentWillReceiveProps({ value }) {
    this.setState({ value: value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="num-input"
          value={this.props.value}
          onBlur={this.validate}
          onChange={this.change}
        />
        {this.state.validation &&
          <div className={"error"}>{this.state.validation}</div>}
      </div>
    );
  }
}

export default numberInput;
