import React, { Component } from 'react';
import '../styles/IngredientsList.css';
class IngredientsList extends Component {
  constructor(props,state){
    super(props, state);
    this.state={
      ingredients: this.props.data.ingredients
    }
  };

  render(){
    return(
      <div className="IngredientsList">
        <h5>INGREDIENTES</h5>
          {
            this.state.ingredients.map(function(d,i){
              return (<div><span> {d.name} </span> <span> {d.value}</span><br></br></div>)
            })
          }
      </div>
  )}
}

export default IngredientsList;
