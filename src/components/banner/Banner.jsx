import React from 'react'
import './Banner.scss'
import heart from "../../assets/heart.svg"
import bag from "../../assets/bag.svg";

const Banner = () => {
  return (
		<div className="banner">
			<h5>Shop the sale collection</h5>
			<div className="actions">
				<a href="#">Sign In / Register</a>
				<img src={heart} alt="" />
				<a href="#">
					<img src={bag} alt="" /> Bag
				</a>
			</div>
		</div>
	);
}

export default Banner