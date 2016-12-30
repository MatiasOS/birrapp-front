import React, { Component } from 'react';
import '../styles/Header.css';
import FaBeer from 'react-icons/lib/fa/beer';


class Header extends Component {

  render(){
    return(
      <div className="App-header">
        <h2>BirrApp</h2>
        <FaBeer className='icon'></FaBeer>

      </div>
    )};
};

export default Header;
