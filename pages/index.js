import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import axios from 'axios';
import { API_URL } from 'config/index';
import EventItem from '@/components/EventItem';
import Link from 'next/link';

export default function Home({ events }) {
	return (
		<Layout>
			Find events here
			{events.length === 0 && <div>No events to showcase</div>}
			{events.map((evt) => (
				<EventItem key={evt.id} evt={evt} />
			))}
			<div>
				{events.length && (
					<Link href='/events'>
						<a className='btn-secondary'>View All</a>
					</Link>
				)}
			</div>
		</Layout>
	);
}

export const getStaticProps = async () => {
	const response = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=4`);

	const events = await response.json();

	return {
		props: events,
		revalidate: 1,
	};
};
