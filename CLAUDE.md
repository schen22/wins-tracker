# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript application called "wins-tracker" that aims to help users identify whether daily progress is values-driven. The project is a learning exercise focused on TypeScript, React, and database integration, built with pair programming using Claude.

## Development Commands

### Essential Commands
- `npm start` - Start development server (runs on http://localhost:3000)
- `npm test` - Run tests in interactive watch mode
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App (irreversible)

### Testing
- Tests use Jest and React Testing Library
- Run `npm test` for interactive test runner
- Test files should follow the pattern `*.test.tsx` or `*.test.ts`

## Tech Stack & Architecture

### Core Technologies
- **React 19.1.0** with TypeScript 4.9.5
- **Create React App** as the build tool and development environment
- **Tailwind CSS 4.1.10** for styling (installed via @tailwindcss/cli)
- **Jest + React Testing Library** for testing

### Project Structure
- Standard Create React App structure
- `src/` contains all application code
- TypeScript configuration uses strict mode with modern JSX transform
- Tailwind CSS is used for styling but no config files are present yet

### Current State
- Basic Create React App setup with default components
- Tailwind CSS dependencies installed but not fully configured
- No database integration implemented yet
- Standard ESLint configuration via react-app preset

## Development Notes

- The project is in early stages - currently has default CRA boilerplate
- Tailwind CSS is installed but may need configuration files (tailwind.config.js, postcss.config.js)
- The main application logic for tracking "wins" and values-driven progress is not yet implemented
- Database integration is planned but not yet started