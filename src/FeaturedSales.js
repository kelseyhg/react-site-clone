import React, { Component } from 'react';
import './App.css';

class FeaturedSales extends Component {
	render() {
		return(
	
			<div class="main-sale">
		 		<img alt="pic" width="350px" src={this.props.image} />
		 		<h4> {this.props.title} </h4>
		 		<p> {`Up to ${this.props.discount}% off`} | {this.props.desc} </p>

	  		</div>

  
	)}
}



export default FeaturedSales;
