// app/dashboard/stats/page.tsx
"use client";

import { useEffect } from "react";
import { useHeader } from "@/context/HeaderContext";
import MainMenu from "@/components/custom/MainMenu";
import PageHeader from "@/components/page-header";

export default function StatsPage() {
	const { setHeaderText } = useHeader();

	useEffect(() => {
		setHeaderText("Dashboard Stats Header modificata dalla pagina tramite context");
	}, [setHeaderText]);

	return (
		<>
			<PageHeader
				title='Dashboard Stats'
				subtitle='Questa è la pagina delle statistiche del dashboard.'
			/>
			<div className='min-h-screen flex items-start justify-center pt-10'>
				<div className='text-center'>
					<MainMenu />
				</div>
			</div>
		</>
	);
}
