import React, { Component } from 'react'
import stageStore from '../stores/StageStore'
import '../styles/List.css'



import '../styles/StagesList.css'
import '../styles/List.css'

class StagesList extends Component {
  constructor(){
    super();
    this.state = {
      stages:stageStore.getAll(),
      stageActual: 'The first one'
    };
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
          <input type="text" name="name" placeholder='Name' onChange={this.handleNameChange}/>
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

export default StagesList;
