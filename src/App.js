import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import Navbar from './Components/Navbar';
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
