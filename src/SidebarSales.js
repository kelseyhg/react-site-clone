import React, { Component } from 'react';

class SidebarSales extends Component {
	render() {
		return(
	
			<div class="sidebar-sale">
		 		<img alt="pic" class="sidebar-pic" src={this.props.image} />
		 		<div class ='sidebar-info'>
			 		<p>zulily debut: <br />
			 		{this.props.title} </p>
			 		<div class="tiny"> {this.props.info}</div>
			 	</div>

	  		</div>

  
	)}
}



export default SidebarSales;
