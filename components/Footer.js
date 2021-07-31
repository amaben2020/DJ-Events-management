import React from 'react';
import Link from 'next/link';
import styles from './../styles/Footer.module.css';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>Copy &copy; Dj events 2021</p>
			<p>
				<Link href='/about'>About this page</Link>
			</p>
		</footer>
	);
};

export default Footer;
