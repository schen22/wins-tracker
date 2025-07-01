// Core data types for the progress tracker app

export const CATEGORIES = [
  "puppy",
  "career",
  "friends",
  "family",
  "volunteering",
  "health"
] as const;
export type Category = typeof CATEGORIES[number];

export type ProgressType = "fact" | "feeling";

// Feelings wheel emotions organized by core emotion categories
export const EMOTION_WHEEL = {
  happy: [
    "joyful",
    "excited",
    "content",
    "peaceful",
    "grateful",
    "proud",
    "hopeful",
    "satisfied"
  ],
  sad: [
    "disappointed",
    "lonely",
    "hurt",
    "grieving",
    "sorry",
    "melancholy",
    "despair",
    "heartbroken"
  ],
  angry: [
    "frustrated",
    "irritated",
    "resentful",
    "furious",
    "annoyed",
    "outraged",
    "bitter",
    "livid"
  ],
  fearful: [
    "anxious",
    "worried",
    "nervous",
    "scared",
    "panicked",
    "terrified",
    "overwhelmed",
    "uncertain"
  ],
  disgusted: [
    "repulsed",
    "revolted",
    "contemptuous",
    "judgmental",
    "disapproving",
    "loathing",
    "aversion",
    "disdain"
  ],
  surprised: [
    "amazed",
    "astonished",
    "bewildered",
    "confused",
    "perplexed",
    "shocked",
    "startled",
    "stunned"
  ],
  neutral: [
    "calm",
    "balanced",
    "indifferent",
    "detached",
    "steady",
    "composed",
    "centered",
    "unaffected"
  ]
} as const;

// Core emotions that can be selected directly
export const CORE_EMOTIONS = [
  "happy",
  "sad",
  "angry",
  "fearful",
  "disgusted",
  "surprised",
  "neutral"
] as const;

// Flatten all emotions into a single array with proper typing (including core emotions)
export const ALL_EMOTIONS = [
  // Core emotions (can be selected directly)
  "happy",
  "sad",
  "angry",
  "fearful",
  "disgusted",
  "surprised",
  "neutral",
  // Happy emotions
  "joyful",
  "excited",
  "content",
  "peaceful",
  "grateful",
  "proud",
  "hopeful",
  "satisfied",
  // Sad emotions
  "disappointed",
  "lonely",
  "hurt",
  "grieving",
  "sorry",
  "melancholy",
  "despair",
  "heartbroken",
  // Angry emotions
  "frustrated",
  "irritated",
  "resentful",
  "furious",
  "annoyed",
  "outraged",
  "bitter",
  "livid",
  // Fearful emotions
  "anxious",
  "worried",
  "nervous",
  "scared",
  "panicked",
  "terrified",
  "overwhelmed",
  "uncertain",
  // Disgusted emotions
  "repulsed",
  "revolted",
  "contemptuous",
  "judgmental",
  "disapproving",
  "loathing",
  "aversion",
  "disdain",
  // Surprised emotions
  "amazed",
  "astonished",
  "bewildered",
  "confused",
  "perplexed",
  "shocked",
  "startled",
  "stunned",
  // Neutral emotions
  "calm",
  "balanced",
  "indifferent",
  "detached",
  "steady",
  "composed",
  "centered",
  "unaffected"
] as const;

export type Emotion = typeof ALL_EMOTIONS[number];
export type CoreEmotion = keyof typeof EMOTION_WHEEL;

export interface Progress {
  id: string;
  text: string;
  category: Category;
  type: ProgressType;
  emotions: Emotion[]; // Changed to array for multiple emotions
  timestamp: Date;
  relatedTo?: string; // Optional ID of related progress item
}
