// app/head.tsx
export default function Head() {
	return (
		<>
			{/* Meta Tag per Apple */}
			<meta
				name='mobile-web-app-capable'
				content='yes'
			/>

			<meta
				name='apple-mobile-web-app-status-bar-style'
				content='default'
			/>
			<meta
				name='apple-mobile-web-app-title'
				content='UbyXsoft'
			/>

			{/* Meta Tag per Windows */}
			<meta
				name='msapplication-TileColor'
				content='#0A0909'
			/>
			<meta
				name='msapplication-TileImage'
				content='/assets/icons/windows11/Square150x150Logo.scale-100.png'
			/>
			<meta
				name='msapplication-config'
				content='/browserconfig.xml'
			/>

			{/* Tema e viewport */}
			<meta
				name='theme-color'
				content='#0A0909'
			/>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
		</>
	);
}
