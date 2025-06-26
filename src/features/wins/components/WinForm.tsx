import React from 'react';
import { CATEGORIES } from '../types';

// Start simple: just the HTML structure, no functionality yet
function WinForm() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a Win</h2>
      
      <form className="space-y-4">
        {/* Win description input */}
        <div>
          <label htmlFor="win-text" className="block text-sm font-medium text-gray-700 mb-1">
            What did you accomplish?
          </label>
          <input
            id="win-text"
            type="text"
            placeholder="e.g., Taught my puppy to sit!"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category selection */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Add Win
        </button>
      </form>
    </div>
  );
}

export default WinForm;