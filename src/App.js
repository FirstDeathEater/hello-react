import React, { Component } from 'react';
import TextFileReader from './TextFileReader';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="gray">
          <strong>Environment:</strong> [{process.env.NODE_ENV}]
        </p>
        <p className="gray">
          <strong>Release:</strong> 6 {(process.env.NODE_ENV != 'development') ? <TextFileReader txt='buld_number.txt' /> : ""}
        </p>
      </div>
    );
  }
}

export default App;
