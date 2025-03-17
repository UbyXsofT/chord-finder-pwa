// app/info/layout.tsx
export default function InfoLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<header className=' bg-yellow-700 '>
				<h2>Layout Info predefinito per info page</h2>
			</header>
			<main>{children}</main>
		</div>
	);
}
