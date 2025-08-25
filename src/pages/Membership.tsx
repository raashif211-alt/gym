import React from 'react';

const Membership: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Membership Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
          <p>Access to all gym facilities.</p>
          <p className="text-2xl font-bold mt-4">$29/month</p>
        </div>
        <div className="bg-surface p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
          <p>Access to all gym facilities and group fitness classes.</p>
          <p className="text-2xl font-bold mt-4">$49/month</p>
        </div>
      </div>
    </div>
  );
};

export default Membership;
