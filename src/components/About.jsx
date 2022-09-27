import React from 'react';
import { Link } from 'react-router-dom';
import volunteer from '../images/volunteer.jpg';
import org from '../images/org.jpg';
import '../styles/About.css';

function About() {
	return (
		<div className="about" id="about">
			<h3>
				Lamp helps volunteers connect with organizations to share their amazing
				skills.{' '}
			</h3>
			<div className="container">
				{/* <img src={john} alt="john" /> */}
				<div className="col-2">
					<img src={volunteer} alt="volunteer needed" />
					<p>Volunteer your awesome skills to help others in your community!</p>
					<Link to="/register">
						<button className="button">Get Started</button>
					</Link>
				</div>
				<div className="col-2">
					<img src={org} alt="helping hands" />
					<p>
						Join our community and connect with amazing people ready to help!
					</p>
					<Link to="/register">
						<button className="button">Get Started</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default About;
