import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <section className="hero bg-primary text-text p-12 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fitness Hub</h1>
        <p className="text-lg">Achieve your fitness goals with our expert trainers and state-of-the-art facilities.</p>
        <button className="bg-accent text-text px-6 py-3 rounded-md mt-4 hover:bg-secondary">
          Explore Classes
        </button>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Personal Training</h3>
            <p>Customized workout plans tailored to your individual needs and goals.</p>
          </div>
          <div className="bg-surface p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Group Fitness Classes</h3>
            <p>Engaging and motivating group classes for all fitness levels.</p>
          </div>
          <div className="bg-surface p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Nutrition Coaching</h3>
            <p>Expert guidance on healthy eating habits to support your fitness journey.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
