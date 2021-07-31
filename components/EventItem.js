import React from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import styles from '@/styles/EventItem.module.css';
const EventItem = ({ evt }) => {
	return (
		<div className={styles.event}>
			<div>{styles.img}</div>
		</div>
	);
};

export default EventItem;
