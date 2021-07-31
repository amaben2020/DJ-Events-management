import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import axios from 'axios';
import { API_URL } from 'config/index';

export default function Home({ events }) {
	console.log(events);
	return (
		<Layout>
			Find events here
			{events.length === 0 && <div>No events to showcase</div>}
			{events.map((evt) => (
				<h3 key={evt.id}>{evt.name}</h3>
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
