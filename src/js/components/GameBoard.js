import React, { Component } from "react";
import { connect } from "react-redux";
import Cell from "./Cell";

const mapStateToProps = state => {
  return { 
            columns: state.columns,
            rows: state.rows
          };
};

class ConnectedGameBoard extends Component {
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

   return (
      <div className="game-board">
 
        {this.renderBoard(this.props.rows, this.props.columns)}

      </div>
    );
  }

}

const GameBoard = connect(mapStateToProps)(ConnectedGameBoard);

export default GameBoard;