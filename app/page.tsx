// app/page.tsx
import Guide from "@/components/Guide";
import PageHeader from "@/components/page-header";

export default function Home() {
	return (
		<>
			<PageHeader
				title='Benvenuto nel Template Next.js PWA'
				subtitle='Questo è un template con Next.js, TypeScript, Tailwind CSS e shadcn.'
			/>
			<div className='min-h-screen flex flex-col p-5'>
				<Guide />;
			</div>
		</>
	);
}
