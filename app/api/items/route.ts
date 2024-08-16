'use server';

import { NextResponse } from 'next/server';

interface Product {
	id: number;
	title: string;
	about: string;
	price: number;
	image: string;
	category: string;
}

const products: Product[] = [
	{
		id: 1,
		title: 'Running Shoes',
		about: 'High quality running shoes',
		price: 55,
		image: '../../../public/shoes.jpg',
		category: 'Clothing',
	},
	{
		id: 2,
		title: 'Galaxy S24 Ultra',
		about: 'Latest smartphone with great camera',
		price: 800,
		image: 'https://m-cdn.phonearena.com/images/phones/84388-800/Samsung-Galaxy-S24-Ultra.webp?w=1',
		category: 'Technology',
	},
	{
		id: 3,
		title: 'Redmi watch 2 lite',
		about: 'State of the art smartwatch',
		// $0 Means not available
		price: 0,
		image: 'https://api2.zoomit.ir/media/652cfe428716201626cfb065?w=640&q=75',
		category: 'Technology',
	},
];

export const POST = async () => {
	return NextResponse.json(products);
};
