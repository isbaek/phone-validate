import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NumberPad from "./components/NumberPad";
import Title from "./components/Title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <NumberPad />
      </div>
    );
  }
}

export default App;
