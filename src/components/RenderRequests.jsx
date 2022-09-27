import React, { useEffect, useState } from 'react';
import VolRequests from './volunteer/VolRequests';
import NavBar from './NavBar';
import OrgRequests from './org/OrgRequests';
import axios from 'axios';
import cookie from 'cookie';
console.log(cookie.parse(document.cookie));

// function Dashboard() {
const RenderRequests = () => {
	const cookies = cookie.parse(document.cookie);
	// const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({
		id: '',
		name: '',
		username: '',
		email: '',
		isOrg: null,
	});

	useEffect(() => {
		axios
			.get('https://light-path.herokuapp.com/users/user', {
				headers: {
					Authorization: cookies.jwt,
				},
			})
			.then((response) => {
				setUser(response.data[0]);
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [cookies.jwt]);

	if (user.isOrg === 0)
		return (
			<div>
				<NavBar />
				<VolRequests user={user} />
			</div>
		);
	else {
		return (
			<div>
				<NavBar />
				<OrgRequests user={user} />
			</div>
		);
	}
};

export default RenderRequests;

// useEffect(() => {
// 	axios
// 		.get(`https://light-path.herokuapp.com/users/user`, {
// 			headers: {
// 				Authorization: cookies.jwt,
// 			},
// 		})
// 		.then((response) => {
// 			console.log(response.data);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// });
