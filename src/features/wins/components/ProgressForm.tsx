import React, { useState } from "react";
import { CATEGORIES, Category, Emotion, ProgressType } from "../types";
import Button from "../../../components/common/Button";
import EmotionSelector from "./EmotionSelector";

interface ProgressFormProps {
  onSubmit?: (progress: {
    text: string;
    category: Category;
    type: ProgressType;
    emotions: Emotion[];
  }) => void;
}

function ProgressForm({ onSubmit }: ProgressFormProps) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState<Category | "">("");
  const [type, setType] = useState<ProgressType>("fact");
  const [emotions, setEmotions] = useState<Emotion[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim() || !category || emotions.length === 0) {
      return; // Basic validation
    }

    onSubmit?.({
      text: text.trim(),
      category: category as Category,
      type,
      emotions
    });

    // Reset form
    setText("");
    setCategory("");
    setEmotions([]);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          📝 Add Progress
        </h2>
        <p className="text-gray-600 text-sm">
          Track what happened and how you feel about it
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Progress text input */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label
            htmlFor="progress-text"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            💬 Describe your progress
          </label>
          <textarea
            id="progress-text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="e.g., Completed project milestone, or Feeling anxious about upcoming presentation"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors text-sm"
            rows={4}
            required
          />
        </div>

        {/* Type selection - Fact vs Feeling */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            🤔 Is this...
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label
              className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all min-h-[4rem] ${
                type === "fact"
                  ? "border-blue-500 bg-blue-100 text-blue-800"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="type"
                value="fact"
                checked={type === "fact"}
                onChange={e => setType(e.target.value as ProgressType)}
                className="mr-3 mt-1 text-blue-600 flex-shrink-0"
              />
              <span className="text-sm font-medium leading-relaxed">
                📋 What actually happened
              </span>
            </label>
            <label
              className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all min-h-[4rem] ${
                type === "feeling"
                  ? "border-blue-500 bg-blue-100 text-blue-800"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="type"
                value="feeling"
                checked={type === "feeling"}
                onChange={e => setType(e.target.value as ProgressType)}
                className="mr-3 mt-1 text-blue-600 flex-shrink-0"
              />
              <span className="text-sm font-medium leading-relaxed">
                💭 What you perceive
              </span>
            </label>
          </div>
        </div>

        {/* Category selection */}
        <div className="bg-green-50 p-4 rounded-lg">
          <label
            htmlFor="category"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            🏷️ Life Area
          </label>
          <select
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value as Category)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white transition-colors text-sm"
            required
          >
            <option value="">Choose your life area</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Emotion selection */}
        <div className="bg-purple-50 p-4 rounded-lg">
          <EmotionSelector selectedEmotions={emotions} onChange={setEmotions} />
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            className="w-full py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            ✨ Add Progress
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProgressForm;
