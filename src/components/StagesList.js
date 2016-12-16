import React, { Component } from 'react';
import '../styles/StagesList.css'
import '../styles/List.css'

class StagesList extends Component {

  constructor(props,state){
    super(props, state);
    this.state={
      stages: this.props.data.stages,
      stageActual: this.props.data.stages[0].name
    }
  };

  handleClick = (event) =>  {
    this.setState({stageActual: event.target.value})
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
