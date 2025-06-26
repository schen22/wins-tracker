# Wins Tracker Architecture

## Component Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        App.tsx                              │
│                    (Main Layout)                            │
└─────────────────────┬───────────────────────────────────────┘
                      │
    ┌─────────────────┼─────────────────┐
    │                 │                 │
    ▼                 ▼                 ▼
┌─────────┐    ┌─────────────┐    ┌─────────────┐
│ Header  │    │ WinForm     │    │ WinList     │
│ Layout  │    │ Component   │    │ Component   │
└─────────┘    └─────────────┘    └─────────────┘
                      │                 │
              ┌───────┴───────┐        │
              │               │        │
              ▼               ▼        ▼
        ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
        │ Button      │ │ CategoryFilter│ │ WinItem     │
        │ (Common)    │ │ Component   │ │ Component   │
        └─────────────┘ └─────────────┘ └─────────────┘
                              │
                              ▼
                        ┌─────────────┐
                        │ Summary     │
                        │ Component   │
                        └─────────────┘

Data Flow:
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ WinForm     │───▶│ App State   │───▶│ WinList     │
│ (Add Win)   │    │ (useState)  │    │ (Display)   │
└─────────────┘    └─────────────┘    └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │ Summary     │
                    │ (Insights)  │
                    └─────────────┘
```

## Architecture Overview

**Feature-Based Structure**: Components organized by functionality in `src/features/wins/`

**Component Hierarchy**:
- **App.tsx** - Main layout and state management
- **ProgressForm** - Input form for adding new progress items
- **ProgressList** - Display list of recent progress items
- **CategoryFilter** - Filter progress by life area
- **Summary** - Progress insights and patterns
- **Common Components** - Reusable UI (Button, Input, etc.)

## Data Flow

1. **ProgressForm** captures user input (facts/feelings with emotions)
2. **App state** manages progress array with useState
3. **ProgressList** renders progress items from state
4. **Summary** provides insights separating facts from feelings
5. **CategoryFilter** filters displayed progress items

## Progress Data Structure

```typescript
interface Progress {
  id: string;
  text: string;
  category: Category;
  type: 'fact' | 'feeling';
  emotion: Emotion;
  timestamp: Date;
  relatedTo?: string;        // Optional linking to related items
}
```

## Simple MVP Summary Design

**Goal**: Ground self-perception in reality through facts + values-based review

**Summary Component Shows**:
- **Recent Activity**: "8 progress items this week"
- **Facts vs Feelings**: "6 facts, 2 feelings logged"
- **Category Patterns**: Latest fact and feeling from each active category
- **Reality Check**: Compare emotions with actual events

**MVP Layout**:
```
┌─────────────────────────────────────┐
│ This Week's Progress                │
├─────────────────────────────────────┤
│ 📝 8 items logged (6 facts, 2 feelings) │
│                                     │
│ 💼 Career:                          │
│ • 📋 "Got interview invite" (anxious)│
│ • 💭 "Worried I'll mess up" (overwhelmed)│
│                                     │
│ 🐕 Puppy:                           │
│ • 📋 "Learned 'stay' command" (proud)│
├─────────────────────────────────────┤
│ Pattern: You're making real progress│
│ even when feeling anxious!          │
│                                     │
│ Reflection: How do your facts and   │
│ feelings compare? What story do     │
│ the facts tell?                     │
└─────────────────────────────────────┘
```

## Key Files

- `src/App.tsx` - Main application layout
- `src/features/wins/components/WinForm.tsx` - Win input form
- `src/features/wins/types.ts` - Win data structures
- `src/components/common/Button.tsx` - Reusable button component
- `src/types/index.ts` - Global type definitions

## Technology Stack

- **React 19.1.0** - UI library
- **TypeScript 4.9.5** - Type safety
- **Tailwind CSS** - Styling
- **Jest + RTL** - Testing