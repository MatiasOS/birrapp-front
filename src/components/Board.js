import React, { Component } from 'react';
import '../styles/Board.css'

import StagesList from './StagesList';
import Graph from './Graph';

class Board extends Component {
  render(){
    return(
      <div className="Board">
        <StagesList/>
        <Graph/>
      </div>
  )}
}

export default Board;
