import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo.js';
import List from './list.js';
import Inventory from './Inventory.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Inventory</h1>
        <hr/>
        <Inventory/>
      </div>
    );
  }
}

export default App;
