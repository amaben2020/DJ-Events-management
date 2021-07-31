import React from 'react';
import Head from 'next/head';
import styles from './../styles/Layout.module.css';
const Layout = ({ title, description, keywords, children }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description ' content={description} />
				<meta name='keywords ' content={keywords} />
			</Head>

			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default Layout;

Layout.defaultProps = {
	title: 'Dj Events | Find parties',
	description: 'Find other events',
	keywords: 'dj, events',
};
