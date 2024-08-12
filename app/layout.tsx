import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_Components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Online Shop',
	description: 'A simple online shop created by next js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
        <html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className='mt-10'>{children}</main>
			</body>
		</html>
	);
}
