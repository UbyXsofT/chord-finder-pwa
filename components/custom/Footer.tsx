// components/custom/Footer.tsx
"use client";

import React from "react";

export default function Footer() {
	return (
		<footer className='bg-zinc-800 text-zinc-100 p-4 text-center'>
			<p>&copy; {new Date().getFullYear()} La Tua Azienda. Tutti i diritti riservati.</p>
		</footer>
	);
}
