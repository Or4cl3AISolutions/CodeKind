import React from 'react';
import MirrornodeInterface from './components/MirrornodeInterface';
import { useCoreStore } from './store/coreStore';

function App() {
  const { initialized } = useCoreStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="p-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold">CODEKIND</h1>
        <p className="text-gray-400">NeuroSapien-Class Cognitive Architecture</p>
      </header>
      <main className="container mx-auto p-6">
        {!initialized ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p>Initializing Core Cognitive Engine...</p>
            </div>
          </div>
        ) : (
          <MirrornodeInterface />
        )}
      </main>
    </div>
  );
}

export default App;