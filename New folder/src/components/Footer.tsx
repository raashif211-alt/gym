import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-textSecondary py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Fitness Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
