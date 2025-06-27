// Core data types for the progress tracker app

export const CATEGORIES = ['puppy', 'career', 'friends', 'family', 'volunteering'] as const;
export type Category = typeof CATEGORIES[number];

export type ProgressType = 'fact' | 'feeling';

export const EMOTIONS = [
  'excited', 'proud', 'grateful', 'calm', 'hopeful',
  'anxious', 'frustrated', 'disappointed', 'overwhelmed', 'uncertain',
  'neutral'
] as const;
export type Emotion = typeof EMOTIONS[number];

export interface Progress {
  id: string;
  text: string;
  category: Category;
  type: ProgressType;
  emotion: Emotion;
  timestamp: Date;
  relatedTo?: string;        // Optional ID of related progress item
}