import React from "react";
import ProgressForm from "./features/wins/components/ProgressForm";
import { typography } from "./styles/typography";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className={typography.appTitle}>Progress Tracker</h1>
          <p className={`${typography.appSubtitle} mt-2`}>
            Enable honest reflection to enjoy the present
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <ProgressForm
          onSubmit={progress => {
            console.log("New progress:", progress);
            // TODO: Add to state management
          }}
        />
      </main>
    </div>
  );
}

export default App;
