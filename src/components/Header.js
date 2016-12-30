import React, { Component } from 'react';
import '../styles/Header.css';
import FaBeer from 'react-icons/lib/fa/beer';


class Header extends Component {

  render(){
    return(
      <div className="App-header">
        <FaBeer className='icon spin swingimage'></FaBeer>
        <span>BirrApp</span>
      </div>
    )};
};

export default Header;
