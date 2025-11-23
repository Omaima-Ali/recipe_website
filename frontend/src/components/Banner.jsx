import React from 'react';
import { ArrowRight, ChefHat } from 'lucide-react';

export const Banner = () => {
  return (
    <div className="relative bg-gray-900 h-[500px] sm:h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Delicious food spread"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full sm:w-2/3 lg:w-1/2 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Master the Art of <br/>
            <span className="text-brand-500">Home Cooking</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-lg leading-relaxed">
            Discover thousands of easy-to-follow recipes, share your own culinary creations, and join a community of passionate food lovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-brand-600 hover:bg-brand-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Browse Recipes
              <ArrowRight className="ml-2 -mr-1" size={20} />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-semibold rounded-full text-white hover:bg-white hover:text-gray-900 transition-all">
              <ChefHat className="mr-2" size={20} />
              Submit Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};