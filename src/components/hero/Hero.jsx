import React from 'react';
import './Hero.scss';
import hero_image from '../../assets/hero-woman.jpg';

const Hero = (props) => {
  return (
		<section className="hero">
			{props.variant == "la pradina" ? (
				<div className="hero--image_container-pradina">
					<div className="hero_la-pradina-cta">
						<h2>La Pradina</h2>
						<button className="cta">Everything for her</button>
					</div>
				</div>
			) : (
				<>
					<div className="hero--image_container">
						<img src={hero_image} alt="" className="hero--image" />
					</div>
					<div className="hero-cta">
						<h2>Summer 2021</h2>
						<p>
							Explore sports-inspired ready-to-wear and bold accessories from
							the latest collection.
						</p>
						<button className="cta">New in for her</button>
					</div>
				</>
			)}
		</section>
	);
}

export default Hero