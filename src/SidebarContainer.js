import React, { Component } from 'react';
import SidebarSales from './SidebarSales.js';
import SidebarAd from './SidebarAd.js'
import './App.css';


const sidebarArray = [

{
  image: "https://zcdn.freetls.fastly.net/images/cache/event/161x161/325370/5b969a46b29d85000125b866/325370_zulilydebutiloveplum_HP_2018_0911_ACS2_74987.7c3840e1-c0e5-46cd-82d2-84d0045c9a88.jpg",
  title: "iloveplum",
  info: "sizes baby to big girl"
  },

{
  image: "https://zcdn.freetls.fastly.net/images/cache/event/161x161/324036/5b8edf4b2f97040001fc17f6/324036_Living_HP_2018_0910_CFD2_164176.2c7dec8a-297e-4e67-844f-0b05c1418028.jpg",
  title: "Living 31",
  info: "faith-inspired decor finds"
  },

{
  image: "https://zcdn.freetls.fastly.net/images/cache/event/161x161/320162/5b9304ef2f97040001fc2e66/320162_zulilydebutRIOLIS_HP_2018_0911_MS1_247020.32cc89a9-c463-4957-92b1-74f6ea3e14b9.jpg",
  title: "RIOLIS",
  info: "nifty needlework kits"
  },

{
  image: "https://zcdn.freetls.fastly.net/images/cache/event/161x161/325429/5b903af72f97040001fc1f17/325429_Aeropostale_HP_2018_0910_JJJ1_76851.c3815b14-c008-4032-a934-60e6837ad365.jpg",
  title: "Aeropostale",
  info: "an intimates debut"
  },

]

class SidebarContainer extends Component {
	render() {
		return(
		<div class="sidebar">
      <SidebarAd />
      <h3> FIRST TIME ON ZULILY > </h3>
			<SidebarSales
          image={sidebarArray[0].image}
          title={sidebarArray[0].title}
          info={sidebarArray[0].info}
         />

      <SidebarSales
          image={sidebarArray[1].image}
          title={sidebarArray[1].title}
          info={sidebarArray[1].info}
         />
      <SidebarSales
          image={sidebarArray[2].image}
          title={sidebarArray[2].title}
          info={sidebarArray[2].info}
         />
      <SidebarSales
          image={sidebarArray[3].image}
          title={sidebarArray[3].title}
          info={sidebarArray[3].info}
         />
  		</div>
	)}
}



export default SidebarContainer;
