import React from 'react';
import { MapPin } from 'lucide-react';

export default function DetailOverview({ listing }) {
  const formattedPrice = listing.price === 0 ? "POA" : `₹${listing.price.toLocaleString('en-IN')}`;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
        <div>
          <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
            {listing.condition} | {listing.category}
          </span>
          <h1 className="text-xl md:text-3xl font-extrabold text-primary-dark tracking-tight">{listing.title}</h1>
          <p className="text-gray-500 flex items-center gap-1 mt-2 text-sm font-medium">
            <MapPin size={15} className="text-gray-400" />
            {listing.location}
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-2xl md:text-3xl font-extrabold text-primary leading-none">{formattedPrice}</p>
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mt-1">{listing.priceType}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-55 p-4 rounded-xl mb-6 border border-gray-100">
        {listing.keySpecs.map((spec, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{spec.label}</span>
            <span className="text-sm font-bold text-gray-700 mt-0.5">{spec.value}</span>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-bold text-primary-dark mb-3">Seller's Comments</h3>
        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{listing.description}</p>
      </div>
    </div>
  );
}
