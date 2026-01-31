import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ShareButtons';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import { naijaStaysData } from '../data/naijaStaysData';
import {
  FiSearch,
  FiFilter,
  FiX,
  FiChevronDown,
  FiMessageSquare
} from 'react-icons/fi';

const Properties = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500000 });
  const [searchQuery, setSearchQuery] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const cities = naijaStaysData.cities;
  const allProperties = naijaStaysData.properties;

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low → High' },
    { id: 'price-high', name: 'Price: High → Low' },
    { id: 'bedrooms', name: 'Most Bedrooms' },
  ];

  const filteredProperties = useMemo(() => {
    let filtered = allProperties.filter(p => {
      if (selectedCity !== 'all' && p.city !== selectedCity) return false;
      if (selectedType !== 'all' && p.category !== selectedType) return false;
      if (p.price < priceRange.min || p.price > priceRange.max) return false;
      if (bedrooms > 0 && p.bedrooms < bedrooms) return false;
      if (
        searchQuery &&
        !`${p.name} ${p.location} ${p.city}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      ) return false;
      return true;
    });

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'bedrooms':
        filtered.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCity, selectedType, priceRange, bedrooms, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCity('all');
    setSelectedType('all');
    setPriceRange({ min: 0, max: 500000 });
    setBedrooms(0);
    setSearchQuery('');
  };

  return (
    <div className="bg-zinc-50 min-h-screen">
      <SEO
        title="Luxury Shortlets in Nigeria | Naija Stays"
        description="Discover premium apartments, villas and penthouses across Nigeria."
        image={allProperties[0]?.images[0]}
      />

      {/* HERO */}
      <section className="relative h-[75vh] min-h-[600px]">
        <img
          src={allProperties[0]?.images[0]}
          alt="Luxury stays in Nigeria"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-white font-playfair text-5xl md:text-6xl mb-6">
              Find your next<br />luxury stay
            </h1>
            <p className="text-white/80 text-lg mb-10">
              Hand-picked premium shortlets across Nigeria’s finest locations
            </p>

            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by city, property name or location"
                className="w-full rounded-full pl-14 pr-6 py-5 text-lg shadow-xl focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="container mx-auto px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-5 py-2 rounded-full border text-sm flex items-center gap-2 hover:bg-zinc-100"
            >
              <FiFilter /> Filters
            </button>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-full border text-sm"
            >
              {sortOptions.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.name}</option>
              ))}
            </select>
          </div>

          {(selectedCity !== 'all' || searchQuery || bedrooms > 0) && (
            <button
              onClick={clearFilters}
              className="text-sm text-zinc-600 hover:text-black flex items-center gap-2"
            >
              <FiX /> Clear filters
            </button>
          )}
        </div>

        {isFilterOpen && (
          <div className="container mx-auto px-6 pb-6 grid md:grid-cols-3 gap-6">
            {/* City */}
            <div>
              <label className="text-sm text-zinc-600">City</label>
              <select
                value={selectedCity}
                onChange={e => setSelectedCity(e.target.value)}
                className="w-full mt-2 p-3 rounded-lg border"
              >
                <option value="all">All cities</option>
                {cities.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="text-sm text-zinc-600">Bedrooms</label>
              <input
                type="number"
                min="0"
                value={bedrooms}
                onChange={e => setBedrooms(+e.target.value)}
                className="w-full mt-2 p-3 rounded-lg border"
                placeholder="Any"
              />
            </div>

            {/* Price */}
            <div>
              <label className="text-sm text-zinc-600">Max price (₦)</label>
              <input
                type="number"
                value={priceRange.max}
                onChange={e =>
                  setPriceRange(p => ({ ...p, max: +e.target.value }))
                }
                className="w-full mt-2 p-3 rounded-lg border"
              />
            </div>
          </div>
        )}
      </section>

      {/* RESULTS */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-light">
            {filteredProperties.length} stays available
          </h2>
          <p className="text-zinc-500 mt-2">
            Curated premium properties for your comfort
          </p>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProperties.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <h3 className="text-2xl mb-4">No properties found</h3>
            <p className="text-zinc-500 mb-8">
              Try adjusting your search or let us help you personally.
            </p>
            <a
              href={`https://wa.me/${naijaStaysData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-600 text-white hover:bg-green-700"
            >
              <FiMessageSquare /> Chat with us
            </a>
          </div>
        )}
      </section>

      
      <Footer />
    </div>
  );
};

export default Properties;
