import React from 'react';
import { Link } from 'react-router-dom';

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold hover:underline">
            Trenings Logg
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/muscle-groups" className="text-white hover:underline">
                  Muskelgrupper
                </Link>
              </li>
              <li>
                <Link to="/exercises" className="text-white hover:underline">
                  Øvelser
                </Link>
              </li>
              <li>
                <Link to="/workout-form" className="text-white hover:underline">
                  Ny økt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-2 flex-grow">
        {children}
      </main>
      <footer className="bg-blue-800 text-white py-2">
        <div className="container mx-auto">
          <p className="text-center text-gray-300 text-sm">
            Trenings Logg &copy; 2023
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
