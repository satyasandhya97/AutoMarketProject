import React, { useState, useEffect } from 'react';

export default function DetailGallery({ listing }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [listing]);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 animate-fade-in">
      <div className="w-full h-[240px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden bg-gray-100 mb-3">
        <img
          src={listing.images[activeImageIndex] || listing.image}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
      </div>
      {listing.images && listing.images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {listing.images.map((imgUrl, index) => (
            <div
              key={index}
              className={`w-[90px] h-[60px] rounded-lg overflow-hidden cursor-pointer border-2 flex-shrink-0 transition-all duration-200 ${index === activeImageIndex ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-95'
                }`}
              onClick={() => setActiveImageIndex(index)}
            >
              <img src={imgUrl} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
