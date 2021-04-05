import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="screen"></div>
        <div className="calculator">
          <div className="buttons">
            <button
              className="buttonProps"
              value="1"
              onClick={this.checknumber}
            >
              1
            </button>
            <button className="buttonProps">2</button>
            <button className="buttonProps">3</button>
            <button className="buttonProps">+</button>
            <br></br>
            <button className="buttonProps">4</button>
            <button className="buttonProps">5</button>
            <button className="buttonProps">6</button>
            <button className="buttonProps">-</button>
            <br></br>
            <button className="buttonProps">7</button>
            <button className="buttonProps">8</button>
            <button className="buttonProps">9</button>
            <button className="buttonProps">*</button>
            <br></br>
            <button className="buttonProps">.</button>
            <button className="buttonProps">0</button>
            <button className="buttonProps">%</button>
            <button className="buttonProps">=</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
