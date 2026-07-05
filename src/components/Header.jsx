import React from 'react';
import { Truck } from 'lucide-react';

export default function Header({ onLogoClick, currentView }) {
  return (
    <header className="bg-primary-dark text-white sticky top-0 z-50 shadow-md border-b-3 border-highlight-yellow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="flex items-center gap-2 text-2xl font-extrabold font-display tracking-tight cursor-pointer select-none hover:opacity-90 transition-opacity"
          onClick={onLogoClick}
        >
          <Truck size={30} strokeWidth={2.5} className="text-white" />
          <span>truck<span className="text-highlight-yellow">sales</span></span>
        </div>
        <nav className="flex items-center gap-2 md:gap-4">
          <span
            className={`font-semibold text-sm transition-all duration-200 px-3 py-2 rounded-md cursor-pointer ${currentView === 'listing'
                ? 'text-highlight-yellow bg-white/10'
                : 'text-white/80 hover:text-highlight-yellow hover:bg-white/5'
              }`}
            onClick={onLogoClick}
          >
            Browse Trucks
          </span>
        </nav>
      </div>
    </header>
  );
}
