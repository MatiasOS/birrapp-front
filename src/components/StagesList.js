import React, { Component } from 'react'
import stageStore from '../stores/StageStore'
import '../styles/List.css'

import * as stageActions from '../actions/stageActions';

import '../styles/StagesList.css'
import '../styles/List.css'

class StagesList extends Component {
  constructor(){
    super();
    this.state = {
      stages:stageStore.getAll(),
      stageActual: ''
    };
  }

  handleClick = (event) =>  {
    this.setState({stageActual: event.target.value})
  }

  componentWillMount(){
    stageStore.on('change',()=>{
      this.setState({
        stages:stageStore.getAll(),
        newStage: ''
      });
    });
  }

  handleChange = (event) =>{
    this.setState({newStage:event.target.value});
    event.preventDefault();

  }

  handleAddStage = (event) => {
    stageActions.addStage(this.state.newStage)
    event.preventDefault();
  }

  render(){
    return(
      <div className="StagesList">
        <h4> Stage: {this.state.stageActual}</h4>
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
        <form className='Form'>
          <input type="text" name="name" placeholder='Name' onChange={this.handleChange}/>
          <input
            type="submit"
            value="Add!"
            className="button"
            onClick={this.handleAddStage}
          />
        </form>
      </div>
  )}
}

export default StagesList;
