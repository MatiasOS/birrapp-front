import React, { Component } from 'react'
import '../styles/WorkSpace.css'

import BrewsList from './BrewsList'
import Board from './Board'

class WorkSpace extends Component {

  render () {
    return (
      <div className='WorkSpace'>
        <BrewsList />
        <Board />
      </div>
    )
  }
}

export default WorkSpace
