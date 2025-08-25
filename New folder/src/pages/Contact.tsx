import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-textSecondary text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline bg-surface border-border" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-textSecondary text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline bg-surface border-border" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-textSecondary text-sm font-bold mb-2">Message</label>
          <textarea id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline bg-surface border-border"></textarea>
        </div>
        <button className="bg-accent text-text px-6 py-3 rounded-md hover:bg-secondary focus:outline-none focus:shadow-outline" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
