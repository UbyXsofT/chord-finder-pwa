# Template Next.js PWA con TypeScript, Tailwind CSS e shadcn/ui

Benvenuto! Questo repository è un template pronto all'uso per creare applicazioni web moderne utilizzando **Next.js 13**, **TypeScript**, **Tailwind CSS**, **shadcn/ui** e **lucide-react**. È progettato per aiutarti a iniziare rapidamente lo sviluppo di **Progressive Web Apps (PWA)** performanti e scalabili.

## 📋 Indice

- [Caratteristiche](#-caratteristiche)
- [Prerequisiti](#-prerequisiti)
- [Come Iniziare](#-come-iniziare)
- [Struttura del Progetto](#-struttura-del-progetto)
- [Configurazione PWA](#-configurazione-pwa)
- [Gestione del Tema](#-gestione-del-tema)
- [Navigazione](#-navigazione)
- [Confronto tra Pages Router e App Router](#-confronto-tra-pages-router-e-app-router)
- [Contribuire](#-contribuire)
- [Licenza](#-licenza)
- [Ringraziamenti](#-ringraziamenti)

## 🚀 Caratteristiche

- **Next.js 13 con App Router**: Utilizza la nuova directory app/ per un routing più modulare e flessibile.
- **TypeScript**: Tipizzazione statica per un codice più robusto e manutenibile.
- **Tailwind CSS**: Framework CSS per uno sviluppo rapido e uno stile personalizzabile.
- **shadcn/ui**: Collezione di componenti UI predefiniti e altamente personalizzabili.
- **lucide-react**: Set di icone semplici e belle per le tue interfacce.
- **PWA Ready**: Configurazione per trasformare l'applicazione in una Progressive Web App, inclusi manifesti e service worker.
- **Tema Scuro/Chiaro**: Gestione del tema con Context API e switch per cambiare tema.
- **Barra di Navigazione Responsiva**: Menu con sottomenu per desktop e mobile.

## 📚 Prerequisiti

- **Node.js** versione 14 o superiore
- **npm** o **yarn**

## 🏁 Come Iniziare

### 1. Usa Questo Template

- Clicca sul pulsante "**Use this template**" nella pagina del repository per creare un nuovo repository basato su questo template.

### 2. Clona il Repository

```bash
git clone https://github.com/tuo-username/tuo-repository.git
cd tuo-repository
```

### 3. Installa le Dipendenze

Con npm:

```bash
npm install
```

Con yarn:

```bash
yarn install
```

### 4. Avvia il Server di Sviluppo

Con npm:

```bash
npm run dev
```

Con yarn:

```bash
yarn dev
```

Visita http://localhost:3000 per vedere l'applicazione in esecuzione.

## 🗂 Struttura del Progetto

La struttura principale del progetto è la seguente:

```
.
├── app
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── info
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── guide
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
├── context
│   ├── HeaderContext.tsx
│   ├── HeaderProviderWrapper.tsx
│   ├── ThemeContext.tsx
│   └── ThemeProviderWrapper.tsx
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
│   │   │   ├── favicon.ico
│   │   │   ├── og-image.png
│   │   │   ├── twitter-image.png
│   │   │   └── ...
│   │   └── screenshots
│   │       └── ...
│   ├── browserconfig.xml
│   ├── manifest.json
│   ├── sw.js
│   └── workbox-*.js
├── hooks
├── .env.local
├── .env.production
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 📱 Configurazione PWA

Questo template include una configurazione di base per trasformare la tua applicazione in una PWA. Ecco come procedere:

1. **Aggiorna il Manifesto**
   Modifica `public/manifest.json` per riflettere le informazioni della tua applicazione, come `name`, `short_name`, `start_url`, `background_color`, `theme_color`, ecc.

2. **Personalizza le Icone**
   Sostituisci le icone nella cartella `public/assets/icons` con quelle della tua applicazione. Assicurati di mantenere le dimensioni e i nomi dei file per garantire la compatibilità.

3. **Configura il Service Worker**
   Il file `public/sw.js` è il service worker che gestisce la cache e le funzionalità offline. Puoi personalizzarlo secondo le tue esigenze.

4. **Verifica la PWA**
   Utilizza strumenti come Lighthouse (integrato negli strumenti di sviluppo di Chrome) per verificare che la tua applicazione soddisfi i criteri di una PWA.

## 🎨 Gestione del Tema

Il progetto utilizza la Context API di React per gestire il tema scuro/chiaro. Il componente `ThemeSwitch` permette agli utenti di cambiare tema facilmente.

- Percorso del Contesto Tema: `context/ThemeContext.tsx`
- Wrapper del Provider: `context/ThemeProviderWrapper.tsx`
- Componente Switch Tema: `components/custom/ThemeSwitch.tsx`

## 🧭 Navigazione

La barra di navigazione è responsiva e include un sottomenu per "Dashboard" che si comporta in modo diverso su desktop e mobile:

- **Desktop**: Il sottomenu si apre al passaggio del mouse.
- **Mobile**: Il sottomenu si apre al clic.

Componente Barra di Navigazione: `components/main-nav.tsx`

Gestione dei Menu: Puoi personalizzare le voci del menu modificando l'array `mainListMenu` nel componente `main-nav.tsx`.

## 🔄 Confronto tra Pages Router e App Router

Questo progetto utilizza il App Router introdotto in Next.js 13, che offre maggiore modularità e flessibilità rispetto al precedente Pages Router. Ecco una panoramica delle differenze:

### Routing Automatico

- **Pages Router** (`pages/`): Ogni file in `pages/` rappresenta una route. Ad esempio, `pages/index.tsx` corrisponde a `/`.
- **App Router** (`app/`): Ogni cartella in `app/` rappresenta una route, e il file `page.tsx` all'interno definisce il contenuto. Ad esempio, `app/about/page.tsx` corrisponde a `/about`.

### Layout e Server Components

- **Layout Annidati**: Con l'App Router, puoi definire layout specifici per ogni sezione usando `layout.tsx`.
- **Server Components**: I componenti in `app/` sono per default Server Components, migliorando le performance.

### Pro e Contro

**App Router**:
- Pro: Maggiore modularità, migliori performance.
- Contro: Curva di apprendimento se si proviene dal Pages Router.

**Pages Router**:
- Pro: Semplicità.
- Contro: Meno flessibile, meno ottimizzato.

### Navigazione

Per la navigazione, continua ad usare il componente `<Link>` di Next.js. Usa `useRouter` solo se hai bisogno di funzionalità avanzate.

## 🤝 Contribuire

Contributi, issue e richieste pull sono benvenuti! Se desideri contribuire:

1. Forka il progetto.
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`).
3. Committi le tue modifiche (`git commit -m 'Add some AmazingFeature'`).
4. Push sul branch (`git push origin feature/AmazingFeature`).
5. Apri una Pull Request.

Per grandi cambiamenti, ti preghiamo di aprire prima un'issue per discutere cosa vorresti modificare.

## 📄 Licenza

Questo progetto è distribuito sotto la licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 💖 Ringraziamenti

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [lucide-react](https://lucide.dev/)

Grazie a te per aver utilizzato questo template!

Se hai domande o suggerimenti, non esitare a contattarmi. Buon coding! 🚀
