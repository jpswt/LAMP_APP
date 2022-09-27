import React from 'react';
import '../styles/Hero.css';

function Hero() {
	return (
		<div className="hero" id="hero">
			<div className="content">
				<p>Volunteering </p>
				<p>Find volunteering opportunities.</p>
				<p>Use your spark to light a path in your community</p>
				<a href="#about">
					<button className="button">Learn More</button>
				</a>
			</div>
		</div>
	);
}

export default Hero;
