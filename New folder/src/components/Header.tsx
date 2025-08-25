import React from 'react';
import { Link } from 'react-router-dom';
import { GymIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-background text-text py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center text-xl font-bold">
          <GymIcon className="mr-2" size={32} />
          Fitness Hub
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/classes" className="hover:text-accent">Classes</Link></li>
            <li><Link to="/trainers" className="hover:text-accent">Trainers</Link></li>
            <li><Link to="/membership" className="hover:text-accent">Membership</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
