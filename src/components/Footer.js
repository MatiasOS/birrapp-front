import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {

  render(){
    return(
      <div className="App-footer">
        <p className="App-footer-text"> Developed by </p>
        <a target="_black" href="https://ar.linkedin.com/in/movejasmith" >
            <strong> Matias Oveja Smith </strong>
        </a>
      </div>

    )}
}

export default Footer;
