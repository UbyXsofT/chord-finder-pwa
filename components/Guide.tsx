// components/Guide.tsx
import React from "react";

export default function Guide() {
	return (
		<div className='max-w-6xl mx-auto p-6'>
			<h1 className='text-3xl font-bold mb-6'>Guida alla Creazione di un Template Next.js PWA con TypeScript, Tailwind CSS e shadcn/ui</h1>
			<p className='mb-4'>
				Questa guida ti accompagnerà passo passo nella creazione di un template <strong>Next.js</strong> per una <strong>Progressive Web App (PWA)</strong> utilizzando <strong>TypeScript</strong>, <strong>Tailwind CSS</strong> e{" "}
				<strong>shadcn/ui</strong>, senza l&apos;utilizzo di librerie extra oltre a <strong>lucide-react</strong> per le icone. Implementeremo una barra di navigazione responsiva con un sottomenu per &quot;Dashboard&quot; che si apre al passaggio del
				mouse su desktop e al clic su mobile.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-4'>Prerequisiti</h2>
			<ul className='list-disc list-inside mb-6'>
				<li>Node.js (versione 14 o superiore)</li>
				<li>npm o yarn</li>
				<li>Conoscenza base di React, Next.js e TypeScript</li>
				<li>Familiarità con Tailwind CSS</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-8 mb-4'>Passaggi</h2>
			<ol className='list-decimal list-inside mb-6'>
				<li>
					<a
						href='#step-1'
						className='text-blue-600 hover:underline'
					>
						Inizializzare il Progetto Next.js con TypeScript
					</a>
				</li>
				<li>
					<a
						href='#step-2'
						className='text-blue-600 hover:underline'
					>
						Installare e Configurare Tailwind CSS
					</a>
				</li>
				<li>
					<a
						href='#step-3'
						className='text-blue-600 hover:underline'
					>
						Installare shadcn/ui e lucide-react
					</a>
				</li>
				<li>
					<a
						href='#step-4'
						className='text-blue-600 hover:underline'
					>
						Creare i Componenti di Base
					</a>
				</li>
				<li>
					<a
						href='#step-5'
						className='text-blue-600 hover:underline'
					>
						Implementare la Barra di Navigazione Responsiva
					</a>
				</li>
				<li>
					<a
						href='#step-6'
						className='text-blue-600 hover:underline'
					>
						Aggiungere il Sottomenu per &quot;Dashboard&quot;
					</a>
				</li>
				<li>
					<a
						href='#step-7'
						className='text-blue-600 hover:underline'
					>
						Gestire il Tema con Context API
					</a>
				</li>
				<li>
					<a
						href='#step-8'
						className='text-blue-600 hover:underline'
					>
						Configurare il Layout Principale
					</a>
				</li>
				<li>
					<a
						href='#step-9'
						className='text-blue-600 hover:underline'
					>
						Testare l&apos;Applicazione
					</a>
				</li>
				<li>
					<a
						href='#step-10'
						className='text-blue-600 hover:underline'
					>
						Considerazioni Finali
					</a>
				</li>
			</ol>

			<hr className='my-8' />

			{/* Step 1 */}
			<h2
				id='step-1'
				className='text-2xl font-semibold mt-8 mb-4'
			>
				1. Inizializzare il Progetto Next.js con TypeScript
			</h2>
			<p className='mb-4'>Avvia un nuovo progetto Next.js con TypeScript utilizzando il comando:</p>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4'>
				<code className='language-bash'>npx create-next-app@latest chord-finder-pwa --typescript</code>
			</pre>
			<p className='mb-4'>Entra nella directory del progetto:</p>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4'>
				<code className='language-bash'>cd chord-finder-pwa</code>
			</pre>

			{/* Step 2 */}
			<h2
				id='step-2'
				className='text-2xl font-semibold mt-8 mb-4'
			>
				2. Installare e Configurare Tailwind CSS
			</h2>
			<p className='mb-4'>Segui i passaggi per installare Tailwind CSS in un progetto Next.js:</p>

			<h3 className='text-xl font-semibold mt-6 mb-2'>Installazione delle Dipendenze</h3>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4'>
				<code className='language-bash'>
					npm install -D tailwindcss postcss autoprefixer{"\n"}
					npx tailwindcss init -p
				</code>
			</pre>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				Configurazione di <code>tailwind.config.js</code>
			</h3>
			<p className='mb-4'>
				Modifica il file <code>tailwind.config.js</code> per configurare i percorsi del contenuto:
			</p>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full'>
				<code className='inline-block max-w-full break-words overflow-wrap-break-word language-tsx'>
					{`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Abilita il tema scuro basato su classi
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Per Next.js 12 o versioni precedenti
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',   // Per Next.js 13 con directory app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
				</code>
			</pre>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				Creazione del File <code>globals.css</code>
			</h3>
			<p className='mb-4'>
				Crea il file <code>styles/globals.css</code> e aggiungi le direttive Tailwind CSS:
			</p>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4'>
				<code className='language-css'>
					@tailwind base;{"\n"}
					@tailwind components;{"\n"}
					@tailwind utilities;
				</code>
			</pre>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				Importare <code>globals.css</code>
			</h3>
			<p className='mb-4'>
				Assicurati che il tuo file <code>pages/_app.tsx</code> o <code>app/layout.tsx</code> importi <code>globals.css</code>:
			</p>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full'>
				<code className='inline-block max-w-full break-words overflow-wrap-break-word language-tsx'>
					{`// app/layout.tsx
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
				</code>
			</pre>

			{/* Step 3 */}
			<h2
				id='step-3'
				className='text-2xl font-semibold mt-8 mb-4'
			>
				3. Installare shadcn/ui e lucide-react
			</h2>
			<h3 className='text-xl font-semibold mt-6 mb-2'>Installazione di shadcn/ui</h3>
			<p className='mb-4'>
				Segui la documentazione ufficiale per installare <strong>shadcn/ui</strong>:
			</p>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4'>
				<code className='language-bash'>npx shadcn-ui init</code>
			</pre>

			<h3 className='text-xl font-semibold mt-6 mb-2'>Installazione di lucide-react</h3>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4'>
				<code className='language-bash'>npm install lucide-react</code>
			</pre>

			{/* Step 4 */}
			<h2
				id='step-4'
				className='text-2xl font-semibold mt-8 mb-4'
			>
				4. Creare i Componenti di Base
			</h2>
			<h3 className='text-xl font-semibold mt-6 mb-2'>
				Creare la Cartella <code>components</code>
			</h3>
			<p className='mb-4'>
				All&apos;interno della directory <code>app</code> o nella root del progetto, crea una cartella <code>components</code> dove inserirai tutti i tuoi componenti.
			</p>

			<h3 className='text-xl font-semibold mt-6 mb-2'>Creare il File delle Icone</h3>
			<p className='mb-4'>
				Crea <code>components/icons.tsx</code> per centralizzare l&apos;uso delle icone:
			</p>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full'>
				<code className='inline-block max-w-full break-words overflow-wrap-break-word language-tsx'>
					{`// components/icons.tsx
import { Home, Info, LayoutDashboard, ChartLine, Menu, X, FileText } from 'lucide-react';

const Icons = {
  Home,
  Info,
  LayoutDashboard,
  ChartLine,
  Menu,
  X,
  FileText,
  // Aggiungi altre icone se necessario
};

export default Icons;`}
				</code>
			</pre>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				Creare il Componente <code>ThemeSwitch</code>
			</h3>
			<p className='mb-4'>
				Crea <code>components/custom/ThemeSwitch.tsx</code> per gestire il cambio di tema:
			</p>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full'>
				<code className='inline-block max-w-full break-words overflow-wrap-break-word language-tsx'>
					{`// components/custom/ThemeSwitch.tsx
'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}`}
				</code>
			</pre>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				Creare il Componente <code>Footer</code>
			</h3>
			<p className='mb-4'>
				Crea <code>components/custom/Footer.tsx</code>:
			</p>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full'>
				<code className='inline-block max-w-full break-words overflow-wrap-break-word language-tsx'>
					{`// components/custom/Footer.tsx
'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 text-center">
      <p>&copy; {new Date().getFullYear()} UBYXSOFT. Tutti i diritti riservati.</p>
    </footer>
  );
}`}
				</code>
			</pre>

			{/* Step 5 */}
			<h2
				id='step-5'
				className='text-2xl font-semibold mt-8 mb-4'
			>
				5. Implementare la Barra di Navigazione Responsiva
			</h2>
			<p className='mb-4'>
				Creeremo il componente <code>MainNav</code> con una barra di navigazione che si adatta a diversi dispositivi.
			</p>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				Creare il Componente <code>MainNav</code>
			</h3>
			<p className='mb-4'>
				Crea <code>components/main-nav.tsx</code>:
			</p>
			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full'>
				<code className='inline-block max-w-full break-words overflow-wrap-break-word language-tsx'>
					{`// components/main-nav.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeSwitch from './custom/ThemeSwitch';
import Icons from './icons';

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainListMenu = [
    {
      title: 'Home',
      href: '/',
      icon: Icons.Home,
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: Icons.LayoutDashboard,
      submenu: [
        {
          title: 'Dashboard',
          href: '/dashboard',
          icon: Icons.LayoutDashboard,
        },
        {
          title: 'Stats',
          href: '/dashboard/stats',
          icon: Icons.ChartLine,
        },
        {
          title: 'Reports',
          href: '/dashboard/reports',
          icon: Icons.FileText,
        },
      ],
    },
    {
      title: 'Info',
      href: '/info',
      icon: Icons.Info,
    },
  ];

  return (
    <nav className="p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-bold flex items-center">
          <Icons.Home className="h-6 w-6 mr-2" />
          UBYXSOFT |
        </Link>
        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-4">
          {mainListMenu.map((item) =>
            item.submenu ? (
              <div key={item.title} className="relative group">
                <button className="flex items-center hover:underline focus:outline-none">
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.title}
                  <Icons.Menu className="ml-1 h-4 w-4" />
                </button>
                {/* Sottomenu */}
                <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  {item.submenu.map((subItem) => (
                    <Link
                      href={subItem.href}
                      key={subItem.title}
                      className="flex items-center px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <subItem.icon className="h-4 w-4 mr-2" />
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={item.href}
                key={item.title}
                className="flex items-center hover:underline"
              >
                <item.icon className="h-4 w-4 mr-1" />
                {item.title}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Theme Switch e Hamburger Menu */}
      <div className="flex items-center space-x-4">
        <ThemeSwitch />
        {/* Bottone per il Menu Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <Icons.X className="h-6 w-6" /> : <Icons.Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden z-50">
          <div className="flex flex-col space-y-2 p-4 bg-white dark:bg-gray-800">
            {mainListMenu.map((item) =>
              item.submenu ? (
                <details key={item.title} className="group">
                  <summary className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                    <div className="flex items-center">
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.title}
                    </div>
                    <Icons.Menu className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="pl-6">
                    {item.submenu.map((subItem) => (
                      <Link
                        href={subItem.href}
                        key={subItem.title}
                        className="flex items-center px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <subItem.icon className="h-4 w-4 mr-2" />
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  href={item.href}
                  key={item.title}
                  className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 mr-1" />
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}`}
				</code>
			</pre>

			{/* Step 6 */}
			<h2
				id='step-6'
				className='text-2xl font-semibold mt-8 mb-4'
			>
				6. Aggiungere il Sottomenu per &quot;Dashboard&quot;
			</h2>
			<p className='mb-4'>
				Abbiamo già aggiunto un sottomenu per &quot;Dashboard&quot; nel passaggio precedente. Puoi personalizzare le voci del sottomenu modificando l&apos;array <code>mainListMenu</code> nel componente <code>MainNav</code>.
			</p>
			<p className='mb-4'>
				<strong>Esempio:</strong>
			</p>
			<pre className='bg-gray-100 dark:bg-black p-4 rounded-md mb-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full'>
				<code className='inline-block max-w-full break-words overflow-wrap-break-word language-tsx'>
					{`const mainListMenu = [
  // ... altre voci
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Icons.LayoutDashboard,
    submenu: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Icons.LayoutDashboard,
      },
      {
        title: 'Stats',
        href: '/dashboard/stats',
        icon: Icons.ChartLine,
      },
      {
        title: 'Reports',
        href: '/dashboard/reports',
        icon: Icons.FileText, // Assicurati di aggiungere l'icona in \`icons.tsx\`
      },
    ],
  },
  // ... altre voci
];`}
				</code>
			</pre>

			{/* Step 7 */}
			<h2
				id='step-7'
				className='text-2xl font-semibold mt-8 mb-4'
			>
				7. Gestire il Tema con Context API
			</h2>
			<p className='mb-4'>Per gestire il tema scuro/chiaro, utilizzeremo la Context API di React.</p>
			<h3 className='text-xl font-semibold mt-6 mb-2'>Creare il Contesto del Tema</h3>
			<p className='mb-4'>
				Crea <code>context/ThemeContext.tsx</code>:
			</p>

			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full'>
				<code className='inline-block max-w-full break-words overflow-wrap-break-word language-tsx'>
					{`// context/ThemeContext.tsx
				'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};`}
				</code>
			</pre>
			<h2
				id='step-8'
				className='text-2xl font-semibold mt-8 mb-4'
			>
				8. Configurare il Layout Principale
			</h2>

			<p className='mb-4'>
				Modifica <code>app/layout.tsx</code> per includere i provider e i componenti principali:
			</p>

			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full'>
				<code className='inline-block max-w-full break-words overflow-wrap-break-word language-tsx'>
					{` // app/layout.tsx
import './globals.css';
import ThemeProviderWrapper from '@/context/ThemeProviderWrapper';
import MainNav from '@/components/main-nav';
import Footer from '@/components/custom/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
          <MainNav />
          <main>{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
`}
				</code>
			</pre>

			<h2
				id='step-9'
				className='text-2xl font-semibold mt-8 mb-4'
			>
				9. Testare l&apos;Applicazione
			</h2>

			<p className='mb-4'>Avvia il server di sviluppo:</p>

			<pre className='bg-gray-100 dark:bg-black  p-4 rounded-md mb-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full'>
				<code className='inline-block max-w-full break-words overflow-wrap-break-word language-tsx'>npm run dev</code>
			</pre>

			<h1 className='text-3xl font-bold mb-6'>
				Pages Router (con <code>pages/</code>) e App Router (con <code>app/</code>)
			</h1>
			<p className='mb-4'>
				In questa sezione, esploreremo il passaggio tra due diverse modalità di gestione del routing in Next.js: <strong>Pages Router</strong> (con <code>pages/</code>) e <strong>App Router</strong> (con <code>app/</code>). Questo cambiamento è
				avvenuto a partire da Next.js 13, in cui è stato introdotto l&apos;App Router per migliorare l&apos;esperienza di sviluppo e offrire una maggiore modularità e flessibilità.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-4'>
				Confronto tra Pages Router (<code>pages/</code>) e App Router (<code>app/</code>)
			</h2>

			<h3 className='text-xl font-semibold mt-6 mb-2'>Routing Automatico</h3>
			<ul className='list-disc list-inside mb-4'>
				<li>
					<strong>
						Pages Router (<code>pages/</code>)
					</strong>
					: In questa modalità, ogni file all&apos;interno della directory <code>pages</code> rappresenta automaticamente una route. Per esempio, <code>pages/index.tsx</code> rappresenta la home (<code>/</code>), mentre <code>pages/about.tsx</code>{" "}
					rappresenta <code>/about</code>.
				</li>
				<li>
					<strong>
						App Router (<code>app/</code>)
					</strong>
					: Nell&apos;App Router, ogni directory all&apos;interno di <code>app/</code> rappresenta una route, e i file <code>page.tsx</code> all&apos;interno di tali directory rappresentano il contenuto della pagina. Per esempio,{" "}
					<code>app/about/page.tsx</code> rappresenta <code>/about</code>.
				</li>
			</ul>

			<h3 className='text-xl font-semibold mt-6 mb-2'>Layout e Server Components</h3>
			<ul className='list-disc list-inside mb-4'>
				<li>
					<strong>Layout Annidati</strong>: l&apos;App Router introduce il concetto di layout annidati. Ogni directory può avere un file <code>layout.tsx</code> che definisce il layout di quella specifica route e delle sue sotto-route. Questo rende
					molto più facile creare layout coerenti e modulari. Ad esempio, <code>app/layout.tsx</code> potrebbe essere il layout principale dell&apos;intera applicazione, mentre <code>app/dashboard/layout.tsx</code> potrebbe definire un layout
					specifico per l&apos;area &quot;dashboard&quot;.
				</li>
				<li>
					<strong>Server Components</strong>: Con l&apos;App Router, viene data priorità ai Server Components per migliorare le performance di rendering. I file <code>.tsx</code> nell&apos;app sono, per impostazione predefinita, Server Components, ma
					possono diventare Client Components utilizzando la direttiva <code>&apos;use client&apos;</code> in cima al file.
				</li>
			</ul>

			<h3 className='text-xl font-semibold mt-6 mb-2'>File Specifici e Modularità</h3>
			<ul className='list-disc list-inside mb-4'>
				<li>
					<strong>
						<code>_app.tsx</code> e <code>_document.tsx</code> (<code>pages/</code>)
					</strong>
					: Nel Pages Router, <code>pages/_app.tsx</code> viene usato per estendere l&apos;applicazione principale, consentendo di aggiungere wrapper per ogni pagina, come temi globali o provider di contesto. <code>pages/_document.tsx</code> viene
					utilizzato per personalizzare l&apos;HTML di base (es. <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>).
				</li>
				<li>
					<strong>
						<code>layout.tsx</code> (<code>app/</code>)
					</strong>
					: Nel nuovo App Router, <code>layout.tsx</code> è più modulare e consente di definire layout specifici per ogni sezione dell&apos;applicazione. Non esiste più un file <code>_app.tsx</code> o <code>_document.tsx</code> separato, poiché le
					funzionalità che fornivano sono integrate direttamente in questi layout e in altre parti del sistema.
				</li>
			</ul>

			<h3 className='text-xl font-semibold mt-6 mb-2'>Parallel Routing e Layout Sharing</h3>
			<p className='mb-4'>
				l&apos;App Router permette di gestire meglio Parallel Routing e Intercepting Routes. Questo vuol dire che puoi gestire più layout nello stesso momento o condividere un layout tra più route senza necessariamente avere una relazione gerarchica
				stretta, migliorando la modularità del codice.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-4'>Pro e Contro</h2>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				App Router (<code>app/</code>)
			</h3>
			<ul className='list-disc list-inside mb-4'>
				<li>
					<strong>Pro</strong>: Maggiore modularità, supporto ai Server Components per ridurre il carico sul client, facilità nella gestione di layout complessi, e una maggiore personalizzazione del routing.
				</li>
				<li>
					<strong>Contro</strong>: Può avere una curva di apprendimento per chi è abituato al Pages Router. Inoltre, alcune funzionalità avanzate, come la gestione dell&apos;autenticazione, potrebbero richiedere un approccio leggermente diverso.
				</li>
			</ul>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				Pages Router (<code>pages/</code>)
			</h3>
			<ul className='list-disc list-inside mb-4'>
				<li>
					<strong>Pro</strong>: Semplicità, facile da capire per chi è abituato al modello tradizionale di routing basato su file. Perfetto per progetti più piccoli.
				</li>
				<li>
					<strong>Contro</strong>: Meno flessibile e richiede file <code>_app.tsx</code> e <code>_document.tsx</code> per alcune configurazioni globali, che risultano meno modulari rispetto all&apos;App Router.
				</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-8 mb-4'>Cosa Significa per il Tuo Progetto</h2>
			<p className='mb-4'>Con il nuovo App Router, hai un controllo molto più dettagliato sui layout e sui componenti server/client. Puoi anche ottimizzare la tua app per performance migliori sfruttando i Server Components.</p>
			<p className='mb-4'>Se decidi di usare l&apos;App Router, preparati a riorganizzare la struttura dell&apos;applicazione, poiché ogni route avrà una directory e potrai modularizzare facilmente i layout.</p>
			<p className='mb-4'>
				Il Pages Router rimane ancora utilizzabile, quindi se preferisci il vecchio approccio o hai già esperienza con esso, puoi continuare ad usarlo, soprattutto se non hai bisogno delle nuove funzionalità offerte dall&apos;App Router.
			</p>
			<p className='mb-4'>
				Se il tuo progetto attuale utilizza la struttura <code>app/</code>, significa che stai lavorando con Next.js 13 o successivo, sfruttando la nuova architettura modulare. Questo è ottimo per creare un&apos;app scalabile e moderna, ma richiede
				un po&apos; di tempo per adattarsi se sei abituato alla struttura precedente.
			</p>

			<h3 className='text-xl font-semibold mt-6 mb-2'>Per la Navigazione di Base in Entrambe le Modalità</h3>
			<p className='mb-4'>
				Continua a usare il componente <code>&lt;Link&gt;</code> di Next.js. Non è necessario utilizzare <code>useRouter</code> per la maggior parte delle navigazioni.
			</p>
			<p className='mb-4'>
				<strong>
					Quando usare <code>useRouter</code>:
				</strong>{" "}
				Usalo solo se devi accedere ai dettagli dell&apos;URL, gestire navigazioni condizionali o effettuare redirezioni programmate.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-4'>Struttura del Progetto</h2>
			<pre className='bg-gray-100 p-4 rounded-md mb-4'>
				<code className='language-bash'>
					{`.  
├── app  
│   ├── fonts  
│   │   ├── GeistMonoVF.woff  
│   │   └── GeistVF.woff  
│   ├── info  
│   │   ├── layout.tsx  
│   │   └── page.tsx  
│   ├── dashboard  
│   │   ├── layout.tsx  
│   │   ├── page.tsx  
│   │   └── stats  
│   │       └── page.tsx  
│   ├── favicon.ico  
│   ├── globals.css  
│   ├── layout.tsx  
│   └── page.tsx  
├── components  
│   ├── ui  
│   │   ├── alert-dialog.tsx  
│   │   ├── button.tsx  
│   │   ├── dropdown-menu.tsx  
│   │   ├── navigation-menu.tsx  
│   │   ├── switch.tsx  
│   │   └── ...  
│   ├── custom  
│   │   ├── Header.tsx  
│   │   ├── Footer.tsx  
│   │   ├── ThemeSwitch.tsx  
│   │   ├── MainMenu.tsx  
│   │   └── ...  
│   ├── Guide.tsx  
│   ├── icons.tsx  
│   ├── main-nav.tsx  
│   ├── page-header.tsx  
├── lib  
│   └── utils.ts  
├── public  
│   ├── assets  
│   │   ├── icons  
│   │   │   ├── android  
│   │   │   │   └── ...  
│   │   │   ├── ios  
│   │   │   │   └── ...  
│   │   │   ├── windows11  
│   │   │   │   └── ...  
│   │   │   ├── 24x24.png  
│   │   │   ├── favicon.ico  
│   │   │   ├── og-image.png  
│   │   │   ├── twitter-image.png  
│   │   │   └── ...  
│   │   └── screenshots  
│   │       └── ...  
│   ├── browserconfig.xml  
│   ├── manifest.json  
│   ├── sw.js  
│   └── workbox-1bb06f5e.js  
├── context  
│   ├── HeaderContext.tsx  
│   ├── HeaderProviderWrapper.tsx  
│   ├── ThemeContext.tsx  
│   └── ThemeProviderWrapper.tsx  
├── hooks  
│   └── ...  
├── .env.local  
├── .env.production  
├── next.config.mjs  
├── package.json  
├── postcss.config.js  
├── tailwind.config.ts  
└── tsconfig.json  
`}
				</code>
			</pre>

			<p className='mt-8'>Spero che questa panoramica ti sia utile per comprendere le differenze tra Pages Router e App Router in Next.js, e come queste influenzano la struttura e lo sviluppo del tuo progetto.</p>
		</div>
	);
}
