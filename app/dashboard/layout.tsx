// app/dashboard/layout.tsx
"use client";

import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import React from "react";
import { HeaderProvider } from "@/context/HeaderContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<HeaderProvider defaultText='Dashboard Header modificata tramite context'>
			<Header />
			<div className='min-h-screen flex flex-col'>
				<main className='flex-grow'>{children}</main>
				<Footer />
			</div>
		</HeaderProvider>
	);
}
