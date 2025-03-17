import PageHeader from "@/components/page-header";

export default function Dashboard() {
	return (
		<>
			<PageHeader
				title='DASHBOARD'
				subtitle='Questa è la pagina Dashboard.'
			/>
			<div className='min-h-screen flex items-start justify-center pt-10'>
				<div className='text-center'></div>
			</div>
		</>
	);
}
