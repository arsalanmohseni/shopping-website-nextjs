'use client';

import React, { ReactNode } from 'react';

/**
 * Renders the Shop page with a list of products retrieved from the API.
 * @returns {ReactNode} The rendered Shop page.
 */
const ShopPage = (): React.ReactNode => {
	interface Product {
		id: number;
		name: string;
		description: string;
		price: number;
		image: string;
		category: string;
		isAvailable: boolean;
	}

	const requestOptions: RequestInit = {
		method: 'GET',
		redirect: 'follow',
	};

	const [products, setProducts] = React.useState<Product[]>([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchProducts = async (): Promise<void> => {
			try {
				const response = await fetch(
					'http://localhost:3000/api/items/',
					requestOptions,
				);
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProducts();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1 className="text-center text-6xl font-bold">Shop</h1>
			<div className="divider">
				{products.map((product) => (
					<div key={product.id}>
						<h2>{product.name}</h2>
						<p>{product.description}</p>
						<p>${product.price}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ShopPage;
