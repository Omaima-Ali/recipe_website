import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-brand-500">CulinaryConnect</h3>
          <p className="text-gray-400 text-sm">Making home cooking accessible, enjoyable, and delicious for everyone.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Recipes</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Subscribe</h4>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="bg-gray-800 border-none text-white px-4 py-2 rounded-l-lg w-full focus:ring-1 focus:ring-brand-500" />
            <button className="bg-brand-600 px-4 py-2 rounded-r-lg hover:bg-brand-700">Go</button>
          </div>
        </div>
      </div>
    </footer>
  );
};