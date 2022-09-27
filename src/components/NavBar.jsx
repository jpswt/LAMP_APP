import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { checkAuth } from '../Router';

import { useLocation } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const closeMenu = () => setClick(false);

	const [color, setColor] = useState(false);

	const changeColor = () => {
		if (window.scrollY >= 40) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	const loggedOut = (e) => {
		document.cookie = 'loggedIn=';
		document.cookie = 'jwt=';
		navigate('/');
		localStorage.clear();
		closeMenu();
	};

	window.addEventListener('scroll', changeColor);

	return checkAuth() ? (
		<div className={color ? 'header header-bg' : 'header'}>
			<nav className="navbar">
				<a href="/" className="logo">
					<img src={logo} alt="logo" />
				</a>
				<div className="hamburger" onClick={handleClick}>
					{click ? (
						<FaTimes size={30} style={{ color: '#ffffff' }} />
					) : (
						<FaBars size={30} style={{ color: '#ffffff' }} />
					)}
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						{/* <a href="#hero" onClick={closeMenu}>
							Home
						</a> */}
						<Link to="/dashboard" onClick={closeMenu}>
							My SparkBoard
						</Link>
					</li>
					<li className="nav-item">
						{/* <a href="/dashboard" onClick={closeMenu}>
							My Sparks
						</a> */}
						<Link to="/sparks" onClick={closeMenu}>
							My Sparks
						</Link>
					</li>
					<li className="nav-item">
						{/* <a href="/" onClick={closeMenu}>
							Login
						</a> */}
						<Link
							to="/"
							onClick={() => {
								// document.cookie = 'loggedIn=';
								// document.cookie = 'jwt=';
								// navigate('/');
								// localStorage.clear();
								closeMenu();
								loggedOut();
							}}
						>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	) : (
		<div className={color ? 'header header-bg' : 'header'}>
			<nav className="navbar">
				<a href="/" className="logo">
					<img src={logo} alt="logo" />
				</a>
				<div className="hamburger" onClick={handleClick}>
					{click ? (
						<FaTimes size={30} style={{ color: '#ffffff' }} />
					) : (
						<FaBars size={30} style={{ color: '#ffffff' }} />
					)}
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<a href="#hero" onClick={closeMenu}>
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#about" onClick={closeMenu}>
							About
						</a>
					</li>
					<li className="nav-item">
						{/* <a href="/" onClick={closeMenu}>
							Login
						</a> */}
						<Link to="/login" onClick={closeMenu}>
							Login
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
