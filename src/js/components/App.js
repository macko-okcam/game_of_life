import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "../store/index";

import Button from 'react-bootstrap/Button';

import img from './thumbs_up.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/main.scss';
import GameBoard from "./GameBoard";
import GameSettings from "./GameSettings";

class App extends Component {
  constructor() {
    super();

    this.state = {
      
    };

  }


  render() {
    return (

      <>

        <GameBoard></GameBoard>
        <GameSettings></GameSettings>
        <h1>This is where stuff will happen. Fun!</h1>
        <img src={img} />
      </>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
                            <Provider store={store}>
                              <App />
                            </Provider>, wrapper) : false;