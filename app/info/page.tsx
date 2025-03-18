import MainMenu from "@/components/custom/MainMenu";
import PageHeader from "@/components/page-header";

export default function InfoPage() {
	return (
		<>
			<PageHeader
				title='Informazioni'
				subtitle='Questa è la pagina delle info.'
			/>
			<div className='min-h-screen flex items-start justify-center pt-10'>
				<div className='text-center'>
					{/* <h1 className='text-4xl font-bold mb-4 text-zinc-800'>Informazioni</h1>
				<p className='mb-8 text-zinc-600'>Step install - Next.js, TypeScript, Tailwind CSS e shadcn.</p> */}
					<MainMenu />
				</div>
			</div>
		</>
	);
}

// Step 1: Setup Next.js con TypeScript
// Prima di tutto, creiamo un progetto Next.js con TypeScript:

// bash
// Copia codice
// npx create-next-app@latest chord-finder-pwa -ts
// cd chord-finder-pwa
// Step 2: Installare le dipendenze necessarie
// Dobbiamo aggiungere alcune dipendenze per PWA, Tailwind CSS e shadcn:

// PWA Support - Installiamo il pacchetto next-pwa per gestire la configurazione PWA.
// bash
// Copia codice
// npm install next-pwa
// Tailwind CSS - Configuriamo Tailwind CSS.
// bash
// Copia codice
// npm install tailwindcss postcss autoprefixer
// npx tailwindcss init -p
