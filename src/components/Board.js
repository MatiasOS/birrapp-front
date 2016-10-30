import React, { Component } from 'react';
import '../styles/Board.css'

import StagesList from './StagesList';
import Graph from './Graph';

class Board extends Component {
  render(){
    return(
      <div className="Board">
        <StagesList data={this.props.data}/>
        <Graph data={this.props.data}/>
      </div>
  )}
}

export default Board;
