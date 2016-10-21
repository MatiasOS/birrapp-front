import React, { Component } from 'react';
import '../styles/IngredientsList.css';
class IngredientsList extends Component {


  render(){
    return(
      <div className="IngredientsList">
        <h5>INGREDIENTS LIST</h5>
        <span>Frula</span><br></br>
        <span>Cosas random</span><br></br>
        <span>Batatas</span><br></br>
        <span>puerro</span><br></br>
        <span>Sal y pimienta a gusto.</span><br></br>
      </div>
  )}
}

export default IngredientsList;
