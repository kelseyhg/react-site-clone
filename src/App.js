import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserBar from './UserBar.js';
import NavBar from './NavBar.js';
import SalesContainer from './SalesContainer.js';
import ThemedLinks from './ThemedLinks.js';
import SidebarContainer from './SidebarContainer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserBar />
        <NavBar />
        <ThemedLinks />
        <SalesContainer />
        <SidebarContainer />
      </div>
    );
  }
}

export default App;
