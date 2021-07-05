import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  numberButtonClick = (e) => {
    var x = e.target.value;
    console.log(x);
    this.setState({
      id: x,
    });
  };

  buttonClick = (e) => {
    var x = e.target.value;
    console.log(x);
    this.setState({
      id: x,
    });
  };

  buttonClearScreen = (e) => {
    var x = e.target.value;
    console.log(x);
    this.setState({
      id: "",
    });
  };

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

        <div className="screen"> {this.state.id}</div>
        <div className="calculator">
          <div className="buttons">
            <button
              className="buttonProps"
              value="1"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              1
            </button>
            <button
              className="buttonProps"
              value="2"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              2
            </button>
            <button
              className="buttonProps"
              value="3"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              3
            </button>
            <button
              className="buttonProps"
              value="+"
              onClick={(e) => this.buttonClick(e, "value")}
            >
              +
            </button>
            <br></br>
            <button
              className="buttonProps"
              value="4"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              4
            </button>
            <button
              className="buttonProps"
              value="5"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              5
            </button>
            <button
              className="buttonProps"
              value="6"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              6
            </button>
            <button
              className="buttonProps"
              value="-"
              onClick={(e) => this.buttonClick(e, "value")}
            >
              -
            </button>
            <br></br>
            <button
              className="buttonProps"
              value="7"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              7
            </button>
            <button
              className="buttonProps"
              value="8"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              8
            </button>
            <button
              className="buttonProps"
              value="9"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              9
            </button>
            <button
              className="buttonProps"
              value="*"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              *
            </button>
            <br></br>
            <button
              className="buttonProps"
              value="."
              onClick={(e) => this.buttonClick(e, "value")}
            >
              .
            </button>
            <button
              className="buttonProps"
              value="0"
              onClick={(e) => this.numberButtonClick(e, "value")}
            >
              0
            </button>
            <button
              className="buttonProps"
              value="C"
              onClick={(e) => this.buttonClearScreen(e, "value")}
            >
              C
            </button>
            <button
              className="buttonProps"
              value="="
              onClick={(e) => this.buttonClick(e, "value")}
            >
              =
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
