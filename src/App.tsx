import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center mb-4">Welcome to StorybyWriter</h1>
        <p className="text-gray-600 text-center">Create, share, and earn from your stories!</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
