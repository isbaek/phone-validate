import React, { Component } from "react";
import "./stylesheets/numberpad.css";

function NumberPad() {
  return (
    <div className="Grid">
      <div className="Grid-cell">1</div>
      <div className="Grid-cell">2</div>
      <div className="Grid-cell">3</div>
      <div className="Grid-cell">4</div>
      <div className="Grid-cell">5</div>
      <div className="Grid-cell">6</div>
      <div className="Grid-cell">7</div>
      <div className="Grid-cell">8</div>
      <div className="Grid-cell">9</div>
      <div className="Grid-cell">0</div>
    </div>
  );
}

export default NumberPad;
