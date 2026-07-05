import React, { useState, useMemo } from 'react';
import { listingsData } from './data/listingsData';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import ListingsPanel from './components/ListingsPanel';
import DetailView from './components/DetailView';
import EnquiryModal from './components/EnquiryModal';

function App() {
  const [selectedListingId, setSelectedListingId] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [stateFilter, setStateFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState(6000000);
  const [sortBy, setSortBy] = useState('price-desc');

  const [enquiryListing, setEnquiryListing] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (id) => {
    setSelectedListingId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToListing = () => {
    setSelectedListingId(null);
  };

  const handleOpenEnquiryModal = (listing) => {
    setEnquiryListing(listing);
    setIsModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('All');
    setStateFilter('All');
    setPriceFilter(6000000);
    setSortBy('price-desc');
  };

  const filteredAndSortedListings = useMemo(() => {
    return listingsData
      .filter((listing) => {
        const matchesSearch =
          searchTerm === '' ||
          listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          listing.subTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          listing.category.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = categoryFilter === 'All' || listing.category === categoryFilter;

        const matchesState = stateFilter === 'All' || listing.state === stateFilter;

        const matchesPrice = listing.price <= priceFilter;

        return matchesSearch && matchesCategory && matchesState && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          return a.price - b.price;
        } else if (sortBy === 'price-desc') {
          return b.price - a.price;
        } else if (sortBy === 'odo-asc') {
          return a.odometer - b.odometer;
        }
        return 0;
      });
  }, [searchTerm, categoryFilter, stateFilter, priceFilter, sortBy]);

  const currentListing = useMemo(() => {
    return listingsData.find((lst) => lst.id === selectedListingId);
  }, [selectedListingId]);

  return (
    <div className="flex flex-col min-h-screen bg-bg-body">
      <Header
        onLogoClick={handleBackToListing}
        currentView={selectedListingId ? 'detail' : 'listing'}
      />

      {selectedListingId && currentListing ? (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
          <DetailView
            listing={currentListing}
            onBack={handleBackToListing}
            onEnquireSuccess={(title) => {
              console.log(`Sidebar quick inquiry sent for: ${title}`);
            }}
          />
        </main>
      ) : (
        <>
          <Hero
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 mt-[-24px] relative z-10">
              <Filters
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                stateFilter={stateFilter}
                setStateFilter={setStateFilter}
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}
                onReset={handleResetFilters}
                allListings={listingsData}
              />

              <ListingsPanel
                listings={filteredAndSortedListings}
                sortBy={sortBy}
                setSortBy={setSortBy}
                onViewDetails={handleViewDetails}
                onEnquire={handleOpenEnquiryModal}
                onResetFilters={handleResetFilters}
              />
            </div>
          </main>
        </>
      )}

      <EnquiryModal
        listing={enquiryListing}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <footer className="bg-[#111827] text-white/60 py-8 px-4 border-t-4 border-primary text-center text-xs mt-auto">
        <div className="text-white font-bold mb-2 text-lg">
          <span>truck<span className="text-highlight-yellow">sales</span></span>
        </div>
        <p className="mb-3">
          Simplified React Vehicle Marketplace Demo. Inspired by trucksales.com.au.
        </p>
        <p className="text-[10px] text-white/30">
          Satyasandhya Biswal © {new Date().getFullYear()} Auto Market Project.
        </p>
      </footer>
    </div>
  );
}

export default App;
