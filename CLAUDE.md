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

## Advanced Code Analysis

Perform comprehensive code analysis with multiple inspection options:

### Analysis Menu

#### 1. Knowledge Graph Generation
- Map relationships between components
- Visualize dependencies with `npm run analyze:graph`
- Identify architectural patterns

#### 2. Code Quality Evaluation
- Complexity metrics
- Maintainability index
- Technical debt assessment
- Code duplication detection

#### 3. Performance Analysis
- Identify bottlenecks
- Memory usage patterns
- Algorithm complexity
- Bundle analysis with `npm run analyze:bundle`

#### 4. Security Review
- Vulnerability scanning
- Input validation checks
- Authentication/authorization review
- Sensitive data handling

#### 5. Architecture Review
- Design pattern adherence
- SOLID principles compliance
- Coupling and cohesion analysis
- Module boundaries

#### 6. Test Coverage Analysis
- Coverage percentages with `npm run test:coverage`
- Untested code paths
- Test quality assessment
- Missing edge cases

### Analysis Process
1. Select analysis type based on need
2. Run appropriate tools and inspections
3. Generate comprehensive report
4. Provide actionable recommendations
5. Prioritize improvements by impact

### Output Format
- Executive summary
- Detailed findings
- Risk assessment
- Improvement roadmap
- Code examples where relevant

## Commit Standards

Create well-formatted commits with conventional commit messages and emojis:

### Commit Types
- ✨ `feat`: New features
- 🐛 `fix`: Bug fixes
- 📝 `docs`: Documentation changes
- ♻️ `refactor`: Code restructuring without changing functionality
- 🎨 `style`: Code formatting, missing semicolons, etc.
- ⚡️ `perf`: Performance improvements
- ✅ `test`: Adding or correcting tests
- 🧑‍💻 `chore`: Tooling, configuration, maintenance
- 🚧 `wip`: Work in progress
- 🔥 `remove`: Removing code or files
- 🚑 `hotfix`: Critical fixes
- 🔒 `security`: Security improvements

### Commit Process
1. Check for staged changes (`git status`)
2. If no staged changes, review and stage appropriate files
3. Run pre-commit checks (lint, build, generate docs)
4. Analyze changes to determine commit type
5. Generate descriptive commit message
6. Include scope if applicable: `type(scope): description`
7. Add body for complex changes explaining why
8. Execute commit

### Best Practices
- Keep commits atomic and focused
- Write in imperative mood ("Add feature" not "Added feature")
- Explain why, not just what
- Reference issues/PRs when relevant
- Split unrelated changes into separate commits

## Documentation Standards

Create comprehensive documentation for components and features:

### Documentation Template
- **Overview**: Brief 1-2 paragraph overview explaining purpose and value
- **Usage**: How to use this component/feature with examples
- **API/Props/Parameters**: Detailed specification of interfaces
- **Component Hierarchy**: Structure and relationships
- **State Management**: How state is handled and flows
- **Behavior**: Expected behavior in different scenarios
- **Error Handling**: How errors are caught, handled, and reported
- **Performance Considerations**: Optimization notes
- **Accessibility**: Accessibility features and compliance
- **Testing**: How to test this component/feature
- **Related Components**: Links to related documentation

### Documentation Process
1. Analyze the target code thoroughly
2. Identify all public interfaces
3. Document expected behaviors
4. Include code examples
5. Add diagrams where helpful
6. Follow project documentation standards
7. Ensure clarity, completeness, and actionability

## Code Quality Standards

Fix all code formatting and quality issues:

### JavaScript/TypeScript Projects
1. **Format with Prettier**: `npx prettier --write .`
2. **Fix ESLint issues**: `npx eslint . --fix`
3. **Check TypeScript**: `npx tsc --noEmit`

### Quality Process
1. Run automated formatters first
2. Fix remaining linting issues manually
3. Resolve type checking errors
4. Verify all tools pass with no errors
5. Review changes before committing

### Common Issues to Fix
- Import order conflicts between tools
- Line length violations
- Unused imports/variables
- Type annotation requirements
- Missing return types
- Inconsistent quotes/semicolons

## Development Notes

- The project is in early stages - currently has default CRA boilerplate
- Tailwind CSS is installed but may need configuration files (tailwind.config.js, postcss.config.js)
- The main application logic for tracking "wins" and values-driven progress is not yet implemented
- Database integration is planned but not yet started

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Generic components (Button, Input, etc.)
│   ├── forms/           # Form-specific components
│   └── layout/          # Layout components (Header, Nav, etc.)
├── features/            # Feature-based organization
│   └── wins/            # Everything related to wins functionality
│       ├── components/  # Win-specific components
│       ├── hooks/       # Custom hooks for wins
│       ├── services/    # API calls, data logic
│       └── types.ts     # Win-related types
├── hooks/               # Shared custom hooks
├── services/            # API services, data fetching
├── types/               # Global type definitions
├── utils/               # Helper functions
└── styles/              # Global styles, theme
```