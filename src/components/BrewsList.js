import React, { Component } from 'react';
import brewStore from '../stores/BrewStore';

import '../styles/BrewsList.css'
import '../styles/List.css'


class BrewsList extends Component {
  constructor(){
    super();
    this.setState({
      brews: brewStore.getAll(),
      beerActual: 'The oldest one'
    });
  }
  
  handleClick = (event) =>  {
    this.setState({beerActual: event.target.value})
  }

  componentWillMount(){
    brewStore.on('change',()=>{
      this.setState({
        brews: brewStore.getAll(),
        beerActual: 'The oldest one'
      });
    });
  }

  render(){
    return(
      <div className="BrewsList">
          <h5>CERVEZA {this.state.beerActual}</h5>
            {
              this.state.brews.map(function(d){
                return (
                        <div>
                          <input
                              type="submit"
                              value={d.beerName}
                              className="button"
                              onClick={this.handleClick}>
                          </input> <br></br>
                        </div>
                        )
              },this)
            }
    </div>
  )}
}

export default BrewsList;
