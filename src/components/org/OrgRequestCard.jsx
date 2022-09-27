import React from 'react';
import { Button } from '@mui/material';
import '../../styles/RequestCard.css';

function OrgRequestCard(props) {
	const {
		id,
		name,
		email,
		start_date,
		start_time,
		time_span,
		message,
		created_on,
		handleAccept,
		handleDecline,
		handleClick,
		handleOpen,
		accepted,
	} = props;
	console.log('RequestCard props: ', props);
	let orgTitle = name.toUpperCase();

	if (accepted === null) {
		return (
			<div className="requestCard" name={id}>
				<li>
					<div className="titleBar">
						<p>{orgTitle}</p>
					</div>
					<p>
						<span>Sent on:</span> {created_on}
					</p>
					<p>
						<span>Start Date:</span> {start_date}
					</p>
					<p>
						<span>Start Time:</span> {start_time}
					</p>
					<p>
						<span>Available for:</span> {time_span}
					</p>
					<p>
						<a
							href="#/"
							onClick={() => {
								handleClick();
								handleOpen();
							}}
						>
							View Details
						</a>
					</p>
					<div className="buttonContainer">
						<Button
							variant="contained"
							className="accept"
							onClick={handleAccept}
							id={id}
							name="accept"
						>
							Accept
						</Button>
						<Button
							variant="contained"
							className="decline"
							onClick={handleDecline}
							id={id}
							name="decline"
						>
							Decline
						</Button>
					</div>
				</li>
			</div>
		);
	} else {
		return (
			<div className="requestCard" name={id}>
				<li>
					<div className="titleBar">
						<p>{orgTitle}</p>
					</div>
					<p>
						<span>Sent on:</span> {created_on}
					</p>
					<p>
						<span>Start Date: </span>
						{start_date}
					</p>
					<p>
						<span>Start Time:</span> {start_time}
					</p>
					<p>
						<span>Available for: </span>
						{time_span}
					</p>
					<p>
						<a
							href="#/"
							onClick={() => {
								handleClick();
								handleOpen();
							}}
						>
							View Details
						</a>
					</p>
				</li>
			</div>
		);
	}
}

export default OrgRequestCard;
