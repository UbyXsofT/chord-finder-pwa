// components/MainMenu.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import Icons from "@/components/icons";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

interface MenuItem {
	title: string;
	href: string;
	description: string;
	icon: React.ElementType;
}

const mainListMenu: MenuItem[] = [
	{
		title: "Home page",
		href: "/",
		description: "Benvenuto nella Home Page del Template Next.js PWA",
		icon: Icons.Home,
	},
	{
		title: "Info page",
		href: "/info",
		description: "Per utenti vedenti per visualizzare contenuti disponibili dietro un link.",
		icon: Icons.Info,
	},
	{
		title: "Dashboard page",
		href: "/dashboard/",
		description: "Benvenuto nella pagina dashboard",
		icon: Icons.LayoutDashboard,
	},
	{
		title: "Dashboard stats page",
		href: "/dashboard/stats",
		description: "Benvenuto nella pagina dashboard stats",
		icon: Icons.ChartSpline,
	},
];

export default function MainMenu() {
	return (
		<div className='p-2'>
			<NavigationMenu>
				<NavigationMenuList>
					{mainListMenu.map((itemMenu) => (
						<NavigationMenuItem key={itemMenu.title}>
							<Link
								href={itemMenu.href}
								passHref
								legacyBehavior
							>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									<itemMenu.icon className='mr-2 h-5 w-5' />
									{itemMenu.title}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
