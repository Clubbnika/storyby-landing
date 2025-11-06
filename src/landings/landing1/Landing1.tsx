import React from 'react';

const Landing1: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to StorybyWriter
        </h1>
        <p className="text-gray-600 mb-6">
          Create, share, and earn from your stories!
        </p>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing1;
