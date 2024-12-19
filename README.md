# Kwéyòl Dictionary App

A dynamic React application that displays random dictionary entries with a clean, responsive layout.

## Features

- Random word generator that updates every 5 seconds
- Full dictionary word list display
- Responsive three-panel layout with header, main content, and footer
- Built with React and TypeScript
- Styled with Tailwind CSS

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

## Styling

Uses Tailwind CSS classes for:
- Flex layout
- Responsive design
<!-- - Color schemes
  - Header: Red background
  - Main content: Yellow background
  - Footer: Green background -->

## Data Management

- Utilizes `SortedDictionary` for random word selection
- Implements `dataLib` for complete dictionary access
- Global content management through `AppContentData`

## Setup

The app automatically:
- Sets up state management for random words
- Initializes intervals for word rotation
- Updates copyright year

## Acknowledgements
- [Kwéyòl Dictionary, David Frank](http://www.saintluciancreole.dbfrank.net/dictionary/KweyolDictionary.pdf)
