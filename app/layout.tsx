// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderProviderWrapper from "@/context/HeaderProviderWrapper";
import ThemeProviderWrapper from "@/context/ThemeProviderWrapper";
// import MainNav from "@/components/main-nav";
// import Footer from "@/components/custom/Footer";
import React from "react";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: "Chord Finder",
	description: "Template con Next.js, TypeScript, Tailwind CSS e shadcn.",
	manifest: "/manifest.json",
	icons: {
		icon: [
			{ url: "/assets/icons/favicon-16x16.png", sizes: "16x16" },
			{ url: "/assets/icons/favicon-32x32.png", sizes: "32x32" },
			{ url: "/assets/icons/favicon-48x48.png", sizes: "48x48" },
			{ url: "/assets/icons/favicon.ico", sizes: "any" },
		],
		apple: [
			{ url: "/assets/icons/ios/180.png", sizes: "180x180" },
			{ url: "/assets/icons/ios/152.png", sizes: "152x152" },
			{ url: "/assets/icons/ios/120.png", sizes: "120x120" },
			{ url: "/assets/icons/ios/76.png", sizes: "76x76" },
		],
	},
	appleWebApp: {
		capable: true,
		title: "UbyXsoft",
		statusBarStyle: "default",
	},
	openGraph: {
		title: "Chord Finder",
		description: "Template con Next.js, TypeScript, Tailwind CSS e shadcn.",
		url: "https://vivo-vivendo-musica.com",
		siteName: "UbyXsoft",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 628,
			},
		],
		locale: "it_IT",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Chord Finder",
		description: "Template con Next.js, TypeScript, Tailwind CSS e shadcn.",
		images: ["/twitter-image.png"],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='it'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<HeaderProviderWrapper>
					<ThemeProviderWrapper>
						{/* <MainNav /> */}
						<main>{children}</main>
						{/* <Footer /> */}
					</ThemeProviderWrapper>
				</HeaderProviderWrapper>
			</body>
		</html>
	);
}
