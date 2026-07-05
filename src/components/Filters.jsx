import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

export default function Filters({
  categoryFilter,
  setCategoryFilter,
  stateFilter,
  setStateFilter,
  priceFilter,
  setPriceFilter,
  onReset,
  allListings = []
}) {
  const categories = [
    { name: "All Categories", value: "All" },
    { name: "Heavy Duty", value: "Heavy Duty" },
    { name: "Medium Duty", value: "Medium Duty" },
    { name: "Light Duty", value: "Light Duty" },
    { name: "Specialist & EV", value: "Specialist / EV" }
  ];

  const states = [
    { label: "All States", value: "All" },
    { label: "Maharashtra (MH)", value: "MH" },
    { label: "Delhi NCR (DL)", value: "DL" },
    { label: "Tamil Nadu (TN)", value: "TN" },
    { label: "Gujarat (GJ)", value: "GJ" },
    { label: "Karnataka (KA)", value: "KA" },
    { label: "West Bengal (WB)", value: "WB" }
  ];

  const getCategoryCount = (categoryValue) => {
    if (categoryValue === "All") return allListings.length;
    return allListings.filter(item => item.category === categoryValue).length;
  };

  return (
    <aside className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 h-fit lg:sticky lg:top-24">
      <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
        <h3 className="text-lg font-bold flex items-center gap-2 text-primary-dark">
          <Filter size={18} className="text-primary" />
          Refine Search
        </h3>
        {(categoryFilter !== "All" || stateFilter !== "All" || priceFilter < 6000000) && (
          <button
            onClick={onReset}
            className="text-xs font-semibold text-primary hover:text-primary-dark hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none"
          >
            <RotateCcw size={12} />
            Reset All
          </button>
        )}
      </div>

      <div className="mb-5">
        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3 block">Category</span>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => {
            const isActive = categoryFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setCategoryFilter(cat.value)}
                className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl border text-left text-xs font-medium cursor-pointer transition-all duration-200 ${isActive
                    ? 'bg-primary text-white border-primary shadow-sm font-semibold'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-primary hover:bg-gray-50'
                  }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                  }`}>
                  {getCategoryCount(cat.value)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-5">
        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 block" htmlFor="state-select">
          State / Location
        </label>
        <select
          id="state-select"
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          className="w-full px-3 py-2.5 rounded-xl border border-gray-200 outline-none text-xs bg-gray-50 hover:border-gray-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer font-medium text-gray-700"
        >
          {states.map((st) => (
            <option key={st.value} value={st.value}>
              {st.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 block">
          Max Price: <span className="text-primary font-bold text-sm">₹{priceFilter.toLocaleString('en-IN')}</span>
        </span>
        <input
          type="range"
          min="500000"
          max="6000000"
          step="100000"
          value={priceFilter}
          onChange={(e) => setPriceFilter(parseInt(e.target.value))}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-2">
          <span>₹5 Lakhs</span>
          <span>₹60 Lakhs+</span>
        </div>
      </div>
    </aside>
  );
}
