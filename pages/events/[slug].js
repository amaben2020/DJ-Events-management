import { API_URL } from 'config';
import React from 'react';

const SingleEventPage = ({ evt }) => {
	console.log(evt);
	return <div>This would be the page for slug data</div>;
};

export default SingleEventPage;

export const getServerSideProps = async ({ query: { slug }, params }) => {
	console.log(query);
	const response = await fetch(`${API_URL}/api/events/${slug}`);

	const event = await response.json();

	if (!event) {
		return {
			notFound: true,
		};
	}

	return {
		props: { evt: event[0] },
	};
};
