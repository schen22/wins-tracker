# Commit Standards Specification

Create well-formatted commits with conventional commit messages and emojis.

## Commit Types
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

## Commit Process
1. Check for staged changes (`git status`)
2. If no staged changes, review and stage appropriate files
3. Run pre-commit checks (lint, build, generate docs)
4. Analyze changes to determine commit type
5. Generate descriptive commit message
6. Include scope if applicable: `type(scope): description`
7. Add body for complex changes explaining why
8. Execute commit

## Best Practices
- Keep commits atomic and focused
- Write in imperative mood ("Add feature" not "Added feature")
- Explain why, not just what
- Reference issues/PRs when relevant
- Split unrelated changes into separate commits

## Examples
```
✨ feat(wins): add WinForm component with validation

🐛 fix(wins): resolve category selection bug in WinForm

📝 docs: update component documentation for WinList

♻️ refactor(wins): extract validation logic to custom hook
```

## Pre-commit Checks
- ESLint passes
- TypeScript compiles
- Tests pass
- Build succeeds