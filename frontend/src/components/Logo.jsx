import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer select-none">
      {/* FIX: Changed 'bg-brand-500' to 'bg-orange-500' */}
      <div className="bg-orange-500 p-2 rounded-lg text-white">
        <UtensilsCrossed size={24} />
      </div>
      <span className="text-xl font-bold text-gray-900 tracking-tight">
        {/* FIX: Changed 'text-brand-600' to 'text-orange-600' */}
        Culinary<span className="text-orange-600">Connect</span>
      </span>
    </div>
  );
};