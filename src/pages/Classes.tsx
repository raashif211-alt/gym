import React from 'react';

const Classes: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Our Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-surface p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Yoga</h3>
          <p>Relax and rejuvenate your body and mind with our yoga classes.</p>
        </div>
        <div className="bg-surface p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Zumba</h3>
          <p>Get your heart pumping with our fun and energetic Zumba classes.</p>
        </div>
        <div className="bg-surface p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Strength Training</h3>
          <p>Build strength and endurance with our strength training classes.</p>
        </div>
      </div>
    </div>
  );
};

export default Classes;
