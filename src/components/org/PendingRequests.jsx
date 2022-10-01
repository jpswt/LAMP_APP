import React, { useState } from 'react';
import OrgRequestCard from './OrgRequestCard';
import ReactPaginate from 'react-paginate';
import pendingpic from '../../images/pending.png';

import Details from './Details';

import '../../styles/Requests.css';

function PendingRequests(props) {
	const {
		pending,
		handleAccept,
		handleDecline,
		handleOpen,
		handleClose,
		handleClick,
		open,
		selectRequest,
	} = props;
	console.log('Pending props: ', props.pending);

	const [pageNumber, setPageNumber] = useState(0);

	const requestsPerPage = 6;
	const pageVisited = pageNumber * requestsPerPage;
	const pageCount = Math.ceil(pending.length / requestsPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const displayRequests = pending
		.slice(pageVisited, pageVisited + requestsPerPage)
		.map((requests, index) => {
			let daySent = requests.created_on;
			let date =
				daySent.slice(5, 7) +
				'-' +
				daySent.slice(8, 10) +
				'-' +
				daySent.slice(0, 4);
			return (
				<div className="requestContainer" key={index}>
					<ol>
						<OrgRequestCard
							key={index}
							id={requests.id}
							name={requests.name}
							email={requests.email}
							org_id={requests.org_id}
							start_date={requests.start_date}
							start_time={requests.start_time}
							time_span={requests.time_span}
							message={requests.message}
							created_on={date}
							isAccepted={requests.accepted}
							handleAccept={handleAccept}
							handleDecline={handleDecline}
							handleOpen={handleOpen}
							handleClick={() => handleClick(requests)}
						/>
					</ol>
					<div className="modalContainer">
						<Details
							handleClose={handleClose}
							details={selectRequest}
							open={open}
						/>
					</div>
				</div>
			);
		});
	if (pending.length === 0) {
		return (
			<div className="imgContainer">
				<img src={pendingpic} alt="No pending requests" />
			</div>
		);
	}
	if (pending.length < 7) {
		return <div className="requestGrid">{displayRequests}</div>;
	} else {
		return (
			<div>
				<div className="requestGrid">{displayRequests}</div>
				<ReactPaginate
					previousLabel={'<'}
					nextLabel={'>'}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={'pagination'}
					activeClassName={'active'}
				/>
			</div>
		);
	}
}

export default PendingRequests;
