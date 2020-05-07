import React, { Component } from "react";
import Cell from "./Cell";

class GameBoard extends Component {
  constructor() {
    super();

    this.state = {
      
    };

  }

  renderSquare(i) {
    return <Cell id={i}></Cell>;
  }

  renderRow(min, max) {

    var rowArray = []

    for (let index = min; index < max; index++) {
      rowArray.push(this.renderSquare(index))   
    }

    return (
      <div className="board-row">
        {rowArray}
      </div>
    )
  }

  renderBoard(rows, columns){

    var boardArray = []
    for (let index = 0; index < rows; index++) {
      
      let min = index * rows;
      let max = min + columns;

      boardArray.push(this.renderRow(min, max))
      
    }

    return (

      <div className="game-board">
        {boardArray}
      </div>
    )

  }

  render() {

    var col = 10;
    var row = 10;

   return (
      <div className="game-board">
 
        {this.renderBoard(row, col)}

      </div>
    );
  }

}

export default GameBoard;