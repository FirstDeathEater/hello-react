import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var buildNumber = require('./build_number.json');


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
          <strong>Release:</strong> 6 <strong>{ buildNumber.build_number ? 'Build: ' : 'Build: '}</strong>{ buildNumber.build_number ? buildNumber.build_number : buildNumber.build_number}
        </p>
      </div>
    );
  }
}

export default App;
