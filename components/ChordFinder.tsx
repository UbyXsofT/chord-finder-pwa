"use client";
import React, { useState, useMemo } from "react";

// Definizione dei tipi per una migliore sicurezza TypeScript
type Nota = string;
type InfoAccordo = {
	nota: Nota;
	accordi: string[];
};

type AccordiDiatonici = {
	[grado: string]: InfoAccordo;
};

type InfoProgressione = {
	nome: string;
	gradi: string;
	accordi: string;
	descrizione: string;
	genere: string;
};

interface PropsCategoriaDiAccordi {
	titolo: string;
	accordi: AccordiDiatonici | null;
	colore: string;
}

interface PropsCategoriaProgressioni {
	progressioni: InfoProgressione[];
}

export const ChordFinder = () => {
	// Gestione dello stato
	const [tonalitaSelezionata, setTonalitaSelezionata] = useState<string>("C");
	const [modalitaVisualizzazione, setModalitaVisualizzazione] = useState<string>("all");
	const [tipoScala, setTipoScala] = useState<string>("major");
	const [tipoMinore, setTipoMinore] = useState<string>("natural");
	const [mostraProgressioni, setMostraProgressioni] = useState<boolean>(true);

	// Array di tutte le possibili tonalità
	const tonalita: string[] = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];

	// Note per ogni tonalità (necessarie per calcolare gli accordi)
	const notePerTonalita: Record<string, string[]> = {
		C: ["C", "D", "E", "F", "G", "A", "B"],
		"C#/Db": ["C#", "D#", "F", "F#", "G#", "A#", "C"],
		D: ["D", "E", "F#", "G", "A", "B", "C#"],
		"D#/Eb": ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
		E: ["E", "F#", "G#", "A", "B", "C#", "D#"],
		F: ["F", "G", "A", "Bb", "C", "D", "E"],
		"F#/Gb": ["F#", "G#", "A#", "B", "C#", "D#", "F"],
		G: ["G", "A", "B", "C", "D", "E", "F#"],
		"G#/Ab": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
		A: ["A", "B", "C#", "D", "E", "F#", "G#"],
		"A#/Bb": ["Bb", "C", "D", "Eb", "F", "G", "A"],
		B: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
	};

	// Funzione per calcolare gli accordi diatonici in base alla tonalità e al tipo di scala
	const calcolaAccordiDiatonici = (tonalita: string, tipoScala: string, varianteMinore: string = "natural"): AccordiDiatonici => {
		const note = notePerTonalita[tonalita];
		if (!note) return {};

		// Accordi per scala maggiore
		if (tipoScala === "major") {
			return {
				I: {
					nota: note[0],
					accordi: [`${note[0]}`, `${note[0]}maj7`, `${note[0]}6`, `${note[0]}6/9`, `${note[0]}maj9`],
				},
				ii: {
					nota: note[1],
					accordi: [`${note[1]}m`, `${note[1]}m7`, `${note[1]}m9`, `${note[1]}m11`],
				},
				iii: {
					nota: note[2],
					accordi: [`${note[2]}m`, `${note[2]}m7`, `${note[2]}m9`, `${note[2]}m11`],
				},
				IV: {
					nota: note[3],
					accordi: [`${note[3]}`, `${note[3]}maj7`, `${note[3]}6`, `${note[3]}maj9`],
				},
				V: {
					nota: note[4],
					accordi: [`${note[4]}`, `${note[4]}7`, `${note[4]}9`, `${note[4]}13`, `${note[4]}sus4`],
				},
				vi: {
					nota: note[5],
					accordi: [`${note[5]}m`, `${note[5]}m7`, `${note[5]}m9`],
				},
				vii: {
					nota: note[6],
					accordi: [`${note[6]}dim`, `${note[6]}m7b5`, `${note[6]}°7`],
				},
			};
		}

		// Accordi per scala minore (con varianti)
		if (tipoScala === "minor") {
			let sesto = note[5];
			let settimo = note[6];

			if (varianteMinore === "harmonic") {
				// Nella minore armonica, il 7° grado è rialzato
				settimo = ottieniNotaDiesis(note[6]);
			} else if (varianteMinore === "melodic") {
				// Nella minore melodica, il 6° e 7° grado sono rialzati
				sesto = ottieniNotaDiesis(note[5]);
				settimo = ottieniNotaDiesis(note[6]);
			}

			// Ottieni accordi basati sulla variante minore
			let accordoV: string, accordiEstesiV: string[], accordiVI: string[], accordiVII: string[];

			if (varianteMinore === "natural") {
				accordoV = `${note[4]}m`;
				accordiEstesiV = [`${note[4]}m7`, `${note[4]}m9`];
				accordiVI = [`${note[5]}`, `${note[5]}maj7`];
				accordiVII = [`${note[6]}`, `${note[6]}maj7`];
			} else if (varianteMinore === "harmonic") {
				accordoV = `${note[4]}`;
				accordiEstesiV = [`${note[4]}7`, `${note[4]}7b9`];
				accordiVI = [`${note[5]}`, `${note[5]}maj7#5`];
				accordiVII = [`${settimo}dim`, `${settimo}°7`];
			} else {
				// melodic
				accordoV = `${note[4]}`;
				accordiEstesiV = [`${note[4]}7`, `${note[4]}9`];
				accordiVI = [`${sesto}m7b5`];
				accordiVII = [`${settimo}m7b5`];
			}

			return {
				i: {
					nota: note[0],
					accordi: [`${note[0]}m`, `${note[0]}m7`, `${note[0]}m9`, `${note[0]}m6`],
				},
				ii: {
					nota: note[1],
					accordi: [`${note[1]}m7b5`, `${note[1]}°`, `${note[1]}ø7`],
				},
				III: {
					nota: note[2],
					accordi: [`${note[2]}`, `${note[2]}maj7`, `${note[2]}6`, `${note[2]}maj9`],
				},
				iv: {
					nota: note[3],
					accordi: [`${note[3]}m`, `${note[3]}m7`, `${note[3]}m9`],
				},
				v: {
					nota: note[4],
					accordi: [accordoV, ...accordiEstesiV],
				},
				VI: {
					nota: note[5],
					accordi: accordiVI,
				},
				VII: {
					nota: note[6],
					accordi: accordiVII,
				},
			};
		}

		return {};
	};

	// Funzione per calcolare le dominanti secondarie
	const calcolaDominantiSecondarie = (tonalita: string, tipoScala: string, varianteMinore: string) => {
		const accordiDiatonici = calcolaAccordiDiatonici(tonalita, tipoScala, varianteMinore);
		const dominantiSecondarie: AccordiDiatonici = {};

		// V7/V, V7/ii, ecc. per scala maggiore
		// V7/III, V7/iv, ecc. per scala minore
		Object.keys(accordiDiatonici).forEach((grado) => {
			// Escludi la tonica e il vii/VII
			if ((tipoScala === "major" && grado !== "I" && grado !== "vii") || (tipoScala === "minor" && grado !== "i" && grado !== "VII")) {
				const nota = accordiDiatonici[grado].nota;
				const quinta = ottieniCircoloDiQuinte(nota, 1); // Calcola la quinta di quella nota
				dominantiSecondarie[`V7/${grado}`] = {
					nota: quinta,
					accordi: [`${quinta}7`, `${quinta}9`, `${quinta}13`],
				};
			}
		});

		return dominantiSecondarie;
	};

	// Funzione per calcolare i sostituti di tritono
	const calcolaSostitutiTritono = (tonalita: string, tipoScala: string, varianteMinore: string) => {
		const dominantiSecondarie = calcolaDominantiSecondarie(tonalita, tipoScala, varianteMinore);
		const sostituti: AccordiDiatonici = {};

		Object.keys(dominantiSecondarie).forEach((grado) => {
			const nota = dominantiSecondarie[grado].nota;
			const tritono = ottieniCircoloDiQuinte(nota, 6); // Il sostituto è a distanza di tritono
			sostituti[`SubV7/${grado.split("/")[1]}`] = {
				nota: tritono,
				accordi: [`${tritono}7`, `${tritono}7b9`, `${tritono}13`],
			};
		});

		return sostituti;
	};

	// Calcola accordi di interscambio modale
	const calcolaInterscambioModale = (tonalita: string, tipoScala: string) => {
		const note = notePerTonalita[tonalita];
		if (!note) return {};

		// Interscambio modale per scala maggiore
		if (tipoScala === "major") {
			// Accordi presi dalla tonalità minore parallela
			const tonalitaMinore = {
				nota: note[0],
				accordi: [
					`${note[0]}m`,
					`${note[0]}m7`,
					`${note[0]}m6`,
					`${note[0]}m9`,
					`${ottieniNotaBemolle(note[2])}`, // bIII
					`${ottieniNotaBemolle(note[2])}maj7`,
					`${ottieniNotaBemolle(note[5])}`, // bVI
					`${ottieniNotaBemolle(note[5])}maj7`,
					`${ottieniNotaBemolle(note[6])}`, // bVII
					`${ottieniNotaBemolle(note[6])}7`,
				],
			};

			// Accordi caratteristici degli altri modi
			const dorico = {
				nota: note[0],
				accordi: [`${note[0]}m6`, `${note[0]}m13`, `${note[4]}`, `${note[4]}7`],
			};

			const frigio = {
				nota: note[0],
				accordi: [`${ottieniNotaBemolle(note[1])}`, `${ottieniNotaBemolle(note[1])}maj7`],
			};

			const lidio = {
				nota: note[0],
				accordi: [`${note[0]}maj7#11`, `${note[0]}6/9#11`, `${ottieniNotaDiesis(note[3])}dim`],
			};

			const misolidio = {
				nota: note[0],
				accordi: [`${ottieniNotaBemolle(note[6])}`, `${ottieniNotaBemolle(note[6])}maj7`],
			};

			return {
				"Da Minore Naturale": tonalitaMinore,
				"Da Dorico": dorico,
				"Da Frigio": frigio,
				"Da Lidio": lidio,
				"Da Misolidio": misolidio,
			};
		}

		// Interscambio modale per scala minore
		if (tipoScala === "minor") {
			// Accordi presi dalla tonalità maggiore parallela
			const tonalitaMaggiore = {
				nota: note[0],
				accordi: [
					`${note[0]}`,
					`${note[0]}maj7`,
					`${note[0]}6`,
					`${note[0]}maj9`,
					`${ottieniNotaDiesis(note[2])}m`, // iii
					`${ottieniNotaDiesis(note[2])}m7`,
					`${ottieniNotaDiesis(note[6])}dim`, // vii°
					`${ottieniNotaDiesis(note[6])}m7b5`,
				],
			};

			// Accordi caratteristici degli altri modi minori
			const dorico = {
				nota: note[0],
				accordi: [`${note[0]}m6`, `${note[0]}m13`, `${ottieniNotaDiesis(note[5])}`, `${ottieniNotaDiesis(note[5])}7`],
			};

			const frigio = {
				nota: note[0],
				accordi: [`${ottieniNotaBemolle(note[1])}`, `${ottieniNotaBemolle(note[1])}maj7`],
			};

			const minoreArmonica = {
				nota: note[0],
				accordi: [
					`${note[0]}mM7`, // i minore con settima maggiore
					`${note[4]}`, // V maggiore
					`${note[4]}7`, // V7
					`${ottieniNotaDiesis(note[6])}dim`, // vii° diminuito
					`${ottieniNotaDiesis(note[6])}°7`, // vii° diminuito settima
				],
			};

			const minoreMelodica = {
				nota: note[0],
				accordi: [
					`${note[0]}m6`,
					`${note[0]}mM7`,
					`${note[4]}7`, // V7
					`${ottieniNotaDiesis(note[5])}m7b5`, // vi minore settima semi-diminuito
				],
			};

			return {
				"Da Maggiore": tonalitaMaggiore,
				"Da Dorico": dorico,
				"Da Frigio": frigio,
				"Da Minore Armonica": minoreArmonica,
				"Da Minore Melodica": minoreMelodica,
			};
		}

		return {};
	};

	const getFlatNote = (nota: string): string => {
		console.log("getFlatNote :", nota);
		const mapping: Record<string, string> = {
			// Equivalenti enarmonici (diesis a bemolle)
			"C#": "Db",
			"D#": "Eb",
			"F#": "Gb",
			"G#": "Ab",
			"A#": "Bb",
			// Note naturali abbassate di un semitono
			C: "B", // Do bemolle = Si
			D: "Db", // Re bemolle = Re bemolle
			E: "Eb", // Mi bemolle = Mi bemolle
			F: "E", // Fa bemolle = Mi
			G: "Gb", // Sol bemolle = Sol bemolle
			A: "Ab", // La bemolle = La bemolle
			B: "Bb", // Si bemolle = Si bemolle
		};
		return mapping[nota] || nota;
	};

	// Funzione per normalizzare i gradi e gestire maiuscole/minuscole
	const normalizzaGrado = (grado: string, tipoScala: string): string => {
		// Rimuovi eventuali 'b' per trovare il grado base
		let gradoBase = grado.startsWith("b") ? grado.substring(1) : grado;

		// Rimuovi eventuali specifiche aggiuntive (come :7, :maj7)
		if (gradoBase.includes(":")) {
			gradoBase = gradoBase.split(":")[0];
		}

		// In tonalità maggiore, i gradi ii, iii, vi, vii sono minori
		if (tipoScala === "major") {
			if (gradoBase === "II") return "ii";
			if (gradoBase === "III") return "iii";
			if (gradoBase === "VI") return "vi";
			if (gradoBase === "VII") return "vii";
		}

		// In tonalità minore, i gradi III, VI, VII sono maggiori
		if (tipoScala === "minor") {
			if (gradoBase === "iii") return "III";
			if (gradoBase === "vi") return "VI";
			if (gradoBase === "vii") return "VII";
		}

		return gradoBase;
	};

	// Funzione per ottenere progressioni armoniche comuni
	const ottieniProgressioniComuni = (tonalita: string, tipoScala: string, tipoMinore: string) => {
		const accordiDiatonici = calcolaAccordiDiatonici(tonalita, tipoScala, tipoMinore);
		const progressioni: InfoProgressione[] = [];

		// Helper per costruire gli accordi della progressione
		const costruisciProgressione = (gradi: string[], nome: string, descrizione: string, genere: string): InfoProgressione => {
			const accordi = gradi.map((grado: string) => {
				// Gestione di accordi come V/V (dominanti secondarie)
				if (grado.includes("/")) {
					const [primaParte, secondaParte] = grado.split("/");

					// Ottieni la nota del grado di destinazione
					const gradoTarget = secondaParte;
					let notaTarget: string | undefined;

					// Gestione di gradi target con bemolle (es. V/bVI)
					if (gradoTarget.startsWith("b")) {
						const gradoBase = gradoTarget.substring(1); // Rimuovi il "b"
						const gradoNormalizzato = normalizzaGrado(gradoBase, tipoScala);

						if (accordiDiatonici[gradoNormalizzato]?.nota) {
							notaTarget = getFlatNote(accordiDiatonici[gradoNormalizzato].nota);
						}
					} else {
						// Normalizza il grado target anche se non ha bemolle
						const gradoNormalizzato = normalizzaGrado(gradoTarget, tipoScala);
						notaTarget = accordiDiatonici[gradoNormalizzato]?.nota;
					}

					if (!notaTarget) return "";

					// Calcola la quinta del grado target
					const quinta = ottieniCircoloDiQuinte(notaTarget, 1);

					// Se include specificazioni come :7
					if (primaParte.includes(":")) {
						const [estensione] = primaParte.split(":");
						if (estensione === "7") return `${quinta}7`;
						if (estensione === "9") return `${quinta}9`;
						return quinta;
					}

					return quinta;
				}

				// Gestione di gradi con bemolle (es. bVI, bVII)
				if (grado.startsWith("b")) {
					const gradoBase = grado.substring(1); // Rimuovi il "b"
					const gradoNormalizzato = normalizzaGrado(gradoBase, tipoScala);

					// Trova la nota base e abbassala di un semitono
					if (accordiDiatonici[gradoNormalizzato]?.nota) {
						const notaBase = accordiDiatonici[gradoNormalizzato].nota;
						const notaAbbassata = getFlatNote(notaBase);

						// Determina il tipo di accordo (maggiore o minore)
						const èMaggiore = gradoBase === gradoBase.toUpperCase() && !gradoBase.includes("vii") && !gradoBase.includes("ii");

						// Gestione delle estensioni degli accordi
						if (grado.includes(":")) {
							const [, tipo] = grado.split(":");
							if (tipo === "7") return `${notaAbbassata}7`;
							if (tipo === "maj7") return `${notaAbbassata}maj7`;
							if (tipo === "m7") return `${notaAbbassata}m7`;
							if (tipo === "dim") return `${notaAbbassata}dim`;
							return notaAbbassata;
						}

						// *** NUOVA REGOLA PER METAL ***
						// Per bVI e bVII, sono quasi sempre accordi maggiori, bIII (che è quasi sempre maggiore),
						// o bII (che nel metal neoclassico e orientale è spesso maggiore
						// indipendentemente dalla scala
						if (gradoBase.toUpperCase() === "VI" || gradoBase.toUpperCase() === "VII" || gradoBase.toUpperCase() === "II" || gradoBase.toUpperCase() === "II") {
							return notaAbbassata; // Ritorna l'accordo maggiore (senza "m")
						}

						return èMaggiore ? notaAbbassata : `${notaAbbassata}m`;
					}

					// Debug: mostra quali gradi abbiamo nell'oggetto
					console.log("Gradi disponibili:", Object.keys(accordiDiatonici));
					console.log("Grado non trovato:", gradoNormalizzato);

					return "";
				}

				// Gestione di accordi con specificazione come I:7
				if (grado.includes(":")) {
					const [deg, tipo] = grado.split(":");
					if (!accordiDiatonici[deg] || !accordiDiatonici[deg].nota) return "";

					const nota = accordiDiatonici[deg].nota;

					if (tipo === "7") return `${nota}7`;
					if (tipo === "maj7") return `${nota}maj7`;
					if (tipo === "m7") return `${nota}m7`;
					if (tipo === "dim") return `${nota}dim`;
					if (tipo === "7b9") return `${nota}7b9`;
					if (tipo === "m6") return `${nota}m6`;
					return nota;
				}

				// Gestione standard per gradi semplici
				if (!accordiDiatonici[grado] || !accordiDiatonici[grado].nota) return "";

				// Determina gli accordi base in base al grado
				const nota = accordiDiatonici[grado].nota;

				// Se è maiuscolo, è un accordo maggiore
				const èMaggiore = grado === grado.toUpperCase() && !grado.includes("vii") && !grado.includes("ii");

				// Se è il V in minore armonica o melodica
				const èVinArmonicaOMelodica = grado === "V" && tipoScala === "minor" && (tipoMinore === "harmonic" || tipoMinore === "melodic");

				// Se è il vii° in minore armonica
				const èViiDiminuito = grado === "vii" && tipoScala === "minor" && tipoMinore === "harmonic";

				if (èViiDiminuito) return `${nota}°`;
				if (èMaggiore || èVinArmonicaOMelodica) return nota;
				if (grado.includes("dim") || grado.includes("°")) return `${nota}dim`;
				return `${nota}m`;
			});

			return {
				nome,
				gradi: gradi.join(" - "),
				accordi: accordi.join(" - "),
				descrizione,
				genere,
			};
		};

		// Progressioni per tonalità maggiore
		if (tipoScala === "major") {
			progressioni.push(
				costruisciProgressione(["I", "IV", "V"], "Progressione Pop Classica", "La progressione più basilare e universale nella musica occidentale", "Pop, Folk, Country, Rock"),
				costruisciProgressione(["I", "V", "vi", "IV"], "Axis of Awesome", 'Usata in centinaia di hit pop, anche nota come "quattro accordi"', "Pop, Rock"),
				costruisciProgressione(["I", "vi", "IV", "V"], "Doo-Wop / Anni 50", "La classica progressione degli anni 50/60", "Doo-Wop, R&B, Pop classico"),
				costruisciProgressione(["ii:m7", "V:7", "I:maj7"], "ii-V-I Jazz", "La progressione fondamentale del jazz", "Jazz, Bossa Nova"),
				costruisciProgressione(["I", "V", "IV", "V"], "Turnaround Blues", "Utilizzata spesso nei finali blues", "Blues, Rock and Roll"),
				costruisciProgressione(["I:7", "IV:7", "I:7", "V:7", "I:7"], "Blues 12 battute", "La struttura classica del blues", "Blues, Jazz, Rock"),
				costruisciProgressione(["I", "iii", "IV", "V"], "Sensitive", "Progressione con un tocco emotivo", "Ballate, Pop"),
				costruisciProgressione(["I", "V/V", "V", "I"], "Cadenza autentica con dominante secondaria", "Crea una tensione aggiuntiva prima della risoluzione", "Classica, Pop sofisticato"),
				// Progressioni Metal in tonalità maggiore
				costruisciProgressione(["I", "bVII", "bVI", "bVII"], "Hard Rock/Metal Maggiore", "Basata su accordi dal modo misolidio, comune nel metal melodico", "Heavy Metal, Power Metal"),
				costruisciProgressione(["I", "bIII", "bVII", "IV"], "Metal Epico Maggiore", "Crea un senso di grandiosità e drammaticità, usa prestiti modali", "Power Metal, Folk Metal"),
				costruisciProgressione(["I", "bVI", "bVII", "I"], "Cadenza Metal", "Molto comune nei riff metal anche partendo da un accordo maggiore", "Heavy Metal, Thrash Metal")
			);
		}

		// Progressioni per tonalità minore
		if (tipoScala === "minor") {
			// Progressioni comuni a tutte le varianti minori
			progressioni.push(
				costruisciProgressione(["i", "VII", "VI", "V"], "Progressione Minore Discendente", "Crea una sensazione discendente drammatica", "Rock, Metal, Musica Cinematica"),
				costruisciProgressione(["i", "iv", "VII", "III"], "Minore Naturale Classica", "Progressione fondamentale in minore naturale", "Pop, Rock, Folk"),
				// Progressioni Metal comuni a tutte le varianti minori
				costruisciProgressione(["i", "bVI", "bVII", "i"], "Metal Classico", "La progressione più comune nel metal, con power chord di quinta", "Heavy Metal, Thrash Metal, Death Metal"),
				costruisciProgressione(["i", "bVII", "bVI", "bVII"], "Thrash/Death Metal", "Crea tensione senza risoluzione, ottima per riff pesanti e ripetitivi", "Thrash Metal, Death Metal, Groove Metal"),
				costruisciProgressione(["i", "bV", "bVI", "III"], "Black Metal", "Usa il tritono (bV) per creare dissonanza e tensione tipica del genere", "Black Metal, Extreme Metal"),
				costruisciProgressione(["i", "iv", "v", "i"], "Doom Metal", "Lenta e pesante, con minore naturale e ritmo rallentato", "Doom Metal, Stoner Metal, Gothic Metal")
			);

			// Progressioni specifiche per minore naturale
			if (tipoMinore === "natural") {
				progressioni.push(
					costruisciProgressione(["i", "VI", "VII", "i"], "Cadenza Eolica", "La classica cadenza in minore naturale", "Folk, Rock, Metal"),
					costruisciProgressione(["i", "III", "VII", "VI"], "Andalusa Discendente", "Comune nella musica spagnola e flamenca", "Flamenco, Musica Latina"),
					// Progressioni Metal specifiche per minore naturale
					costruisciProgressione(["i", "VII", "v", "VI"], "Progressive Metal", "Usata nei cambi di tempo e passaggi complessi del prog metal", "Progressive Metal, Djent, Math Metal"),
					costruisciProgressione(["i", "bIII", "iv", "bVII"], "Melodic Death Metal", "Combina armonia minore con elementi melodici", "Melodic Death Metal, Gothenburg Metal")
				);
			}

			// Progressioni specifiche per minore armonica
			if (tipoMinore === "harmonic") {
				progressioni.push(
					costruisciProgressione(["i", "iv", "V", "i"], "Cadenza Minore Classica", "La cadenza tipica della musica classica in minore", "Classica, Barocca, Romantica"),
					costruisciProgressione(["i", "V:7b9", "i"], "Cadenza Frigia", "Suono drammatico e tensivo tipico del flamenco", "Flamenco, Medio Oriente"),
					costruisciProgressione(["i", "iv", "V:7", "VI", "V:7"], "Drama Minore", "Usata spesso in musica drammatica", "Colonne Sonore, Opera"),
					// Progressioni Metal specifiche per minore armonica
					costruisciProgressione(["i", "V", "bII", "i"], "Neoclassical Metal", "Sfrutta l'intervallo caratteristico della minore armonica", "Neoclassical Metal, Shred Metal"),
					costruisciProgressione(["i", "bII", "V", "i"], "Oriental Metal", "Sfrutta il semitono bII-i della scala frigia e il V della minore armonica", "Oriental Metal, Folk Metal")
				);
			}

			// Progressioni specifiche per minore melodica
			if (tipoMinore === "melodic") {
				progressioni.push(
					costruisciProgressione(["i:m6", "IV", "V", "i"], "Jazz Minore", "Tipica del jazz modale in minore", "Jazz Moderno, Fusion"),
					costruisciProgressione(["i", "ii:m7", "V:7", "i"], "ii-V-i Jazz Minore", "La versione minore della ii-V-I classica del jazz", "Jazz, Bossa Nova"),
					costruisciProgressione(["i", "IV", "vii", "i"], "Minore Melodica Ascendente", "Sfrutta il vii semidiminuito della melodica", "Jazz, Musica Impressionista"),
					// Progressioni Metal specifiche per minore melodica
					costruisciProgressione(["i", "IV", "VII", "i"], "Progressive Metal Melodico", "Usa il IV maggiore della minore melodica per un suono più aperto", "Progressive Metal, Technical Death Metal"),
					costruisciProgressione(["i", "ii:m7b5", "bVII", "i"], "Technical Metal", "Combina il ii semidiminuito con il bVII per tensione complessa", "Technical Death Metal, Avant-garde Metal")
				);
			}
		}

		return progressioni;
	};

	// Helpers per aggiungere bemolli e diesis
	const ottieniNotaBemolle = (nota: string) => {
		const tutteLeNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
		const indice = tutteLeNote.indexOf(nota);
		if (indice <= 0) return "B";
		return tutteLeNote[indice - 1];
	};

	const ottieniNotaDiesis = (nota: string) => {
		const tutteLeNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
		const indice = tutteLeNote.indexOf(nota);
		if (indice >= tutteLeNote.length - 1) return "C";
		return tutteLeNote[indice + 1];
	};

	// Funzione per navigare nel cerchio delle quinte
	const ottieniCircoloDiQuinte = (nota: string, passi: number) => {
		const cerchio = ["C", "G", "D", "A", "E", "B", "F#", "C#", "G#", "D#", "A#", "F"];
		let indice = cerchio.indexOf(nota);
		if (indice === -1) {
			// Gestisce note con nomi alternativi (es. Db = C#)
			if (nota === "Db") indice = cerchio.indexOf("C#");
			else if (nota === "Eb") indice = cerchio.indexOf("D#");
			else if (nota === "Gb") indice = cerchio.indexOf("F#");
			else if (nota === "Ab") indice = cerchio.indexOf("G#");
			else if (nota === "Bb") indice = cerchio.indexOf("A#");
		}

		if (indice === -1) return nota; // Non dovrebbe accadere se la nota è valida

		// Naviga nel cerchio
		const nuovoIndice = (indice + passi) % 12;
		return cerchio[nuovoIndice];
	};

	// Utilizzo di useMemo per memorizzare calcoli costosi
	// Ciò evita ricalcoli inutili durante il rendering
	const accordiDiatonici = useMemo(() => calcolaAccordiDiatonici(tonalitaSelezionata, tipoScala, tipoMinore), [tonalitaSelezionata, tipoScala, tipoMinore]);

	const dominantiSecondarie = useMemo(() => calcolaDominantiSecondarie(tonalitaSelezionata, tipoScala, tipoMinore), [tonalitaSelezionata, tipoScala, tipoMinore]);

	const sostitutiTritono = useMemo(() => calcolaSostitutiTritono(tonalitaSelezionata, tipoScala, tipoMinore), [tonalitaSelezionata, tipoScala, tipoMinore]);

	const interscambioModale = useMemo(() => calcolaInterscambioModale(tonalitaSelezionata, tipoScala), [tonalitaSelezionata, tipoScala]);

	const progressioniComuni = useMemo(() => ottieniProgressioniComuni(tonalitaSelezionata, tipoScala, tipoMinore), [tonalitaSelezionata, tipoScala, tipoMinore]);

	// Gestori eventi
	const handleChangeTonalita = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTonalitaSelezionata(e.target.value);
	};

	const handleChangeModalitaVisualizzazione = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setModalitaVisualizzazione(e.target.value);
	};

	const handleChangeTipoScala = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTipoScala(e.target.value);
	};

	const handleChangeTipoMinore = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTipoMinore(e.target.value);
	};

	const toggleProgressioni = () => {
		setMostraProgressioni(!mostraProgressioni);
	};

	// Componente per visualizzare una categoria di accordi
	const CategoriaAccordi = ({ titolo, accordi, colore }: PropsCategoriaDiAccordi) => {
		if (!accordi) return null;

		return (
			<div
				className='mb-6 p-4 rounded-lg'
				style={{ backgroundColor: colore }}
			>
				<h3 className='text-lg font-bold mb-2'>{titolo}</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{Object.keys(accordi).map((grado) => (
						<div
							key={grado}
							className='mb-2'
						>
							<span className='font-semibold'>{grado}: </span>
							<span>{accordi[grado].accordi.join(", ")}</span>
						</div>
					))}
				</div>
			</div>
		);
	};

	// Componente per visualizzare progressioni armoniche
	const CategoriaProgressioni = ({ progressioni }: PropsCategoriaProgressioni) => {
		if (!progressioni || progressioni.length === 0) return null;

		return (
			<div className='mb-6 p-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50'>
				<h3 className='text-lg font-bold mb-4'>Progressioni Armoniche Comuni</h3>
				{progressioni.map((prog, index) => (
					<div
						key={index}
						className='mb-4 p-3 bg-white rounded shadow-sm'
					>
						<h4 className='font-bold text-blue-800'>{prog.nome}</h4>
						<div className='mt-1 text-sm text-gray-600'>{prog.genere}</div>
						<div className='mt-2'>
							<span className='font-semibold'>Gradi: </span>
							<span className='font-mono'>{prog.gradi}</span>
						</div>
						<div className='mt-1'>
							<span className='font-semibold'>Accordi: </span>
							<span className='font-mono'>{prog.accordi}</span>
						</div>
						<div className='mt-2 text-sm italic'>{prog.descrizione}</div>
					</div>
				))}
			</div>
		);
	};

	// Funzione per esportare le progressioni come file di testo
	const esportaProgressioni = () => {
		const progressioni = progressioniComuni;
		if (!progressioni || progressioni.length === 0) return;

		let testo = `Progressioni Armoniche in ${tonalitaSelezionata} ${tipoScala === "major" ? "Maggiore" : "Minore"}\n\n`;

		progressioni.forEach((prog, index) => {
			testo += `${index + 1}. ${prog.nome}\n`;
			testo += `   Genere: ${prog.genere}\n`;
			testo += `   Gradi: ${prog.gradi}\n`;
			testo += `   Accordi: ${prog.accordi}\n`;
			testo += `   Descrizione: ${prog.descrizione}\n\n`;
		});

		// Crea un elemento di download
		const element = document.createElement("a");
		const file = new Blob([testo], { type: "text/plain" });
		element.href = URL.createObjectURL(file);
		element.download = `progressioni_${tonalitaSelezionata}_${tipoScala}.txt`;
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	return (
		<div className='max-w-4xl mx-auto p-4'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-6'>
				{/* Selettore di tonalità */}
				<div>
					<label
						className='block mb-2 font-medium'
						htmlFor='key-select'
					>
						Seleziona Tonalità:
					</label>
					<select
						id='key-select'
						value={tonalitaSelezionata}
						onChange={handleChangeTonalita}
						className='w-full p-2 border rounded bg-white'
						aria-label='Seleziona tonalità musicale'
					>
						{tonalita.map((key) => (
							<option
								key={key}
								value={key}
							>
								{key}
							</option>
						))}
					</select>
				</div>

				{/* Selettore di tipo scala */}
				<div>
					<label
						className='block mb-2 font-medium'
						htmlFor='scale-type-select'
					>
						Tipo di Scala:
					</label>
					<select
						id='scale-type-select'
						value={tipoScala}
						onChange={handleChangeTipoScala}
						className='w-full p-2 border rounded bg-white'
						aria-label='Seleziona tipo di scala'
					>
						<option value='major'>Maggiore</option>
						<option value='minor'>Minore</option>
					</select>
				</div>

				{/* Selettore variante minore (solo se scala minore) */}
				{tipoScala === "minor" && (
					<div>
						<label
							className='block mb-2 font-medium'
							htmlFor='minor-type-select'
						>
							Variante Minore:
						</label>
						<select
							id='minor-type-select'
							value={tipoMinore}
							onChange={handleChangeTipoMinore}
							className='w-full p-2 border rounded bg-white'
							aria-label='Seleziona variante scala minore'
						>
							<option value='natural'>Naturale</option>
							<option value='harmonic'>Armonica</option>
							<option value='melodic'>Melodica</option>
						</select>
					</div>
				)}

				{/* Selettore modalità visualizzazione */}
				<div>
					<label
						className='block mb-2 font-medium'
						htmlFor='display-mode-select'
					>
						Visualizza:
					</label>
					<select
						id='display-mode-select'
						value={modalitaVisualizzazione}
						onChange={handleChangeModalitaVisualizzazione}
						className='w-full p-2 border rounded bg-white'
						aria-label='Seleziona modalità di visualizzazione'
					>
						<option value='all'>Tutti gli accordi</option>
						<option value='diatonic'>Solo accordi diatonici</option>
						<option value='modal'>Solo interscambio modale</option>
						<option value='secondary'>Solo dominanti secondarie</option>
					</select>
				</div>

				{/* Pulsanti per progressioni */}
				<div className='sm:col-span-2 grid grid-cols-2 gap-2'>
					<button
						onClick={toggleProgressioni}
						className='w-full p-2 mt-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition'
						aria-label={mostraProgressioni ? "Nascondi progressioni armoniche" : "Mostra progressioni armoniche comuni"}
					>
						{mostraProgressioni ? "Nascondi Progressioni" : "Mostra Progressioni Comuni"}
					</button>

					{mostraProgressioni && (
						<button
							onClick={esportaProgressioni}
							className='w-full p-2 mt-2 bg-green-600 text-white rounded hover:bg-green-700 transition'
							aria-label='Esporta progressioni armoniche come file di testo'
						>
							Esporta Progressioni
						</button>
					)}
				</div>
			</div>

			<div className='bg-white rounded-lg shadow-lg p-6'>
				<h2 className='text-xl font-bold mb-4 text-center'>
					Prospetto Accordi in {tonalitaSelezionata} {tipoScala === "major" ? "Maggiore" : "Minore"}
					{tipoScala === "minor" && ` (${tipoMinore === "natural" ? "Naturale" : tipoMinore === "harmonic" ? "Armonica" : "Melodica"})`}
				</h2>

				{(modalitaVisualizzazione === "all" || modalitaVisualizzazione === "diatonic") && (
					<CategoriaAccordi
						titolo='Accordi Diatonici (Armonizzazione per Terze)'
						accordi={accordiDiatonici}
						colore='#f0f8ff'
					/>
				)}

				{(modalitaVisualizzazione === "all" || modalitaVisualizzazione === "modal") && (
					<CategoriaAccordi
						titolo='Interscambio Modale (Prestiti dai modi paralleli)'
						accordi={interscambioModale}
						colore='#fff0f5'
					/>
				)}

				{(modalitaVisualizzazione === "all" || modalitaVisualizzazione === "secondary") && (
					<CategoriaAccordi
						titolo='Dominanti Secondarie'
						accordi={dominantiSecondarie}
						colore='#fffacd'
					/>
				)}

				{(modalitaVisualizzazione === "all" || modalitaVisualizzazione === "secondary") && (
					<CategoriaAccordi
						titolo='Sostituti di Tritono'
						accordi={sostitutiTritono}
						colore='#e6e6fa'
					/>
				)}

				{mostraProgressioni && <CategoriaProgressioni progressioni={progressioniComuni} />}
			</div>

			<div className='mt-8 text-center text-gray-600 text-sm'>
				<p>Usa questo strumento per esplorare accordi in diverse tonalità, sia maggiori che minori.</p>
				<p>Gli accordi sono raggruppati per categoria per facilitare la costruzione di progressioni interessanti.</p>
				{tipoScala === "minor" && (
					<div className='mt-4 p-3 bg-blue-50 rounded text-left'>
						<p className='font-semibold'>Note sulle scale minori:</p>
						<ul className='list-disc pl-5 mt-2'>
							<li>
								<span className='font-medium'>Minore Naturale:</span> Corrisponde al modo eolio, con 3ª, 6ª e 7ª minori.
							</li>
							<li>
								<span className='font-medium'>Minore Armonica:</span> Come la naturale ma con 7ª maggiore, produce un V grado maggiore.
							</li>
							<li>
								<span className='font-medium'>Minore Melodica:</span> Come la naturale ma con 6ª e 7ª maggiori (ascendente).
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};
