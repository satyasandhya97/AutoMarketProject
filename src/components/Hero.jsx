import React from 'react';
import { Search } from 'lucide-react';

export default function Hero({ searchTerm, setSearchTerm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gradient-to-br from-primary-dark to-[#033a85] text-white py-12 px-4 md:py-16 text-center relative overflow-hidden">
      <div className="bg-[radial-gradient(circle_at_70%_30%,rgba(30,144,255,0.15),transparent_70%)] pointer-events-none absolute inset-0"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
          Find Your Next <span className="text-highlight-yellow">Commercial Vehicle</span>
        </h1>
        <p className="text-base md:text-lg text-white/80 mb-8 font-light max-w-2xl mx-auto">
          Search India's premier marketplace for heavy-duty, medium, and light commercial vehicles.
        </p>
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/15 flex flex-col sm:flex-row max-w-2xl mx-auto items-stretch gap-2">
          <div className="flex items-center flex-1 min-w-0 bg-white rounded-xl px-4 py-3 gap-3 shadow-inner">
            <Search className="text-gray-400 shrink-0" size={20} />
            <input
              type="text"
              placeholder="Search by make, model, or keywords (e.g. Tata, Ashok Leyland, Mahindra, Tipper)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-none outline-none text-base w-full min-w-0 text-gray-800 placeholder-gray-400 bg-transparent focus:ring-0"
            />
          </div>
          <button type="submit" className="bg-primary hover:bg-accent text-white font-semibold px-6 py-3 rounded-xl transition-all duration-150 active:scale-98 flex items-center justify-center gap-2 shrink-0 shadow-md">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
