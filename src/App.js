import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import Main from './components/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="row" >
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
