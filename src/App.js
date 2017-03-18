import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import Sidebar from './Pages/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Profile />
      </div>
    );
  }
}

export default App;
