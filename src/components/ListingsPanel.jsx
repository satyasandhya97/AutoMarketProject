import React from 'react';
import ListingCard from './ListingCard';
import { AlertCircle, SlidersHorizontal } from 'lucide-react';

export default function ListingsPanel({
  listings,
  sortBy,
  setSortBy,
  onViewDetails,
  onEnquire,
  onResetFilters
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-2">
        <div className="text-sm font-medium text-gray-500">
          Found <span className="text-primary-dark font-bold text-base">{listings.length}</span> commercial vehicles
        </div>

        <div className="flex items-center gap-2 text-sm">
          <SlidersHorizontal size={14} className="text-gray-400" />
          <span className="text-gray-500 text-xs font-semibold">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-700 outline-none hover:border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer"
          >
            <option value="price-desc">Price: High to Low</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="odo-asc">Odometer: Low to High</option>
          </select>
        </div>
      </div>

      {listings.length > 0 ? (
        <div className="flex flex-col gap-4">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              onViewDetails={onViewDetails}
              onEnquire={onEnquire}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center shadow-md border border-gray-150 animate-fade-in">
          <AlertCircle size={48} className="text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-primary-dark mb-2">No listings match your criteria</h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
            Try adjusting your search filters, broadening your price range, or clearing the search text.
          </p>
          <button
            onClick={onResetFilters}
            className="bg-primary hover:bg-accent text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-150 active:scale-98 mx-auto flex items-center justify-center shadow-md"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </section>
  );
}
