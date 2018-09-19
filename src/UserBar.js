import React, { Component } from 'react';
import './App.css';


class UserBar extends Component {
	render() {
		return(

	<nav id="user-nav">
	      <ul id="nav-mobile" class="right hide-on-med-and-down">
	      	<li><a href="#">Welcome, Kelsey</a></li>
	        <li><a href="#">Order Status</a> </li> 
	        <li><a href="#">My Account</a> </li> 
	        <li><a href="#">USD</a></li>
	      </ul>
  </nav>
	)}
}



export default UserBar;
