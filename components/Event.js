import React from 'react';
import styles from '@/styles/Event.module.css';
import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
const Event = ({
	name,
	id,
	performers,
	address,
	venue,
	description,
	image,
	date,
	time,
}) => {
	const deleteEvent = (e) => {
		alert('deleted', e);
	};

	return (
		<div className={styles.event}>
			<div className={styles.controls}>
				<Link href={`/events/edit/${id}`}>
					<a className={styles.controls}>
						<FaPencilAlt />
						Edit Event{' '}
					</a>
				</Link>

				<Link href='#'>
					<a className={styles.delete} onClick={deleteEvent}>
						{' '}
						<FaTimes /> Delete Event
					</a>
				</Link>
			</div>
			<span>
				{date} at {time}
			</span>
			<h1>{name}</h1>

			{image && (
				<div className={styles.image}>
					<Image src={image} width={960} height={600} />
				</div>
			)}

			<h3>{performers}</h3>
			<h3>{description}</h3>

			<h3>Venue: {venue}</h3>
			<h3>Address: {address}</h3>

			<div>Map space from mapbox</div>

			<Link href='/events'>
				<a className={styles.back}> {'  <  '} Go back </a>
			</Link>
		</div>
	);
};

export default Event;
