import React, { Component } from 'react';
import './App.css';
import Sections from './Components/Sections';
import Navbar from './Components/Navbar';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <Sections />
      </div>
    );
  }
}

export default Home;
