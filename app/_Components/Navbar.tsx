import React from 'react';

const Navbar = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
					>
						<li>
							<a href="/shop" className='text-xl font-bold'>Shop</a>
						</li>
						<li>
							<a href="/about" className='text-xl font-bold'>About us</a>
						</li>
						<li>
							<a href="/contact" className='text-xl font-bold'>Conatct us</a>
						</li>
					</ul>
				</div>
				<a
					className="btn btn-ghost text-3xl"
					href="/"
				>
					Codi lab
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 *:text-2xl">
					<li>
						<a href="/shop">Shop</a>
					</li>
					<li>
						<a href="/about">About us</a>
					</li>
					<li>
						<a href="/contact">Conatct us</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<a
					className="btn btn-accent text-xl"
					target="_blank"
					href="https://github.com/arsalanmohseni/shopping-website-nextjs"
				>
					Github repo
				</a>
			</div>
		</div>
	);
};

export default Navbar;
