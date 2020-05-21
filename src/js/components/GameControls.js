import React, { Component } from "react";
import { connect } from "react-redux";
import { updateNextCycle } from "../actions";


const mapStateToProps = state => {
  return { 
            state : "paused"
          };
};

function mapDispatchToProps(dispatch) {
  return {
    updateNextCycle: info  => dispatch(updateNextCycle(info))
  };
}

class ConnectedGameControls extends Component {

  constructor(props) {
    super(props);

    this.clickNextCycle = this.clickNextCycle.bind(this)
  }

  clickNextCycle(event) {
    this.props.updateNextCycle({})
  }


  render() {

    
   return (
      <div className="game-controls">
 
        <button type="button" value="next_step" onClick={this.clickNextCycle}>NEXT CYCLE</button>

      </div>
    );
  }

}

const GameControls = connect(mapStateToProps, mapDispatchToProps)(ConnectedGameControls);

export default GameControls;