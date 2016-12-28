import React, { Component } from 'react';
import ingredientStore from '../stores/IngredientStore';


import '../styles/IngredientsList.css';

class IngredientsList extends Component {
  constructor(){
    super();
    this.setState({
      ingredients: ingredientStore.getAll()
    });
  }
  componentWillMount(){
    ingredientStore.on('change',()=>{
      this.setState({
        ingredients: ingredientStore.getAll()
      });
    });
  }

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
