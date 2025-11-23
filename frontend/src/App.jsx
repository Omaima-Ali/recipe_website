import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { api } from './services/api';

const App = () => {
  // Global User State
  const [user, setUser] = useState(null);

  // Check auth on mount (simulated)
  useEffect(() => {
    api.getCurrentUser().then((userData) => {
      setUser(userData);
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    // In a real app, this would also call an API endpoint
    alert("Logged out successfully (Simulation)");
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
        {/* Navigation */}
        <Navbar user={user} onLogout={handleLogout} />

        {/* Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes here as the application grows */}
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;