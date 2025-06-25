# Project Structure Specification

Maintainable folder structure and organization guidelines.

## Directory Structure

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

## Organization Principles

### Feature-Based Organization
- Group all related code together
- Easy to find everything related to a feature
- Prevents scattered files across the codebase
- Makes it clear what features exist

### Separation of Concerns
- **`components/common/`**: Reusable UI components (Button, Input, Modal)
- **`features/wins/components/`**: Win-specific components (WinForm, WinList)
- **`hooks/`**: Shared custom hooks
- **`services/`**: API calls and data fetching logic
- **`types/`**: TypeScript type definitions
- **`utils/`**: Helper functions and utilities

## File Naming Conventions
- Components: PascalCase (e.g., `WinForm.tsx`)
- Hooks: camelCase starting with "use" (e.g., `useWins.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: camelCase with descriptive names (e.g., `winTypes.ts`)

## Import Organization
```typescript
// External libraries
import React from 'react';
import { useState } from 'react';

// Internal components
import Button from '@/components/common/Button';
import { Win } from '@/types';

// Relative imports
import './WinForm.styles.css';
```

## Benefits
- **Scalability**: Adding new features doesn't clutter existing code
- **Team Development**: Multiple people can work on different features
- **Testing**: Easy to test feature-specific logic in isolation
- **Refactoring**: Can refactor features without touching other code