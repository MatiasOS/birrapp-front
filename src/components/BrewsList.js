import React, { Component } from 'react';

import '../styles/BrewsList.css'
import '../styles/List.css'
class BrewsList extends Component {

  constructor(props,state){
    super(props, state);
    this.state={
      brews: this.props.data.brews,
      beerActual: ""
    };
    //this.handleClick = this.handleClick.bind(this);
  };

  handleClick = (event) =>  {
    this.setState({beerActual: event.target.value})
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
