import React, { useState, useEffect } from 'react';
import OrgRequestCard from './OrgRequestCard';
import ReactPaginate from 'react-paginate';

import Details from './Details';

import '../../styles/Requests.css';

function AcceptedRequests(props) {
	const {
		acceptedData,
		accepted,
		handleRemove,
		handleOpen,
		handleClick,
		handleClose,
		open,
		selectRequest,
	} = props;
	console.log('Pending props: ', props.accepted);

	const [pageNumber, setPageNumber] = useState(0);

	const requestsPerPage = 6;
	const pageVisited = pageNumber * requestsPerPage;
	const pageCount = Math.ceil(acceptedData.length / requestsPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const displayRequests = acceptedData
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
							name={requests.name}
							email={requests.email}
							org_id={requests.org_id}
							start_date={requests.start_date}
							start_time={requests.start_time}
							time_span={requests.time_span}
							message={requests.message}
							created_on={date}
							isAccepted={requests.accepted}
							handleOpen={handleOpen}
							handleClick={() => handleClick(requests)}
							handleRemove={() => handleRemove(requests.id)}
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
	if (acceptedData.length === 0) {
		return 'Currently no accepted requests';
	}
	if (acceptedData.length < 7) {
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

export default AcceptedRequests;
