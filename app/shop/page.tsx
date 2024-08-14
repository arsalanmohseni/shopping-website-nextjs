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
		method: 'POST',
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
				console.log(data);
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
					<div className="card w-96 bg-base-100 shadow-xl">
						<figure>
							<img
								src={product.image}
								alt="Shoes"
								className={`${product.price === 0 ? '' : 'blur-md contrast-200 grayscale filter'}`}
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">{product.name}</h2>
							<p>{product.description}</p>
							<p className="text-2xl font-bold">
								{product.price === 0
									? 'Not available'
									: '$' + product.price + ''}
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Buy Now
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ShopPage;
