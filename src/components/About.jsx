import React from 'react';
import { Link } from 'react-router-dom';
import volunteer from '../images/volunteer.jpg';
import org from '../images/org.jpg';
import '../styles/About.css';

function About() {
	return (
		<div className="about" id="about">
			<h3>
				We help volunteers and organizations connect to empower their community.{' '}
			</h3>
			<div className="container">
				{/* <img src={john} alt="john" /> */}
				<div className="col-2">
					<img src={volunteer} alt="volunteer needed" />
					<p>Volunteer your awesome skills to help others in your community.</p>
					<Link to="/register">
						<button className="button">Join Today</button>
					</Link>
				</div>
				<div className="col-2">
					<img src={org} alt="helping hands" />
					<p>
						Register your organization to connect with amazing volunteers ready
						to help.
					</p>
					<Link to="/register">
						<button className="button">Get Connected</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default About;
