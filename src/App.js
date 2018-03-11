import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageSwitcher from './modules/ImageSwitcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stardew vally: времени года</h1>
        </header>
        <ImageSwitcher/>
      </div>
    );
  }
}

export default App;
