import React from 'react';
import { MapPin, Eye, MessageSquareCode } from 'lucide-react';

export default function ListingCard({ listing, onViewDetails, onEnquire }) {
  const {
    title,
    subTitle,
    price,
    priceType,
    location,
    image,
    images = [],
    condition,
    badge,
    badgeColor,
    keySpecs = []
  } = listing;

  const formattedPrice = price === 0 ? "POA" : `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-primary/25 flex flex-col md:flex-row overflow-hidden transition-all duration-300 animate-fade-in group">
      <div
        className="w-full md:w-[280px] md:min-w-[280px] h-[200px] md:h-auto min-h-[180px] relative bg-gray-100 overflow-hidden cursor-pointer shrink-0"
        onClick={() => onViewDetails(listing.id)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80';
          }}
        />
        {images.length > 1 && (
          <span className="absolute top-3 left-3 bg-black/75 text-white px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-xs select-none">
            1 of {images.length} Photos
          </span>
        )}
        <span className="absolute bottom-3 left-3 bg-primary-dark text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase">
          {condition}
        </span>
      </div>

      <div className="p-5 flex flex-col justify-between flex-1 gap-4">
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
            <div className="flex-1">
              <h2
                className="text-lg md:text-xl font-bold text-primary-dark cursor-pointer leading-snug hover:text-primary transition-colors"
                onClick={() => onViewDetails(listing.id)}
              >
                {title}
              </h2>
              <p className="text-xs text-gray-500 font-medium mt-0.5">{subTitle}</p>
            </div>
            <div className="sm:text-right shrink-0">
              <p className="text-xl md:text-2xl font-extrabold text-primary">{formattedPrice}</p>
              <p className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase">{priceType}</p>
            </div>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-55 p-3 rounded-xl cursor-pointer border border-gray-100 mt-4"
            onClick={() => onViewDetails(listing.id)}
          >
            {keySpecs.map((spec, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{spec.label}</span>
                <span className="text-xs font-semibold text-gray-700 truncate" title={spec.value}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 pt-3.5 border-t border-gray-100">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
              <MapPin size={14} className="text-gray-400" />
              {location}
            </span>
            {badge && (
              <span
                className="text-[9px] font-bold px-2.5 py-0.5 rounded-full text-white uppercase tracking-wider"
                style={{ backgroundColor: badgeColor || 'var(--color-primary-dark)' }}
              >
                {badge}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer bg-transparent text-primary hover:text-primary-dark border border-gray-200 hover:border-primary hover:bg-primary/5 active:scale-98"
              onClick={() => onViewDetails(listing.id)}
            >
              <Eye size={14} />
              View Details
            </button>
            <button
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer bg-primary hover:bg-accent text-white border border-primary hover:border-accent shadow-sm active:scale-98"
              onClick={() => onEnquire(listing)}
            >
              <MessageSquareCode size={14} />
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
