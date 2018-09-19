import React, { Component } from 'react';
import './App.css';
import ZLogo from "./logo.png";


class NavBar extends Component {
	render() {
		return(

	<nav id="nav-bar">
	      <ul id="nav-mobile" class="right hide-on-med-and-down">
	      <img id="logo" alt="logo" src={ZLogo}/>
	      	<li><a href="#">NEW TODAY</a></li>
	        <li><a href="#">ENDS SOON</a> </li> 
	        <li><a href="#">SHOP BY CATEGORY v</a> </li> 
	        <li><a href="#">SHOP BY SIZE v</a></li>
	        <li><input class="searchbox" type="text" placeholder="Search"/></li>
	        <li><a href="#">BASKET</a></li>
	      </ul>
  </nav>
	)}
}



export default NavBar;
