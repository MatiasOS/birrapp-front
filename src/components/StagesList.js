import React, { Component } from 'react';
import '../styles/StagesList.css'
import '../styles/List.css'

class StagesList extends Component {

  constructor(props,state){
    super(props, state);
    this.state={
      stages: this.props.data.stages
    }
  };
  render(){
    return(
      <div className="StagesList">
        {
          this.state.stages.map(function(d,i){
            return (<button className="button"> {d.name}</button>)
          },this)
        }
      </div>
  )}
}

export default StagesList;
