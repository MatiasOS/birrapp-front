import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import WorkSpace from './WorkSpace';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WorkSpace/>
        <Footer />
      </div>
    );
  }
}

export default App;
