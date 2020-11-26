import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../css/main.css';
import SidebarComponent from "./layout/SidebarComponent";
import HeaderComponent from "./layout/HeaderComponent";

class App extends Component {
  render() {
    return (
      <div className="app">
        <SidebarComponent />
        <HeaderComponent />
      </div>
    );
  }
}

export default App;
