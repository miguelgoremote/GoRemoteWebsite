# GoRemote LLC Website

Eine professionelle, zweisprachige React-Webseite für GoRemote LLC, ein B2B-Consulting-Unternehmen, das sich auf Vertriebskanal-Optimierung und Vertriebsstrategien spezialisiert.

## Features

- 🌐 Zweisprachig (Englisch/Deutsch) mit einfachem Sprachwechsel
- 📱 Vollständig responsive Design
- 🎨 Modernes, cleanes UI-Design mit Tailwind CSS
- ⚡ Schnelle Performance durch Vite
- 🔍 Professionelle Struktur und TypeScript

## Installation

1. Abhängigkeiten installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

3. Build für Produktion erstellen:
```bash
npm run build
```

## Technologien

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router (vorbereitet für zukünftige Erweiterungen)

## Projektstruktur

```
src/
├── components/       # React-Komponenten
├── contexts/         # React Contexts (Language)
├── i18n/            # Übersetzungen
├── App.tsx          # Haupt-App-Komponente
├── main.tsx         # Entry Point
└── index.css        # Globale Styles
```

## Sprache wechseln

Die Sprache kann über die Buttons in der Navigation (EN/DE) gewechselt werden. Die Auswahl wird im localStorage gespeichert.

