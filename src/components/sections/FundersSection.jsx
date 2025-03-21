import React from 'react';

const FundersSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <p className="text-center text-xl text-gray-700 mb-8">
          Over $1 billion in active audits from hotels like:
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Marriott</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Hilton</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Hyatt</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Four Seasons</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Ritz Carlton</div>
        </div>
      </div>
    </div>
  );
};

export default FundersSection;
