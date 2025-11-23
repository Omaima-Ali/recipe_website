import React from 'react';
import { Star, Clock, Flame } from 'lucide-react';

export const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center text-xs font-bold text-gray-800 shadow-sm">
            <Star size={14} className="text-yellow-500 mr-1 fill-current" />
            {recipe.rating}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 hover:text-brand-600 cursor-pointer">
          {recipe.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">by {recipe.author}</p>
        
        <div className="mt-auto flex items-center justify-between text-xs text-gray-600 border-t border-gray-100 pt-4">
            <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                <Clock size={14} className="mr-1.5 text-gray-400" />
                {recipe.cookTimeMinutes} min
            </div>
            <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                <Flame size={14} className="mr-1.5 text-orange-500" />
                {recipe.calories} kcal
            </div>
        </div>
      </div>
    </div>
  );
};