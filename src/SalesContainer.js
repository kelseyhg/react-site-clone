import React, { Component } from 'react';
import FeaturedSales from './FeaturedSales.js';
import './App.css';


const salesArray = [

{
  image: "https://zcdn.freetls.fastly.net/images/cache/event/477x477/313563/5b9303b3b29d85000125b58c/313563_DesignWest_HP_2018_0911_MEB3_185715.69906565-61bb-4dd7-b0cd-8e38567ac7b9.jpg",
  title: "Swing into the Season: S-4X",
  discount: "80",
  desc: "featuring suzanne betro"
  },

{
  image: "https://zcdn.freetls.fastly.net/images/cache/event/477x477/305294/5b930732b29d85000125b5c5/305294_TrishScully_HP_2018_0911_BW1_175846.a5bde96c-86dc-41d6-944f-674b321ca024.jpg",
  title: "Trish Scully Child: Toddler and Up",
  discount: "55",
  desc: "charming contemporary looks"
  },

{
  image: "https://zcdn.freetls.fastly.net/images/cache/event/477x477/295797/5b620fc52f97040001fb7b74/295797_Frye_HP7_147142.d7b6d4ab-6ced-42fe-a4df-5a8c6385f05e.jpg",
  title: "Frye",
  discount: "60",
  desc: "leather pairs for women"
  },

{
  image: "https://zcdn.freetls.fastly.net/images/cache/event/477x477/313682/5b92e5c1b29d85000125b3de/313682_ApplePicking_HP_2018_0911_BW20_265422.f76222a5-3078-47ac-a031-d0d36adbffa7.jpg",
  title: "Apple Picking: Women",
  discount: "70",
  desc: "look lovely in layers"
  },

]

class SalesContainer extends Component {
	render() {
		return(
		<div class="container">
			<FeaturedSales
          image={salesArray[0].image}
          title={salesArray[0].title}
          discount={salesArray[0].discount}
          desc={salesArray[0].desc}
         />
         <FeaturedSales
          image={salesArray[1].image}
          title={salesArray[1].title}
          discount={salesArray[1].discount}
          desc={salesArray[1].desc}
         />
         <FeaturedSales
          image={salesArray[2].image}
          title={salesArray[2].title}
          discount={salesArray[2].discount}
          desc={salesArray[2].desc}
         />
         <FeaturedSales
          image={salesArray[3].image}
          title={salesArray[3].title}
          discount={salesArray[3].discount}
          desc={salesArray[3].desc}
         />
  		</div>
	)}
}



export default SalesContainer;
