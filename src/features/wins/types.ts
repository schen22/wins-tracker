// Core data types for the progress tracker app

export type Category = 'puppy' | 'career' | 'friends' | 'family' | 'volunteering';

export type ProgressType = 'fact' | 'feeling';

export type Emotion = 
  | 'excited' | 'proud' | 'grateful' | 'calm' | 'hopeful'
  | 'anxious' | 'frustrated' | 'disappointed' | 'overwhelmed' | 'uncertain'
  | 'neutral';

export interface Progress {
  id: string;
  text: string;
  category: Category;
  type: ProgressType;
  emotion: Emotion;
  timestamp: Date;
  relatedTo?: string;        // Optional ID of related progress item
}

export const CATEGORIES: Category[] = ['puppy', 'career', 'friends', 'family', 'volunteering'];

export const EMOTIONS: Emotion[] = [
  'excited', 'proud', 'grateful', 'calm', 'hopeful',
  'anxious', 'frustrated', 'disappointed', 'overwhelmed', 'uncertain',
  'neutral'
];