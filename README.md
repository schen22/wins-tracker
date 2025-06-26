# Wins Tracker

A React + TypeScript application for tracking daily achievements and identifying values-driven progress.

## Project Goals
1. Learn TypeScript, React, and database integration
2. Identify whether daily progress is values-driven
3. Pair program with Claude Code for hands-on learning

## Architecture

View the [complete architecture diagram](docs/architecture.md) showing component relationships and data flow.

**Core Components:**
- **WinForm** - Add daily achievements
- **WinList** - Display recent wins
- **CategoryFilter** - Filter by life areas (puppy, career, friends, family, volunteering)
- **Summary** - Progress insights and values-based reflection

## Documentation

- 📋 [Architecture](docs/architecture.md) - Component diagrams and system overview
- 🔧 [Development Specs](.claude/) - Modular development guidelines
  - [Code Analysis](.claude/code-analysis.md)
  - [Commit Standards](.claude/commit.md)
  - [Documentation](.claude/create-docs.md)
  - [Code Quality](.claude/code-quality.md)

## Claude Code generated todo based on my prompt + goals

### MVP Core Features (Start Simple)

#### Essential MVP Features:

1. Add a "win" - Simple form to log daily achievements
2. Categorize wins - Assign to life areas (puppy, career, friends, etc.)
3. View recent wins - List of recent entries
4. Basic stats - Count wins per category

#### Phase 2 Features:

- Values alignment scoring
- Progress trends/visualization
- Multi-user support

Learning-First Component Breakdown

Start with these 4 core components:

1. WinForm - Learn forms, state management, validation
2. WinList - Learn data rendering, keys, conditional rendering
3. CategoryFilter - Learn event handling, state lifting
4. StatsDisplay - Learn data transformation, basic calculations

### Setup

1. Create project directory
2. Initialize React + Typescript Project
   `npx create-react-app . --template typescript`
3. Install Tailwind CSS

- Chose cause it's most popular honestly /shrug. The only opinion I have is to choose something that seems customizable and minimal need to write in CSS
- claude.ai docs don't match tailwind css -- https://tailwindcss.com/docs/installation/tailwind-cli

```
npm install tailwindcss @tailwindcss/cli
```

4. Build locally
   `npm start`

## Generated Instructions below

# Getting Started with Create React App

x
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
