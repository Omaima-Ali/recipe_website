import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CategoryCard = ({ category }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer h-64 w-full">
      <img
        src={category.imageUrl}
        alt={category.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{category.recipeCount} Recipes</p>
        
        <div className="flex items-center text-brand-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          Explore
          <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );
};