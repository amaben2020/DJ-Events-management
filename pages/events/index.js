import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import axios from 'axios';
import { API_URL } from 'config/index';
import EventItem from '@/components/EventItem';

export default function Home({ events }) {
	console.log(events);
	return (
		<Layout>
			Find events here
			{events.length === 0 && <div>No events to showcase</div>}
			{events.map((evt) => (
				<EventItem key={evt.id} evt={evt} />
			))}
		</Layout>
	);
}

export const getStaticProps = async () => {
	const response = await fetch(`${API_URL}/api/events`);

	const events = await response.json();

	return {
		props: events,
		revalidate: 1,
	};
};
