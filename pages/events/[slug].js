import Event from '@/components/Event';
import { API_URL } from 'config';
import React from 'react';

const SingleEventPage = ({ evt }) => {
	return (
		<div>
			<Event
				key={evt.id}
				name={evt.name}
				performers={evt.performers}
				description={evt.description}
				venue={evt.venue}
				address={evt.address}
				image={evt.image}
				date={evt.date}
				time={evt.time}
			/>
		</div>
	);
};

export default SingleEventPage;

//since its a single resource, no need to map
export const getServerSideProps = async ({ query: { slug }, params }) => {
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
