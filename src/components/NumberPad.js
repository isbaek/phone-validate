import React, { Component } from "react";
import "./stylesheets/numberpad.css";

function NumberPad() {
  return (
    <div className="Grid">
      <div className="Grid-cell"><p>1</p></div>
      <div className="Grid-cell"><p>2</p></div>
      <div className="Grid-cell"><p>3</p></div>
      <div className="Grid-cell"><p>4</p></div>
      <div className="Grid-cell"><p>5</p></div>
      <div className="Grid-cell"><p>6</p></div>
      <div className="Grid-cell"><p>7</p></div>
      <div className="Grid-cell"><p>8</p></div>
      <div className="Grid-cell"><p>9</p></div>
      <div className="Grid-cell"><p>Back</p></div>
      <div className="Grid-cell"><p>0</p></div>
      <div className="Grid-cell"><p>Enter</p></div>
    </div>
  );
}

export default NumberPad;
