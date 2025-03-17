// components/page-header.tsx
"use client";

import React from "react";

interface PageHeaderProps {
	title: string;
	subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
	return (
		<header className='bg-zinc-200 dark:bg-zinc-700 p-6 text-center'>
			<h1 className='text-3xl font-bold text-zinc-800 dark:text-zinc-100'>{title}</h1>
			{subtitle && <p className='text-zinc-600 dark:text-zinc-300'>{subtitle}</p>}
		</header>
	);
}
