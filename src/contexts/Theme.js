import React, { createContext, useState } from 'react';

export const RequestContext = createContext();

const RequestContextProvider = (props) => {
	const [requests, setRequests] = useState({
		pending: { pending },
		accepted: { accepted },
		declined: { declined },
	});
};

export default RequestContextProvider;
