import React, { Component } from 'react';
import '../styles/WorkSpace.css';

import BrewsList from './BrewsList';
import Board from './Board';
import IngredientsList from './IngredientsList';



class WorkSpace extends Component {

  render() {
    return (
      <div className="WorkSpace">
        <BrewsList data={this.props.data}/>
        <Board data={this.props.data}/>
        <IngredientsList data={this.props.data}/>
      </div>
    );
  }
}

export default WorkSpace;
