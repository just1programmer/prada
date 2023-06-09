import React from 'react'
import './Footer.scss'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import locationmarker from '../../assets/mapmarker.png'

const Footer = () => {
  return (
		<footer>
			<div className="company">
				<h3>Company</h3>
				<ul>
					<li>Fondazione Prada</li>
					<li>Prada Group</li>
					<li>Luna Rosa</li>
					<li>Sustainability</li>
					<li>Work with us</li>
				</ul>
			</div>
			<div className="terms">
				<h3>Legal terms and conditions</h3>
				<ul>
					<li>Legal Notice</li>
					<li>Privacy Policy</li>
					<li>Cookie Policy</li>
					<li>Sitemap</li>
				</ul>
			</div>
			<div className="follow-us">
				<h3>Follow us</h3>
				<div className="social-icons">
					<img src={twitter} alt="" />
					<img src={instagram} alt="" />
					<img src={facebook} alt="" />
					<img src={youtube} alt="" />
				</div>
			</div>
			<div className="location">
				<img src={locationmarker} alt="" /> <span>Store Locator</span>
			</div>
		</footer>
	);
}

export default Footer