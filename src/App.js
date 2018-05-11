import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Git page</h1>
        </header>
        <p className="App-intro">
          This page is my React study page
        </p>
        <hello/>
      </div>
    );
   
  }
}

var hello = React.createElement(
  {
    render : function() {
      return (
        <p>hello React App </p>
      );
    }
  }
);

export default App;
