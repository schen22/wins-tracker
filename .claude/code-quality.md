# Code Quality Standards Specification

Fix all code formatting and quality issues in the entire codebase.

## JavaScript/TypeScript Projects

### Steps
1. **Format with Prettier**: `npx prettier --write .`
2. **Fix ESLint issues**: `npx eslint . --fix`
3. **Check TypeScript**: `npx tsc --noEmit`

## Quality Process
1. Run automated formatters first
2. Fix remaining linting issues manually
3. Resolve type checking errors
4. Verify all tools pass with no errors
5. Review changes before committing

## Common Issues to Fix
- Import order conflicts between tools
- Line length violations
- Unused imports/variables
- Type annotation requirements
- Missing return types
- Inconsistent quotes/semicolons

## Quality Commands
- `npm run lint` - ESLint with TypeScript, React hooks, accessibility rules
- `npm run type-check` - TypeScript compiler check without emit
- `npm run format` - Format code with Prettier
- `npm run quality-gate` - Full quality check

## ESLint Rules (Recommended)
```javascript
module.exports = {
  extends: [
    'react-app',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  rules: {
    // Component architecture
    'react/jsx-no-bind': 'error',
    'react-hooks/exhaustive-deps': 'error',
    
    // Dependency management
    'import/no-circular': 'error',
    'import/no-unused-modules': 'error',
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always'
    }],
    
    // Performance
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    
    // Architecture patterns
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/prefer-readonly': 'error'
  }
};
```