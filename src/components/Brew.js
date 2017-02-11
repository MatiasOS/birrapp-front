import React, { Component } from 'react';
//import brewStore from '../stores/BrewStore';
 import * as brewAction from '../actions/brewActions';

import '../styles/BrewsList.css';
import '../styles/List.css';

import FaBan from 'react-icons/lib/fa/ban';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';

class Brew extends Component {
  constructor(props){
    super(props);
    this.state = {
      beerName: this.props.data.beerName,
      startDate: this.props.data.startDate,
      endDate: this.props.data.endDate,
      id: this.props.data.id,
      userId: this.props.data.userId
    };
  }

  handleDelBeer = (event) =>{
    brewAction.deleteBrew(this.state.id);
    event.preventDefault();
  }
  handleChangeBeer = (event) => {
    brewAction.changeBrew(this.state.id, this.state.beerName);
  }

  render(){
    return (
      <div>
        <button className="button" onClick={this.handleDelBeer}>
          <FaBan></FaBan>
        </button>
        <input
            type="submit"
            value={this.state.beerName}
            className="button"
            onClick={this.handleChangeBeer}>
        </input>
        <FaInfoCircle> </FaInfoCircle>
        <br></br>
      </div>
    )
  }

}

export default Brew;
