import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '@/components/Layout';
import Link from 'next/link';
const NotFoundPage = () => {
	return (
		<Layout>
			<div>
				<h1>
					{' '}
					<FaExclamationTriangle /> Page Not Found
				</h1>
				<h2>
					Kindly go back{' '}
					<Link href='/' style={{ color: 'red' }}>
						Home
					</Link>
				</h2>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
