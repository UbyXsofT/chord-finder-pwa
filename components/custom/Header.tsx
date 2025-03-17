// "use client";

// import React from "react";
// import { useHeader } from "@/context/HeaderContext";
// import ThemeSwitch from "./ThemeSwitch";

// export default function Header() {
// 	const { headerText } = useHeader();
// 	return (
// 		<div className='flex p-2 items-center justify-between bg-zinc-800 text-zinc-100'>
// 			<h2 className='text-xl'>{headerText}</h2>
// 			<ThemeSwitch />
// 		</div>
// 	);
// }

// components/custom/Header.tsx
"use client";

import React from "react";
import { useHeader } from "@/context/HeaderContext";

interface HeaderProps {
	defaultText?: string;
}

export default function Header({ defaultText = "" }: HeaderProps) {
	const { headerText } = useHeader();
	return (
		<div className='flex p-2 items-center'>
			<h2 className='text-zinc-800 dark:text-zinc-200'>{headerText || defaultText}</h2>
		</div>
	);
}
