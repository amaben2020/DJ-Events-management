import React from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import styles from '@/styles/EventItem.module.css';
const EventItem = ({ evt }) => {
	return (
		<div className={styles.event}>
			<div className={styles.img}>
				<Image
					src={evt.image ? evt.image : '/images/event-default.png'}
					width={170}
					height={100}
				/>
			</div>
		</div>
	);
};

export default EventItem;
