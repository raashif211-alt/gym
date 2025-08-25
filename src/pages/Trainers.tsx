import React from 'react';

const Trainers: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Our Trainers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-surface p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">John Doe</h3>
          <p>Certified Personal Trainer with 10 years of experience.</p>
        </div>
        <div className="bg-surface p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
          <p>Yoga Instructor specializing in Hatha and Vinyasa yoga.</p>
        </div>
        <div className="bg-surface p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
          <p>Strength and Conditioning Coach with a focus on functional fitness.</p>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
