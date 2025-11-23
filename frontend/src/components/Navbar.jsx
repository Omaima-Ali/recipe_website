import React, { useState } from 'react';
import { Search, Menu, X, LogOut } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Browse Recipes', href: '#browse' },
    { name: 'Submit Recipe', href: '#submit' },
    { name: 'Categories', href: '#categories' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
             {/* Search Bar */}
             <div className="relative w-64">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm text-gray-700"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>

            {/* FIX: Removed .slice(0, 3) to show all menu items */}
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* User / Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right hidden lg:block">
                  <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">Foodie Level 1</p>
                </div>
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="h-10 w-10 rounded-full object-cover border-2 border-orange-100"
                />
                <button
                  onClick={onLogout}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button className="text-sm font-medium bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg">
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="p-2">
               <div className="relative w-full mb-4">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              >
                {link.name}
              </a>
            ))}
             {user && (
               <div className="mt-4 pt-4 border-t border-gray-100 flex items-center px-3">
                 <div className="flex-shrink-0">
                   <img className="h-10 w-10 rounded-full" src={user.avatarUrl} alt="" />
                 </div>
                 <div className="ml-3">
                   <div className="text-base font-medium leading-none text-gray-800">{user.name}</div>
                   <button onClick={onLogout} className="mt-1 text-sm font-medium text-red-500">Log out</button>
                 </div>
               </div>
             )}
          </div>
        </div>
      )}
    </header>
  );
};