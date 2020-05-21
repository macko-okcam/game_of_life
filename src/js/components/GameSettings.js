import React, { Component } from "react";
import { connect } from "react-redux";
import { rebuildGameBoard, updateDimensions } from "../actions";

const mapStateToProps = state => {
  return { 
            columns: state.columns,
            rows: state.rows
          };
};

function mapDispatchToProps(dispatch) {
  return {
    updateDimensions: boardDimensions => dispatch(updateDimensions(boardDimensions)),
    rebuildGameBoard: boardDimensions => dispatch(rebuildGameBoard(boardDimensions))
  };
}

class ConnectedGameSettings extends Component {

  constructor(props) {
    super(props);

    // this.props.rebuildGameBoard({columns:this.props.columns, rows:this.props.rows})
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // console.log(event.target.rows.value);
    

    // this.props.updateDimensions({columns:event.target.columns.value, rows:event.target.rows.value})
    this.props.rebuildGameBoard({columns:event.target.columns.value, rows:event.target.rows.value})

  }

  render() {

    
   return (
      <div className="game-settings">
 
 <    form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="rows">Rows</label>
          <input
            type="number"
            id="rows" min="1" max="50"
            // value="15"
            // onChange={this.handleChange}
          />
        {/* </div>
        <div> */}
          <label htmlFor="columns">Columns</label>
          <input
            type="number" min="1" max="50"
            id="columns"
            // value="20"
            // onChange={this.handleChange}
          />
        <button type="submit">UPDATE</button>
        </div>
      </form>

      </div>
    );
  }

}

const GameSettings = connect(mapStateToProps, mapDispatchToProps)(ConnectedGameSettings);

export default GameSettings;