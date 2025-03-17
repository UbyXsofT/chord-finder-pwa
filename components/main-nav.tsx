// components/main-nav.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./custom/ThemeSwitch";
import Icons from "./icons";

export default function MainNav() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const mainListMenu = [
		{
			title: "Home",
			href: "/",
			icon: Icons.Home,
		},
		{
			title: "Dashboard",
			href: "/dashboard",
			icon: Icons.LayoutDashboard,
			submenu: [
				{
					title: "Dashboard",
					href: "/dashboard",
					icon: Icons.LayoutDashboard,
				},
				{
					title: "Stats",
					href: "/dashboard/stats",
					icon: Icons.ChartSpline,
				},
				// Puoi aggiungere altre sottovoci qui
			],
		},
		{
			title: "Info",
			href: "/info",
			icon: Icons.Info,
		},
	];

	return (
		<nav className='p-4 flex justify-between items-center relative'>
			{/* Logo o Brand */}
			<div className='flex items-center space-x-4'>
				<Link
					href='/'
					className='text-xl font-bold flex items-center'
				>
					<Icons.Vault className='h-6 w-6 inline-block mr-2' />
					UBYXSOFT |
				</Link>
				{/* Menu Desktop */}
				<div className='hidden md:flex space-x-4'>
					{mainListMenu.map((item) =>
						item.submenu ? (
							<div
								key={item.title}
								className='relative group'
							>
								<button className='flex items-center hover:underline focus:outline-none'>
									<item.icon className='h-4 w-4 inline-block mr-1' />
									{item.title}
									<svg
										className='ml-1 h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M19 9l-7 7-7-7'
										/>
									</svg>
								</button>
								{/* Submenu */}
								<div className='absolute left-0 mt-2 w-40 bg-zinc-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50'>
									{item.submenu.map((subItem) => (
										<Link
											href={subItem.href}
											key={subItem.title}
											className='flex items-center px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-600'
										>
											<subItem.icon className='h-4 w-4 inline-block mr-2' />
											{subItem.title}
										</Link>
									))}
								</div>
							</div>
						) : (
							<Link
								href={item.href}
								key={item.title}
								className='flex items-center hover:underline'
							>
								<item.icon className='h-4 w-4 inline-block mr-1' />
								{item.title}
							</Link>
						)
					)}
				</div>
			</div>

			{/* Theme Switch e Hamburger Menu */}
			<div className='flex items-center space-x-4'>
				<ThemeSwitch />
				{/* Bottone per il Menu Mobile */}
				<button
					className='md:hidden focus:outline-none'
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					aria-label='Toggle menu'
				>
					{mobileMenuOpen ? <Icons.X className='h-6 w-6' /> : <Icons.Menu className='h-6 w-6' />}
				</button>
			</div>

			{/* Menu Mobile */}
			{mobileMenuOpen && (
				<div className='absolute top-full left-0 w-full bg-zinc-700 md:hidden z-50'>
					<div className='flex flex-col space-y-2 p-4'>
						{mainListMenu.map((item) =>
							item.submenu ? (
								<details
									key={item.title}
									className='group'
								>
									<summary className='flex items-center justify-between px-4 py-2 text-zinc-100 cursor-pointer hover:bg-zinc-600'>
										<div className='flex items-center'>
											<item.icon className='h-4 w-4 inline-block mr-2' />
											{item.title}
										</div>
										<svg
											className='h-4 w-4 transition-transform duration-200 group-open:rotate-180'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M19 9l-7 7-7-7'
											/>
										</svg>
									</summary>
									<div className='pl-6'>
										{item.submenu.map((subItem) => (
											<Link
												href={subItem.href}
												key={subItem.title}
												className='flex items-center px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-600'
												onClick={() => setMobileMenuOpen(false)} // Chiudi il menu mobile dopo il click
											>
												<subItem.icon className='h-4 w-4 inline-block mr-2' />
												{subItem.title}
											</Link>
										))}
									</div>
								</details>
							) : (
								<Link
									href={item.href}
									key={item.title}
									className='flex items-center px-4 py-2 text-zinc-100 hover:bg-zinc-600'
									onClick={() => setMobileMenuOpen(false)} // Chiudi il menu mobile dopo il click
								>
									<item.icon className='h-4 w-4 inline-block mr-1' />
									{item.title}
								</Link>
							)
						)}
					</div>
				</div>
			)}
		</nav>
	);
}
