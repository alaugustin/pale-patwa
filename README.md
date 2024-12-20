# Kwéyòl Dictionary App

A dynamic React application that displays random dictionary entries with a clean, responsive layout.

## Features

- Random word generator that updates every 5 seconds
- Full dictionary word list display
- Responsive three-panel layout with header, main content, and footer
- Built with React and TypeScript
- Styled with Tailwind CSS
- Modal system for detailed word viewing
- Search functionality in dictionary list
- Dynamic word attributes display
- Etymology and part of speech indicators

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
<!-- - Color schemes
  - Header: Red background
  - Main content: Yellow background
  - Footer: Green background -->

## Data Management

- Utilizes `SortedDictionary` for random word selection
- Implements `dataLib` for complete dictionary access
- Global content management through `AppContentData`
- Modal integration with dictionary data
- Search term normalization for improved word filtering
- Centralized content management through AppContentData

## Typography System
- Supports h1, h2, h3, p, span, and strong variants

## Setup

The app automatically:
- Sets up state management for random words
- Initializes intervals for word rotation
- Updates copyright year

## Acknowledgements
- [Kwéyòl Dictionary, David Frank](http://www.saintluciancreole.dbfrank.net/dictionary/KweyolDictionary.pdf)
