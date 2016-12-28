import React, { Component } from 'react';
import stageStore from '../stores/StageStore';


import '../styles/StagesList.css'
import '../styles/List.css'

class StagesList extends Component {
  constructor(){
    super();
    this.setState({
      stages:stageStore.getAll(),
      beerActual: 'The first one'
    });
  }

  handleClick = (event) =>  {
    this.setState({stageActual: event.target.value})
  }

  componentWillMount(){
    stageStore.on('change',()=>{
      this.setState({
        stages:stageStore.getAll(),
        beerActual: 'The first one'
      });
    });
  }

  render(){
    return(
      <div className="StagesList">
        {
          this.state.stages.map(function(d,i){
            return (
                <input
                    type="submit"
                    value={d.name}
                    className="button"
                    onClick={this.handleClick}>
                </input>
            )
          },this)
        }
        <br></br>
        <h5> Stage: {this.state.stageActual}</h5>
      </div>
  )}
}

export default StagesList;
