import React from 'react'
import './Nav.scss'
const Nav = () => {
  return (
		<div>
			<a href="#">
				<h1>Prada</h1>
			</a>
			<ul className="navigation">
				<li>
					<a href="#">Women</a>
				</li>
				<li>
					<a href="#">Men</a>
				</li>
				<li>
					<a href="#">Children</a>
				</li>
				<li>
					<a href="#">Sale</a>
				</li>
				<li>
					<a href="#">New In</a>
				</li>
				<li>
					<a href="#">Home collection</a>
				</li>
			</ul>
		</div>
	);
}

export default Nav