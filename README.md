# Palé Patwa | Kwéyòl Dictionary App

> A dynamic React application that displays random dictionary entries with a clean, responsive layout.


<!-- [Add a screenshot/demo gif here] -->
## 📚 Quick Links
- [Overview](#overview)
- [Usage](#-usage)
- [Features](#core-features)
- [Architecture](#-architecture)
- [Development](#-development-scripts)
- [Contributing](#-contributing-guidelines)


## Overview
The Kwéyòl Dictionary App is an interactive digital reference tool that makes the Saint Lucian Creole language accessible through daily featured words and a comprehensive searchable dictionary. It combines educational value with modern functionality by offering etymology details, parts of speech, and dialect information, making it an invaluable resource for both language learners and native speakers.\


## 📖 Usage
### 💻 System Requirements
- Node.js 16.x or higher
- npm 8.x or higher
- Modern web browser with JavaScript enabled


### ✨Core Features
- Search System
  - Real-time filtering with diacritic support
  - Normalized search terms for improved matches
  - Part of speech and etymology filters
  - Alphabetical letter filtering for quick navigation
- Interface
  - Responsive three-panel layout
  - Modal views for detailed word information
  - Optimized typography for Kwéyòl characters
  - Touch/swipe gesture support


#### Language Features
- Complete family relationship vocabulary
- Personal pronoun system
- Cross-referencing between related terms
- Synonym and antonym relationships
- Variant forms documentation


#### Daily Word Feature
- Automatic refresh at midnight
- Random selection from curated dictionary
- Full etymology and usage examples


## 🏗️ Architecture
### Project Organization
```markdown:README.md
src/
├── components/         # React components
│   ├── Organisms/      # Complex components
│   │   ├── Wordlist/   # Dictionary display logic
│   │   └── Search/     # Search functionality
│   └── UI/             # Reusable UI elements
├── data/               # Dictionary entries & content
├── types/              # TypeScript definitions
└── utils/              # Helper functions
```


### Core Components
- **WordList**: Container managing dictionary layout
  - WordlistObjects: Handles pagination, search, and display logic
  - DictionarySearch: Real-time filtering interface
  - ListItem: Individual word entry display


### Data Flow
1. Dictionary entries loaded from data/
2. WordlistObjects processes entries with:
   - Dynamic pagination based on screen height
   - Normalized search filtering
   - Duplicate word handling with subscripts
3. UI updates through React state management


### 🛠️ Tech Stack
```markdown:README.md
React 18.x
TypeScript 4.x
Tailwind CSS 3.x
React Swipeable
```

### Technical Implementation Details
- Dynamic pagination with responsive items per page
- Normalized search with diacritic handling
- Touch/mouse swipe gesture support
- Duplicate word handling with subscript notation
- Responsive window dimension calculations


## 💅 Styling & UI
### Typography System
- Supports h1, h2, h3, p, span, and strong variants

Uses Tailwind CSS classes for:
- Flex layout
- Responsive design


### Browser Support
```markdown:README.md
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
```


## 🚧 Development Scripts
```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run test     # Run test suite
npm run lint     # Run code linting
```


### Development Tools
- ESLint for code quality
- React Swipeable for touch interactions
- TypeScript for type safety
- Component-driven architecture


### 🤝 Contributing Guidelines
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request


### Local Development Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Start development server: `npm run dev`
5. Run tests: `npm test`
6. Access app at `http://localhost:3000`


### 🚀 Deployment
1. Build production bundle: `npm run build`
2. Static file hosting compatible
3. Supports containerized deployment


## 📚 Additional Information
### 📜 License
MIT
### 🙏 Acknowledgements
- [Kwéyòl Dictionary, David Frank](http://www.saintluciancreole.dbfrank.net/dictionary/KweyolDictionary.pdf)
- [Kwéyòl Dictionary, Webonary](https://www.webonary.org/kweyol/)
- [Saint Lucian Creole, Wikipedia](https://en.wikipedia.org/wiki/Saint_Lucian_Creole)
