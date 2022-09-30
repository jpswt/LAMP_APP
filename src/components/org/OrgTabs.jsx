import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AcceptedRequests from './AcceptedRequests';
import PendingRequests from './PendingRequests';
import DeclinedRequests from './DeclinedRequests';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3, color: 'black' }}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		'id': `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function OrgTabs(props) {
	const {
		user,
		accepted,
		declined,
		pending,
		handleAccept,
		handleDecline,
		handleOpen,
		handleClose,
		handleClick,
		open,
		selectRequest,
	} = props;
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const [acceptedData, setAcceptedData] = useState(accepted);
	const [declinedData, setDeclinedData] = useState(declined);

	const handleRemove = (id) => {
		console.log(id);
		const newAcceptedData = acceptedData.filter((d) => d.id !== id);
		setAcceptedData(
			newAcceptedData,
			localStorage.setItem('accepteddata', JSON.stringify(newAcceptedData))
		);
		const newDeclinedData = declinedData.filter((d) => d.id !== id);
		setDeclinedData(
			newDeclinedData,
			localStorage.setItem('declineddata', JSON.stringify(newDeclinedData))
		);
	};

	useEffect(() => {
		const newAcceptedData = localStorage.getItem('accepteddata');
		if (newAcceptedData) setAcceptedData(JSON.parse(newAcceptedData));
	}, []);

	useEffect(() => {
		const newDeclinedData = localStorage.getItem('declineddata');
		if (newDeclinedData) setDeclinedData(JSON.parse(newDeclinedData));
	}, []);

	return (
		<Box sx={{ width: '100%' }}>
			<Box
				sx={{
					// paddingBottom: 1,
					// borderBottom: 1,
					borderColor: 'var(--primary-color)',
					display: 'inline-flex',
					width: '100%',
					justifyContent: 'space-between',
					color: 'black',
				}}
			>
				<h3>
					{user.name.charAt(0).toUpperCase()}
					{user.name.slice(1)}'s Sparks
				</h3>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					allowScrollButtonsMobile
					sx={{
						'& .MuiButtonBase-root.MuiTab-root': {
							fontSize: 15,
							color: 'var(--nav-color)',
						},
						'& .MuiButtonBase-root.MuiTab-root:hover': {
							fontSize: 15,
							color: 'var(--secondary-dark)',
						},
						'& button': {
							borderTopLeftRadius: '12px',
							borderTopRightRadius: '12px',
						},
					}}
					aria-label="scrollable auto tabs example"
					TabIndicatorProps={{
						style: {
							background: 'var(--primary-color)',
							paddingTop: '0.2rem',
						},
					}}
				>
					<Tab label="Pending Sparks" {...a11yProps(0)} />
					<Tab label="Accepted Sparks" {...a11yProps(1)} />
					<Tab label="Declined Sparks" {...a11yProps(2)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<PendingRequests
					pending={pending}
					handleAccept={handleAccept}
					handleDecline={handleDecline}
					handleOpen={handleOpen}
					handleClose={handleClose}
					handleClick={handleClick}
					open={open}
					selectRequest={selectRequest}
				/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<AcceptedRequests
					acceptedData={acceptedData}
					accepted={accepted}
					handleRemove={handleRemove}
					handleOpen={handleOpen}
					handleClose={handleClose}
					handleClick={handleClick}
					open={open}
					selectRequest={selectRequest}
				/>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<DeclinedRequests
					declinedData={declinedData}
					declined={declined}
					handleRemove={handleRemove}
					handleOpen={handleOpen}
					handleClose={handleClose}
					handleClick={handleClick}
					open={open}
					selectRequest={selectRequest}
				/>
			</TabPanel>
		</Box>
	);
}
