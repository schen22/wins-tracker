import React from 'react';
import ProgressForm from './features/wins/components/ProgressForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Wins Tracker</h1>
          <p className="text-gray-600 mt-2">Track your daily achievements and progress</p>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ProgressForm 
          onSubmit={(progress) => {
            console.log('New progress:', progress);
            // TODO: Add to state management
          }}
        />
      </main>
    </div>
  );
}

export default App;
