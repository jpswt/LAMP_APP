import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { Button } from '@mui/material';
import { ImFire } from 'react-icons/im';

import '../../styles/OrgsCard.css';

const OrgInfo = (props) => {
	const {
		id,
		name,
		username,
		email,
		address,
		phone,
		handleOpen,
		handleClick,
		selectOrg,
	} = props;

	const phoneConvert = () => {
		let numericPhone = phone.replace(/\D/g, '');
		let formatPhone = `${numericPhone.slice(0, 3)}-${numericPhone.slice(
			3,
			6
		)}-${numericPhone.slice(6, 10)}`;
		return formatPhone;
	};

	return (
		<div className="orgsCard">
			<li>
				<p>{name}</p>
				<p>{address}</p>
				<p>
					<FaPhoneAlt
						style={{ marginRight: '10px', paddingTop: '4px', width: '12px' }}
					/>
					{phoneConvert()}
				</p>
				<p>
					<FaEnvelope
						style={{ marginRight: '10px', paddingTop: '4px', width: '12px' }}
					/>
					{email}
				</p>
				<div className="btnContainer">
					<Button
						id={username}
						onClick={(e) => {
							handleClick(e);
							handleOpen(e);
						}}
						sx={{
							'padding': '0.6rem',
							'width': '140px',
							'backgroundColor': 'hsla(22, 86%, 57%, 0.85)',
							'borderColor': 'hsla(22, 84%, 57%, 0.9)',
							'borderRadius': '4px',
							'color': 'white',
							'cursor': 'pointer',
							':hover': {
								bgcolor: 'hsla(22, 86%, 60%, 0.9)', // theme.palette.primary.main
								color: 'white',
							},
						}}
						endIcon={<ImFire />}
					>
						Send Spark
					</Button>
					{/* <button
						id={username}
						onClick={(e) => {
							handleClick(e);
							handleOpen(e);
						}}
					>
						Send Spark
					</button> */}
				</div>
			</li>
		</div>
	);
};

export default OrgInfo;
