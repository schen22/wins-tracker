import React, { useState } from "react";
import { EMOTION_WHEEL, Emotion, CoreEmotion } from "../types";
import { typography } from "../../../styles/typography";

interface EmotionSelectorProps {
  selectedEmotions: Emotion[];
  onChange: (emotions: Emotion[]) => void;
  className?: string;
}

const CORE_EMOTION_COLORS = {
  happy: "bg-yellow-100 border-yellow-300 text-yellow-800",
  sad: "bg-blue-100 border-blue-300 text-blue-800",
  angry: "bg-red-100 border-red-300 text-red-800",
  fearful: "bg-purple-100 border-purple-300 text-purple-800",
  disgusted: "bg-green-100 border-green-300 text-green-800",
  surprised: "bg-orange-100 border-orange-300 text-orange-800",
  neutral: "bg-gray-100 border-gray-300 text-gray-800"
};

const CORE_EMOTION_EMOJIS = {
  happy: "😊",
  sad: "😢",
  angry: "😠",
  fearful: "😰",
  disgusted: "🤢",
  surprised: "😲",
  neutral: "😐"
};

function EmotionSelector({
  selectedEmotions,
  onChange,
  className = ""
}: EmotionSelectorProps) {
  const [expandedCategory, setExpandedCategory] = useState<CoreEmotion | null>(
    null
  );

  const toggleEmotion = (emotion: Emotion) => {
    if (selectedEmotions.includes(emotion)) {
      onChange(selectedEmotions.filter(e => e !== emotion));
    } else {
      onChange([...selectedEmotions, emotion]);
    }
  };

  const toggleCoreEmotion = (category: CoreEmotion) => {
    const coreEmotion = category as Emotion; // Core emotions are also valid Emotion types
    if (selectedEmotions.includes(coreEmotion)) {
      onChange(selectedEmotions.filter(e => e !== coreEmotion));
    } else {
      onChange([...selectedEmotions, coreEmotion]);
    }
  };

  const toggleCategory = (category: CoreEmotion) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className={`${typography.formHeader} mb-3`}>
        💛 How are you feeling? (Select all that apply)
      </div>

      {/* Selected emotions display */}
      {selectedEmotions.length > 0 && (
        <div className="bg-white p-3 rounded-lg border border-gray-200">
          <div className={`${typography.helperText} mb-2`}>
            Selected emotions:
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedEmotions.map(emotion => (
              <span
                key={emotion}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 border border-blue-200"
              >
                {emotion}
                <button
                  onClick={() => toggleEmotion(emotion)}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Core emotion categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(EMOTION_WHEEL).map(([coreEmotion, emotionTuple]) => {
          const category = coreEmotion as CoreEmotion;
          const emotions = [...emotionTuple] as Emotion[]; // Convert readonly tuple to regular array
          const isExpanded = expandedCategory === category;
          const isCoreSelected = selectedEmotions.includes(category as Emotion);
          const hasSelectedSubEmotions = emotions.some(e =>
            selectedEmotions.includes(e)
          );
          const hasAnySelected = isCoreSelected || hasSelectedSubEmotions;

          return (
            <div key={category} className="space-y-2">
              {/* Core emotion container */}
              <div
                className={`p-4 rounded-lg border-2 transition-all min-h-[3.5rem] ${
                  hasAnySelected
                    ? `${CORE_EMOTION_COLORS[category]} border-opacity-100`
                    : `${CORE_EMOTION_COLORS[category]} border-opacity-50 hover:border-opacity-75`
                } ${isExpanded ? "ring-2 ring-blue-300" : ""}`}
              >
                {/* Core emotion selection */}
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <input
                      type="checkbox"
                      checked={isCoreSelected}
                      onChange={() => toggleCoreEmotion(category)}
                      className="text-blue-600 flex-shrink-0"
                    />
                    <span className="flex items-center gap-2 min-w-0">
                      <span className="text-lg flex-shrink-0 leading-none">
                        {CORE_EMOTION_EMOJIS[category]}
                      </span>
                      <span className={`capitalize ${typography.formContent} break-words`}>
                        {category}
                      </span>
                    </span>
                  </div>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="text-sm px-2 py-1 rounded hover:bg-black hover:bg-opacity-10 transition-colors flex-shrink-0 ml-2"
                  >
                    {isExpanded ? "Less −" : "More +"}
                  </button>
                </label>

                {/* Show selected sub-emotions count */}
                {hasSelectedSubEmotions && (
                  <div className={`${typography.helperText} mt-2 ml-8 opacity-75`}>
                    {emotions.filter(e => selectedEmotions.includes(e)).length}{" "}
                    secondary emotions selected
                  </div>
                )}
              </div>

              {/* Specific emotions */}
              {isExpanded && (
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-1 gap-2">
                    {emotions.map(emotion => (
                      <label
                        key={emotion}
                        className={`flex items-center p-3 rounded cursor-pointer transition-colors min-h-[2.5rem] ${
                          selectedEmotions.includes(emotion)
                            ? "bg-blue-100 text-blue-800"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedEmotions.includes(emotion)}
                          onChange={() => toggleEmotion(emotion)}
                          className="mr-3 text-blue-600 flex-shrink-0"
                        />
                        <span className={`${typography.formContent} capitalize break-words`}>
                          {emotion}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmotionSelector;
