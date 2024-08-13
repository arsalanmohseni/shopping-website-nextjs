import React from 'react';
import { useEffect } from 'react';

const page = () => {
	const requestOptions = {
		method: 'GET',
		redirect: 'follow' as RequestRedirect,
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					'localhost:3000/api/items/',
					requestOptions,
				);
				const products = await response.json();
				console.log(products);
			} catch (error) {
				console.log('error', error);
			}
		}
		fetchData();
	});

	return (
		<div>
			<h1 className="text-center text-6xl font-bold">Shop</h1>
			<div className="divider"></div>
		</div>
	);
};

export default page;
