import React from 'react';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
	return (
		<div className="hero" id="hero">
			<div className="content">
				<p>Volunteering Counts </p>
				<p>Find volunteering opportunities.</p>
				<p>Use your spark to light a path in your community</p>
				{/* <a href="#about">
					<button className="button">Get Started</button>
				</a> */}
				<Link to="/register">
					<button className="button">Get Started</button>
				</Link>
			</div>
		</div>
	);
}

export default Hero;
