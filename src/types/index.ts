// Global type definitions
// Re-export feature-specific types for easier imports

export * from '../features/wins/types';

// Global app types
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AppConfig {
  theme: 'light' | 'dark';
  language: 'en' | 'es' | 'fr';
}