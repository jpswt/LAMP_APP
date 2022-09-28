import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import '../styles/Login.css';
import logoBW from '../images/lampbw-sm.png';
import loginImg from '../images/loginImg.jpg';
import axios from 'axios';

function Register() {
	const navigate = useNavigate();

	const [newUser, setNewUser] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
		// address: '',
		// phone: '',
		isOrg: '' || null,
		userCreated: false,
	});
	console.log(newUser);

	const [errorMsg, setErrorMsg] = useState('');

	const [active, setActive] = useState('');

	const handleClick = (event) => {
		setActive(event.target.id);
	};

	const handleChange = (e) => {
		const newUserInput = { ...newUser };
		newUserInput[e.target.name] = e.target.value;
		setNewUser(newUserInput);
	};

	const handleUserSelection = (e) => {
		if (e.target.innerText === 'Volunteer') {
			setNewUser((prev) => ({ ...prev, isOrg: 0 }));
		} else if (e.target.innerText === 'Non-Profit Org') {
			setNewUser((prev) => ({ ...prev, isOrg: 1 }));
		}
	};

	const showOrgForm = () => {
		if (newUser.isOrg === 1) {
			return (
				<>
					<TextField
						required
						onChange={handleChange}
						value={newUser.address}
						id="address"
						type="text"
						label="Address"
						placeholder="123 Main St Somewhere, USA 12345"
						name="address"
						variant="outlined"
						sx={{
							'& .MuiInputLabel-root.Mui-focused': { color: 'black' },
							'& .MuiOutlinedInput-root.Mui-focused': {
								'& > fieldset': { borderColor: 'orange' },
							},
							'marginBottom': '1rem',
							'width': '30ch',
						}}
					/>
					<TextField
						required
						onChange={handleChange}
						value={newUser.phone}
						id="phone"
						type="tel"
						label="Phone Number"
						name="phone"
						pattern="[0-9]{10}"
						variant="outlined"
						sx={{
							'& .MuiInputLabel-root.Mui-focused': { color: 'black' },
							'& .MuiOutlinedInput-root.Mui-focused': {
								'& > fieldset': { borderColor: 'orange' },
							},
							'marginBottom': '1rem',
							'width': '30ch',
						}}
					/>
					<TextField
						required
						onChange={handleChange}
						value={newUser.website}
						id="website"
						type="text"
						label="Website"
						placeholder="www.your-site.org"
						name="website"
						// pattern="[0-9]{10}"
						variant="outlined"
						sx={{
							'& .MuiInputLabel-root.Mui-focused': { color: 'black' },
							'& .MuiOutlinedInput-root.Mui-focused': {
								'& > fieldset': { borderColor: 'orange' },
							},
							'marginBottom': '1rem',
							'width': '30ch',
						}}
					/>
				</>
			);
		} else {
			return null;
		}
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (!newUser.isOrg) {
			axios
				.post('https://light-path.herokuapp.com/register/volunteer', {
					name: newUser.name,
					username: newUser.username,
					email: newUser.email,
					password: newUser.password,
					isOrg: newUser.isOrg,
				})
				.then((response) => {
					console.log(response);
					navigate('/login');
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			axios
				.post('https://light-path.herokuapp.com/register/org', {
					name: newUser.name,
					username: newUser.username,
					email: newUser.email,
					password: newUser.password,
					address: newUser.address,
					phone: newUser.phone,
					website: newUser.website,
					isOrg: newUser.isOrg,
				})
				.then((response) => {
					console.log(response);
					navigate('/login');
				})
				.catch((error) => {
					console.log(error);
					setErrorMsg(
						'Username/Email already exist.  Please try again or sign in.'
					);
				});
		}
	};

	return (
		<div className="login">
			<div className="content">
				<img
					className="image"
					src={loginImg}
					alt="man standing in field with sunset in background"
				/>
				<div className="col-2">
					<Paper
						elevation={4}
						sx={{
							padding: '1rem 0 1rem 0',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 4,
						}}
					>
						<img className="logo" src={logoBW} alt="lamp logo" />
						<div className="selection">Choose one...</div>
						<div className="choose-user">
							<button
								required
								key={1}
								className={active === '1' ? 'active' : undefined}
								id="1"
								onClick={(e) => {
									handleUserSelection(e);
									handleClick(e);
								}}
							>
								Volunteer
							</button>
							<button
								key={2}
								className={active === '2' ? 'active' : undefined}
								id="2"
								name="organization"
								onClick={(e) => {
									handleUserSelection(e);
									handleClick(e);
								}}
							>
								Non-Profit Org
							</button>
						</div>

						<Container
							sx={{
								marginTop: '1rem',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<form
								onSubmit={handleRegister}
								style={{
									width: '35ch',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}
							>
								<TextField
									required
									onChange={handleChange}
									value={newUser.name}
									id="name"
									type="text"
									label="Name"
									name="name"
									variant="outlined"
									sx={{
										'& .MuiInputLabel-root.Mui-focused': { color: 'black' },
										'& .MuiOutlinedInput-root.Mui-focused': {
											'& > fieldset': { borderColor: 'orange' },
										},
										'marginBottom': '1rem',
										'width': '30ch',
									}}
								/>
								<TextField
									required
									onChange={handleChange}
									value={newUser.username}
									id="username"
									type="text"
									label="Username"
									name="username"
									variant="outlined"
									sx={{
										'& .MuiInputLabel-root.Mui-focused': { color: 'black' },
										'& .MuiOutlinedInput-root.Mui-focused': {
											'& > fieldset': { borderColor: 'orange' },
										},
										'marginBottom': '1rem',
										'width': '30ch',
									}}
								/>
								<TextField
									required
									onChange={handleChange}
									value={newUser.email}
									id="email"
									type="email"
									label="Email"
									name="email"
									variant="outlined"
									sx={{
										'& .MuiInputLabel-root.Mui-focused': { color: 'black' },
										'& .MuiOutlinedInput-root.Mui-focused': {
											'& > fieldset': { borderColor: 'orange' },
										},
										'marginBottom': '1rem',
										'width': '30ch',
									}}
								/>
								<TextField
									required
									onChange={handleChange}
									value={newUser.password}
									id="password"
									type="password"
									label="Password"
									name="password"
									variant="outlined"
									sx={{
										'& .MuiInputLabel-root.Mui-focused': { color: 'black' },
										'& .MuiOutlinedInput-root.Mui-focused': {
											'& > fieldset': { borderColor: 'orange' },
										},
										'marginBottom': '1rem',
										'width': '30ch',
									}}
								/>
								{showOrgForm()}

								<button
									className="button"
									type="submit"
									variant="contained"
									style={{ marginTop: '1rem' }}
								>
									REGISTER
								</button>
								{errorMsg ? <p className="">{errorMsg}</p> : null}
							</form>
							<span>
								Already a Member? <Link to="/login">Sign in</Link>
							</span>
						</Container>
					</Paper>
				</div>
			</div>
		</div>
	);
}

export default Register;
