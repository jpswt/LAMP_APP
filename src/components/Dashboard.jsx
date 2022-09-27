// import React, { useEffect, useState } from 'react';
// import VolCast from './volunteer/VolCast';
// import VolBoard from './volunteer/VolBoard';
// import NavBar from './NavBar';
// import OrgPage from './org/OrgPage';
// import axios from 'axios';
// import cookie from 'cookie';
// import VolRequests from './volunteer/VolRequests';
// console.log(cookie.parse(document.cookie));

// // function Dashboard() {
// const Dashboard = () => {
// 	const cookies = cookie.parse(document.cookie);
// 	// const [loading, setLoading] = useState(true);
// 	const [user, setUser] = useState({
// 		id: '',
// 		name: '',
// 		username: '',
// 		email: '',
// 		isOrg: null,
// 	});

// 	useEffect(() => {
// 		axios
// 			.get('https://light-path.herokuapp.com/users/user', {
// 				headers: {
// 					Authorization: cookies.jwt,
// 				},
// 			})
// 			.then((response) => {
// 				setUser(response.data[0]);
// 				console.log(response);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}, [cookies.jwt]);

// 	if (user.isOrg === 0)
// 		return (
// 			<div>
// 				<NavBar />
// 				<VolBoard user={user} />
// 			</div>
// 		);
// 	else {
// 		if (user.isOrg === 1) return <OrgPage user={user} />;
// 	}
// };

// export default Dashboard;

// // useEffect(() => {
// // 	axios
// // 		.get(`https://light-path.herokuapp.com/users/user`, {
// // 			headers: {
// // 				Authorization: cookies.jwt,
// // 			},
// // 		})
// // 		.then((response) => {
// // 			console.log(response.data);
// // 		})
// // 		.catch((error) => {
// // 			console.log(error);
// // 		});
// // });
