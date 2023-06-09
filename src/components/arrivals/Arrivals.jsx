import React from 'react'
import './Arrivals.scss'
import Product from '../product/Product'
import img1 from '../../assets/product1.jpg'
import img2 from "../../assets/product2.jpg"
import img3 from "../../assets/product3.jpg"
import img4 from "../../assets/Cotton pique T-shirt.jpg"
import img5 from "../../assets/Cotton robe.jpg"
import img6 from "../../assets/Prada lux.jpg"
const Arrivals = (props) => {

	// Astea o sa le pun probabil intr-un CMS / ARRAY DE OBIECTE :) 

	const femaleProducts = [
		{
			product_name: "Terry tote bag",
			colors: "4 Colors",
			image: img1,
		},
		{
			product_name: "Re-Nylon bucket hat",
			colors: "8 Colors",
			image: img2,
		},
		{
			product_name: "Prada symbole sunglasses",
			colors: "1 Color",
			image: img3,
		},
	];

	const maleProducts = [
		{
			product_name: "Cotton pique T-shirt",
			colors: "2 Colors",
			image: img4,
		},
		{
			product_name: "Cotton robe",
			colors: "1 Colors",
			image: img5,
		},
		{
			product_name: "Prada symbole lux",
			colors: "2 Color",
			image: img6,
		},
	];
 
  return (
		// Fac conditional rendering pentru variant :) 
		<section>
			<h1>{props.variant == "for him" ? "New Arrivals for him" : "New Arrivals"}</h1>
			<div className="products-container">
				{/* aici fac map si returnez fiecare produs*/}
				{props.variant == "for him"
					? maleProducts.map((product)=>{
						return <Product product={product}/>
					})
					: femaleProducts.map((product) => {
							return <Product product={product} />;
					  })}
			</div>
		</section>
	);
}

export default Arrivals