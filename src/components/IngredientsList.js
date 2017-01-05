import React, { Component } from 'react'
import ingredientStore from '../stores/IngredientStore'


import '../styles/IngredientsList.css'
import '../styles/List.css'

class IngredientsList extends Component {
  constructor(){
    super();
    this.state = {
      ingredients: ingredientStore.getAll(),
      newIngredient: ''
    };
  }
  componentWillMount(){
    ingredientStore.on('change',()=>{
      this.setState({
        ingredients: ingredientStore.getAll()
      });
    });
  }

  handleNameChange = (event) =>  {
    this.setState({newIngredient: event.target.value})
  };

  handleAddIngredient = (event) =>  {
    this.setState({newIngredient: event.target.value})
  };

  render(){
    return(
      <div className="IngredientsList">
        <h4>Ingredientes</h4>
          {
            this.state.ingredients.map(function(d,i){
              return (<div><span> {d.name} </span> <span> {d.value}</span><br></br></div>)
            })
          }
        <form className='Form'>
          <input type="text" name="name" placeholder='Name' onChange={this.handleNameChange}/><br></br>
          <input type="text" name="quan" placeholder='Quantity' onChange={this.handleQuanChange}/><br></br>
          <input type="text" name="unit" placeholder='Unit' onChange={this.handleUnitChange}/> <br></br>
          <input
            type="submit"
            value="Add!"
            className="button"
            onClick={this.handleAddIngredient}
          />
        </form>
      </div>
  )}
}

export default IngredientsList;
