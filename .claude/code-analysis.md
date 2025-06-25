# Code Analysis Specification

Perform comprehensive code analysis with multiple inspection options.

## Analysis Menu

### 1. Knowledge Graph Generation
- Map relationships between components
- Visualize dependencies with `npm run analyze:graph`
- Identify architectural patterns

### 2. Code Quality Evaluation
- Complexity metrics
- Maintainability index
- Technical debt assessment
- Code duplication detection

### 3. Performance Analysis
- Identify bottlenecks
- Memory usage patterns
- Algorithm complexity
- Bundle analysis with `npm run analyze:bundle`

### 4. Security Review
- Vulnerability scanning
- Input validation checks
- Authentication/authorization review
- Sensitive data handling

### 5. Architecture Review
- Design pattern adherence
- SOLID principles compliance
- Coupling and cohesion analysis
- Module boundaries

### 6. Test Coverage Analysis
- Coverage percentages with `npm run test:coverage`
- Untested code paths
- Test quality assessment
- Missing edge cases

## Analysis Process
1. Select analysis type based on need
2. Run appropriate tools and inspections
3. Generate comprehensive report
4. Provide actionable recommendations
5. Prioritize improvements by impact

## Output Format
- Executive summary
- Detailed findings
- Risk assessment
- Improvement roadmap
- Code examples where relevant

## Available Commands
- `npm run analyze:deps` - Detect circular dependencies with madge
- `npm run analyze:graph` - Generate dependency visualization
- `npm run analyze:bundle` - Bundle size analysis
- `npm run quality-gate` - Full quality check (tests + analysis)