import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JsDefault from './js-default'
import {JsNotDefault} from './js-not-default'
import JsxDefault from './jsx-default'
import {JsxNotDefault} from './jsx-not-default'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <JsNotDefault />
          <JsDefault />
          <JsxNotDefault />
          <JsxDefault />
        </p>
      </div>
    );
  }
}

export default App;
