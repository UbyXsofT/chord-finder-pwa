# Chord Finder PWA

## 📝 Descrizione

Chord Finder è una Progressive Web App (PWA) progettata per musicisti, compositori e studenti di teoria musicale. L'applicazione consente l'esplorazione interattiva di accordi e progressioni armoniche in tutte le tonalità, con supporto completo per scale maggiori e minori, interscambio modale, dominanti secondarie e altri concetti armonici avanzati.

![Chord Finder Screenshot](screenshot.png)

## ✨ Funzionalità principali

- **Visualizzazione completa degli accordi** in qualsiasi tonalità maggiore o minore
- **Tre varianti di scala minore** supportate: naturale, armonica e melodica
- **Interscambio modale** - visualizza accordi presi in prestito da modi paralleli
- **Dominanti secondarie e sostituti di tritono** - per composizione jazz e avanzata
- **Progressioni armoniche comuni** per ogni tonalità e tipo di scala
- **Funzionalità PWA completa** - installabile e utilizzabile offline
- **Interfaccia responsive** ottimizzata sia per desktop che per dispositivi mobili

## 🛠️ Tecnologie utilizzate

- **Next.js** - Framework React con rendering lato server
- **Next-PWA** - Per funzionalità Progressive Web App
- **Tailwind CSS** - Per styling e responsive design
- **Service Workers** - Per caching e funzionalità offline
- **Local Storage** - Per salvare preferenze utente

## 🚀 Installazione e avvio

### Requisiti preliminari

- Node.js 14.x o superiore
- npm 6.x o superiore

### Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/yourusername/chord-finder-pwa.git
   cd chord-finder-pwa
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

4. Apri nel browser: [http://localhost:3000](http://localhost:3000)

### Build per produzione

```bash
npm run build
npm run start
```

## 📱 Installazione come PWA

Chord Finder è una Progressive Web App (PWA), quindi puoi installarla sul tuo dispositivo come un'applicazione nativa:

1. Visita l'applicazione nel tuo browser Chrome, Edge o Safari
2. Su desktop: clicca sull'icona di installazione nella barra degli indirizzi
3. Su mobile: seleziona "Aggiungi a schermata Home" dal menu del browser

Una volta installata, l'app funzionerà offline e si avvierà come un'applicazione normale dal desktop o dalla schermata home.

## 📚 Come usare l'applicazione

### Visualizzazione accordi

1. Seleziona una tonalità dal menu a discesa (es. C, G, F#, ecc.)
2. Scegli tra scala maggiore o minore
3. Se scegli la scala minore, seleziona la variante (naturale, armonica o melodica)
4. Gli accordi diatonici verranno visualizzati automaticamente

### Filtri di visualizzazione

Utilizza il menu "Visualizza" per filtrare i tipi di accordi mostrati:
- **Tutti gli accordi** - Mostra tutte le categorie
- **Solo accordi diatonici** - Mostra solo gli accordi derivati dalla scala
- **Solo interscambio modale** - Accordi presi in prestito da modi paralleli
- **Solo dominanti secondarie** - Dominanti secondarie e sostituti di tritono

### Progressioni armoniche

Utilizza il pulsante "Mostra Progressioni Comuni" per visualizzare progressioni di accordi comunemente utilizzate nella tonalità selezionata. Ogni progressione include:
- Nome e genere musicale
- Gradi armonici (notazione romana)
- Accordi specifici nella tonalità corrente
- Breve descrizione dell'uso/effetto della progressione

## 🧠 Concetti musicali implementati

- **Armonizzazione per terze** delle scale maggiori e minori
- **Interscambio modale** - prestiti da scale parallele
- **Dominanti secondarie** - accordi dominanti che risolvono su gradi diversi dalla tonica
- **Sostituti di tritono** - sostituzioni armoniche basate sul tritono
- **Teoria delle progressioni armoniche** - sequenze di accordi idiomatiche nei vari stili musicali

## 💻 Sviluppo

### Struttura del progetto

```
chord-finder-pwa/
├── components/      # Componenti React riutilizzabili
│   └── ChordFinder.js  # Componente principale
├── pages/           # Pagine Next.js
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public/          # Asset statici e PWA manifest
│   ├── icons/
│   ├── manifest.json
│   └── service-worker.js
├── styles/          # File CSS e Tailwind
└── utils/           # Utility e helper functions
```

### Comandi utili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run start` - Avvia la build di produzione
- `npm run lint` - Esegue linting del codice

## 🤝 Contribuire al progetto

Contributi, problemi e richieste di funzionalità sono benvenuti! Per modifiche importanti, apri prima un issue per discutere cosa vorresti cambiare.

1. Forka il progetto
2. Crea il tuo branch di feature (`git checkout -b feature/amazing-feature`)
3. Commit delle tue modifiche (`git commit -m 'Add some amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è distribuito con licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## 👏 Crediti

- Sviluppato da UbyXsofT
- Teoria musicale basata sui principi di armonia classica e jazz

---

Realizzato con ♥ per musicisti di tutti i livelli
