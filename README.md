# Palé Patwa | Kwéyòl Dictionary App

> A dynamic React application that displays random dictionary entries with a clean, responsive layout.

<!-- [Add a screenshot/demo gif here] -->
## 📚 Quick Links
- [Overview](#overview)
- [Getting Started](#-getting-started)
- [Features](#-features)
- [Architecture](#-architecture)
- [Development](#-development-scripts)
- [Contributing](#-contributing-guidelines)


## Overview
The Kwéyòl Dictionary App is an interactive digital reference tool that makes the Saint Lucian Creole language accessible through daily featured words and a comprehensive searchable dictionary. It combines educational value with modern functionality by offering etymology details, parts of speech, and dialect information, making it an invaluable resource for both language learners and native speakers.

## 🚀 Getting Started
<!-- - Prerequisites -->

### 💾 Installation
```bash
npm install
```

<!-- - Quick Start
- Environment Setup -->

## 📖 Usage
### ✨ Features
- Full dictionary word list display
- Search functionality
- Etymology information from French origins
- Example sentences in both Kwéyòl and English

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

#### Search Capabilities
- Real-time filtering
- Support for Kwéyòl diacritics
<!-- - Part of speech filtering -->

#### UI/UX
- Three-panel responsive layout
- Modal system for detailed word views
- Typography optimized for Kwéyòl characters

### 📖 Basic Usage

```bash
npm run start
```
<!-- - Configuration
- Examples -->

## 🏗️ Architecture
### Project Structure

```markdown:README.md
src/
├── components/   # UI building blocks
│   ├── Header/
│   ├── WordList/
│   └── Footer/
├── data/         # Dictionary entries
│   └── Letters/  # Alphabetically organized word collections
├── hooks/        # Custom React hooks
├── styles/       # Tailwind configurations
├── types/        # TypeScript definitions
└── utils/        # Helper functions
```

### Component Structure
The app uses a three-part layout:
- **Header**: Date and branding
- **Main**: Displays random word and the full dictionary
- **Footer**: Copyright information and site details

### Data Management
- JSON-stored dictionary entries
- Daily featured word selection algorithm
- Accent-agnostic search functionality
- Filters for parts of speech and etymology
- Modal integration with dictionary data
- Search term normalization for better filtering
- Centralized content via AppContentData
- Entries categorized by letter
- Bilingual example sentences
- Etymology tracking for French-derived terms
- Dialect indicators with country flags

### 🛠️ Tech Stack
```markdown:README.md
React 18
TypeScript
Tailwind CSS
```

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

### 🤝 Contributing Guidelines

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
<!-- - Code Style -->

### 🚧 Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Visit `http://localhost:3000`

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
<!-- - Changelog
- FAQ -->
