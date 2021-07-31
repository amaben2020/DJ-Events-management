import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import router, { useRouter } from 'next/router';
const Layout = ({ title, description, keywords, children }) => {
	const route = useRouter();
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description ' content={description} />
				<meta name='keywords ' content={keywords} />
			</Head>
			<Header />
			{route.pathname === '/' && <Showcase />}
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;

Layout.defaultProps = {
	title: 'Dj Events | Find parties',
	description: 'Find other events',
	keywords: 'dj, events',
};
