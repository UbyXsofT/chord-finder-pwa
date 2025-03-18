// app/page.tsx
// import Guide from "@/components/Guide";
import { ChordFinder } from "@/components/ChordFinder";
import PageHeader from "@/components/page-header";

export default function Home() {
	return (
		<>
			<PageHeader
				title='Chord Finder - Visualizzatore Accordi'
				subtitle='Esplora accordi e progressioni in tutte le tonalità'
			/>
			<div className='min-h-screen bg-gray-50 flex flex-col p-5'>
				<main className='container mx-auto py-8 px-4'>
					<ChordFinder />
				</main>

				<footer className='text-center p-4 text-gray-500 text-sm'>
					<p>UbyXsofT © 2025 - {new Date().getFullYear() !== 2025 ? new Date().getFullYear() : ""} Chord Finder</p>
				</footer>
			</div>
		</>
	);
}
