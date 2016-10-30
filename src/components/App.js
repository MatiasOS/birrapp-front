import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import WorkSpace from './WorkSpace';
import data from '../data/data'

class App extends Component {
  constructor(props, state){
      super(props,state);
      this.state = {"data":data};
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <WorkSpace data={data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
