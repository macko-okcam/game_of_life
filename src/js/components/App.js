import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

  }


  render() {
    return (
      <h1>This is where stuff will happen</h1>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;