import React from 'react';
import { ArrowLeft } from 'lucide-react';
import DetailGallery from './DetailGallery';
import DetailOverview from './DetailOverview';
import DetailSpecs from './DetailSpecs';
import DetailSidebar from './DetailSidebar';

export default function DetailView({ listing, onBack, onEnquireSuccess }) {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-2 py-3 mb-4">
        <button
          onClick={onBack}
          className="text-primary hover:text-primary-dark font-semibold text-sm flex items-center gap-1.5 bg-transparent border-none cursor-pointer outline-none"
        >
          <ArrowLeft size={16} />
          Back to Results
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        <div className="flex flex-col gap-6">
          <DetailGallery listing={listing} />
          <DetailOverview listing={listing} />
          <DetailSpecs listing={listing} />
        </div>

        <DetailSidebar listing={listing} onEnquireSuccess={onEnquireSuccess} />
      </div>
    </div>
  );
}
