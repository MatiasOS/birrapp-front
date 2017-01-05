import React, { Component } from 'react'
import '../styles/Footer.css'

class Footer extends Component {

  render () {
    return (
      <div className='App-footer'>
        <p className='App-footer-text'> WebTools 1 </p>
        <a target='_black' href='https://ar.linkedin.com/in/movejasmith' >
          <strong> Matias Oveja Smith </strong>
        </a> <br></br>
        <a target='_black' href='https://ar.linkedin.com/in/leo-rubino-aa4131125' >
          <strong> Leo Rubino </strong>
        </a>
      </div>

    )
  }
}

export default Footer
