import React from 'react';

const Hero = () => {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-6xl font-bold text-blue-300 mb-6">SyncHomie</h1>
      <p className="text-xl text-gray-300 mb-8">
        Keep track of all your media, and make friends while doing it
      </p>
      <button className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors">
        Register Now
      </button>
      <p className="text-gray-400 mt-6">
        Track "TV Shows, Animes, K-Dramas, & Movies"
      </p>
    </div>
  );
};

export default Hero;