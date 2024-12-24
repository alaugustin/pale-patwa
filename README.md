# Kwéyòl Dictionary App

> A dynamic React application that displays random dictionary entries with a clean, responsive layout.

## 📚 Quick Links
- [Features](#features)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)

## ✨ Features
- Daily word refresh at midnight
- Full dictionary word list display
- Responsive three-panel layout
- Modal system for detailed word viewing
- Search functionality
- Etymology and part of speech indicators

## 🚀 Installation
```bash
npm install
```

## 🛠️ Tech Stack
```markdown:README.md
React 18
TypeScript
Tailwind CSS
```

## 📖 Usage
```bash
npm run start
```
## Project Structure

```markdown:README.md
src/
├── components/   # UI building blocks
│   ├── Header/
│   ├── WordList/
│   └── Footer/
├── data/         # Dictionary entries
├── hooks/        # Custom React hooks
├── styles/       # Tailwind configurations
├── types/        # TypeScript definitions
└── utils/        # Helper functions
```

## Browser Support

```markdown:README.md
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
```

## 🧪 Testing

```bash
npm run test
```

## 🤝 Contributing

```markdown:README.md
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
```

## Component Structure

The app uses a three-part layout:

- **Header**: Date and branding
- **Main**: Displays random word and the full dictionary
- **Footer**: Copyright information and site details

## Key Functions

- `getRandomItem()`: Selects a random word from the dictionary
- Auto-updating year in footer
- Dynamic page title setting
- Library word filter
- **Modal**: Displays detailed word information with etymology and examples
- **WordAttributes**: Shows linguistic metadata for each word entry

## Styling

Uses Tailwind CSS classes for:
- Flex layout
- Responsive design

## Data Management

- Utilizes `SortedDictionary` for random word selection
- Implements `dataLib` for complete dictionary access
- Global content management through `AppContentData`
- Modal integration with dictionary data
- Search term normalization for improved word filtering
- Centralized content management through AppContentData

## Typography System

- Supports h1, h2, h3, p, span, and strong variants

## 📜 License
MIT

## 🙏 Acknowledgements

- [Kwéyòl Dictionary, David Frank](http://www.saintluciancreole.dbfrank.net/dictionary/KweyolDictionary.pdf)
- [Kwéyòl Dictionary, Webonary](https://www.webonary.org/kweyol/)
