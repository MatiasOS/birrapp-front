import React, { Component } from 'react';
import brewStore from '../stores/BrewStore';
import * as brewAction from '../actions/brewActions';

import '../styles/BrewsList.css';
import '../styles/List.css';

import FaBan from 'react-icons/lib/fa/ban';


class BrewsList extends Component {
  constructor(){
    super();
    this.state = {
      brews: brewStore.getAll(),
      beerActual: 'Pulpo Rojo',
      newBeer: ''
    };
  };

  handleChangeBeer = (event) =>  {
    this.setState({beerActual: event.target.value})
  };

  handleAddBeer = (event) =>{
    console.log('apreté para crear. Name: ' + this.state.newBeer );
    brewAction.createBrew(this.state.newBeer);
    event.preventDefault();
  }

  componentWillMount(){
    brewStore.on('change',() => {
      this.setState({
        brews: brewStore.getAll()
      });
    });
  };

  handleChange = (event) =>{
    this.setState({newBeer:event.target.value});
    event.preventDefault();

  }

  handleDelBeer = (event) =>{
    console.log('apreté para eliminar. Name: ' + this.state.newBeer );
    event.preventDefault();
  }

  render(){
    return(
      <div className="BrewsList">
          <h4>{this.state.beerActual}</h4>
            {
              this.state.brews.map(function(d){
                return (
                        <div>
                          <button className="button" onClick={this.handleDelBeer}>
                            <FaBan></FaBan>
                          </button>
                          <input
                              type="submit"
                              value={d.beerName}
                              className="button"
                              onClick={this.handleChangeBeer}>
                          </input>
                          <br></br>
                        </div>
                        )
              },this)
            }
      <h4> Crear cerveza </h4>
      <form>
          <input type="text" name="name" placeholder='Beer Name' onChange={this.handleChange}/>
          <input
            type="submit"
            value="Crear!"
            className="button"
            onClick={this.handleAddBeer}
          />
      </form>
    </div>
  )}
};

export default BrewsList;
