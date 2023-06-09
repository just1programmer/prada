import React from 'react'
import './Product.scss'
const Product = (props) => {
  return (
		<div className="product">
			<div className="product-image_wrapper">
					<img src={props.product.image} alt="" />
					<div className="overlay"></div>
			</div>
			<div className="details">
				<p>{props.product.colors}</p>
				<h5>{props.product.product_name}</h5>
			</div>
		</div>
	);
}

export default Product