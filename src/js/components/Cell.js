import React, { Component } from "react";

class Cell extends Component {
  constructor() {
    super();

    this.state = {
      
    };

  }

  render() {
    return (
      <button id={this.props.id} className="square">
        {/* TODO */}
      </button>
    );
  }

}

export default Cell;