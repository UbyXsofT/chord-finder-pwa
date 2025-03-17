// components/custom/ThemeSwitch.tsx
"use client";

import React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";
import Icons from "@/components/icons"; // Icone per indicare il tema

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className='flex items-center space-x-2 m-1 p-1'>
			<Icons.Sun className='h-5 w-5 text-yellow-500' />
			<Switch
				checked={theme === "dark"}
				onCheckedChange={toggleTheme}
			/>
			<Icons.Moon className='h-5 w-5 text-gray-800' />
		</div>
	);
}
