# Palé Kwéyòl | Kwéyòl Dictionary App

> An interactive online dictionary for Saint Lucian Kwéyòl (French Creole), with a daily featured word and a fully searchable, paginated vocabulary library.

<!-- [Add a screenshot/demo gif here] -->

## 📚 Quick Links

- [Overview](#overview)
- [Usage](#-usage)
- [Features](#core-features)
- [Architecture](#-architecture)
- [Development](#-development-scripts)
- [Contributing](#-contributing-guidelines)

## Overview

Palé Kwéyòl is a free, open-access digital dictionary for Saint Lucian Kwéyòl. It surfaces a new word each day and provides a searchable library of ~531 entries with definitions, etymology, example sentences in both Kwéyòl and English, parts of speech, synonyms, antonyms, and variant forms. The goal is to make the language accessible to learners, diaspora, teachers, and researchers.

Live at: [palekweyol.com](https://palekweyol.com)

## 📖 Usage

### 💻 System Requirements

- Node.js 18.x or higher
- npm 9.x or higher
- Modern web browser with JavaScript enabled

### ✨Core Features

- **Search System**
  - Real-time full-text filtering across word, definition, example sentences, etymology, synonyms, antonyms, and variants
  - Diacritic-insensitive (accent-normalized) matching
  - Alphabetical letter filter for quick navigation
- **Interface**
  - Responsive layout adapting to viewport height
  - Modal views for detailed word information
  - Touch/swipe gesture support for paginated browsing
  - Viewport-height-responsive pagination (8–33 items per page)
- **Comprehensive Vocabulary**
  - ~531 entries across letters A–Z, plus Numbers, Calendar, Time, and Saint Lucia place names
  - Cross-referencing between related terms
  - Etymology tracking

#### Language Features

- Example sentences in both Kwéyòl and English
- Synonym and antonym relationships
- Variant forms
- Parts of speech (ART, PREP, V, N, ADJ, PRO, etc.)
- Etymology with source language (e.g. `[< Fr. aller]`)
- Dialect indicators (🇱🇨)
- AI platform setup guide for Kwéyòl learning workflows (`/chat-gpt`)

#### Daily Word Feature

- Random word selected once per calendar day
- Persisted in `localStorage` with hourly freshness check
- Displays definition, etymology, part of speech, and dialect

## 🏗️ Architecture

### Project Organization

```
src/
├── Components/
│   ├── Organisms/          # Feature-level components
│   │   ├── WordOfTheDay/
│   │   ├── Wordlist/
│   │   │   └── WordSearchPagination/
│   │   ├── DictionarySearch/
│   │   ├── Modal/
│   │   ├── Pagination/
│   │   ├── Header/
│   │   └── Footer/
│   └── UI/                 # Primitive components
│       ├── BlockLevel/
│       ├── Form/
│       ├── List/
│       ├── Link/
│       └── Typography/
├── Data/
│   ├── Letters/            # Per-letter dictionary files (A–Z)
│   ├── Numbers/
│   ├── Calendar/
│   ├── Time/
│   ├── Misc/
│   ├── data.tsx            # Aggregates and sorts all entries
│   └── AppContent.tsx      # UI classes, copy, icons, helpers
└── hooks/
    └── useWindowDimensions.ts
```

### Core Components

- **WordOfTheDay** — Daily word display with two-column layout
- **WordList / WordSearchPagination** — Alphabet filter, search input, paginated list, swipe navigation
- **ListItem → Modal** — Word button that opens a full detail view with relations and attributes
- **Pagination / PaginationJumpButton** — Page controls with ±5 / ±10 jump buttons

### Data Flow

1. All ~531 entries are imported from per-letter TSX files into `src/Data/data.tsx`
2. `dataLib` is assembled and sorted alphabetically into `SortedDictionary`
3. `App.tsx` selects the Word of the Day from `SortedDictionary` (random, persisted daily via localStorage)
4. `WordSearchPagination` applies alphabet filter, text search, and viewport-height pagination
5. Clicking a word opens a `Modal` with the full entry from `SortedDictionary`

### Dictionary Entry Schema

```ts
{
  word: string
  partOfSpeech: string            // 'ART' | 'PREP' | 'V' | 'N' | 'ADJ' | etc.
  definition: (string | number)[] // arrays; Numbers use mixed e.g. [1, '(one)']
  egSentenceKw: string | null
  egSentenceEn: string | null
  synonym: (string | null)[]
  antonym: (string | null)[]
  etymology: string | null        // e.g. '[< Fr. aller]'
  dialect: string                 // flag emoji e.g. '🇱🇨'
  variant: (string | null)[]
}
```

### 🛠️ Tech Stack

```
React 18.2
TypeScript 5.3
Tailwind CSS 3.4 (clsx + tailwind-merge)
react-swipeable
Create React App (react-scripts 5)
```

### Technical Implementation Details

- All UI classes centralised in `AppContent.tsx` via `cn()` utility (clsx + tailwind-merge)
- Viewport-height-responsive pagination with breakpoints (667px, 896px, 1024px, 1280px)
- Diacritic normalization via `String.normalize('NFD')`
- Subscript notation for disambiguation of same-spelling entries

## 💅 Styling & UI

### Typography System

- `Typography` component supports `h1`, `h2`, `h3`, `p`, `span`, `strong`, `sub` variants
- All Tailwind class strings defined in `AppContent.uiClasses` — components import from there rather than inlining styles

### Browser Support

```
Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
```

## 🚧 Development Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Create production build
npm run lint     # Run ESLint
npm run test     # Run test suite
```

### 🤝 Contributing Guidelines

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

### Local Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Access app at `http://localhost:3000`

### Adding Dictionary Entries

1. Open the relevant letter file: `src/Data/Letters/[X].tsx`
2. Add an entry following the schema above
3. `definition`, `synonym`, `antonym`, `variant` must be arrays — use `[null]` for synonym/antonym/variant if none; use `[]` for definition if unknown
4. Run `npm start` and verify the entry appears

### 🚀 Deployment

1. Build production bundle: `npm run build`
2. Deploy `/build` directory to static file hosting
3. Production site: [palekweyol.com](https://palekweyol.com) (branch: `main`)

## 📚 Additional Information

### 📜 License

MIT

### 🙏 Acknowledgements

- [Kwéyòl Dictionary, David Frank](http://www.saintluciancreole.dbfrank.net/dictionary/KweyolDictionary.pdf)
- [Kwéyòl Dictionary, Webonary](https://www.webonary.org/kweyol/)
- [Saint Lucian Creole, Wikipedia](https://en.wikipedia.org/wiki/Saint_Lucian_Creole)
