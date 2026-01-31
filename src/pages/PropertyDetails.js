import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/ShareButtons';
import Footer from '../components/Footer';
import { naijaStaysData } from '../data/naijaStaysData';
import {
  FiMapPin, FiUsers, FiHome, FiChevronLeft, FiChevronRight,
  FiX, FiMessageSquare, FiCheck, FiShield
} from 'react-icons/fi';

const PropertyDetails = () => {
  const { slug } = useParams();
  const property = naijaStaysData.properties.find(p => p.slug === slug);

  const [imageIndex, setImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(1); // Default to 1 night

  // Calculate nights whenever dates change
  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      // Prevent negative nights or 0 nights
      setNights(diffDays > 0 ? diffDays : 1);
    }
  }, [checkIn, checkOut]);

  const similarProperties = useMemo(() => {
    if (!property) return [];
    return naijaStaysData.properties
      .filter(p => p.city === property.city && p.id !== property.id)
      .slice(0, 3);
  }, [property]);

  if (!property) return <div className="py-20 text-center">Property not found</div>;

  const formatPrice = (n) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(n);

  // Constants for calculation
  const SERVICE_FEE = 75000;
  const total = (property.price * nights) + SERVICE_FEE;

  const whatsappMessage = encodeURIComponent(
    `Hello CB LUXE STAYS 👋\n\nI’m interested in booking:\n${property.name}\n📍 ${property.location}\n\n📅 Check-in: ${checkIn || 'Flexible'}\n📅 Check-out: ${checkOut || 'Flexible'}\n👥 Guests: ${guests}\n🌙 Duration: ${nights} night(s)\n\n💰 Estimated total: ${formatPrice(total)}\n\nPlease share availability & next steps.`
  );

  return (
    <div className="bg-white">
      <SEO
        title={`${property.name} | NAVA CREST`}
        description={property.description}
        image={property.images[0]}
      />

      {/* HERO GALLERY */}
      <section className="relative h-[75vh] min-h-[550px]">
        <img
          src={property.images[imageIndex]}
          alt={property.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <button
          onClick={() => setShowLightbox(true)}
          className="absolute bottom-6 right-6 bg-white/90 px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors"
        >
          View all {property.images.length} photos
        </button>

        <div className="absolute bottom-10 left-0 right-0">
          <div className="container mx-auto px-6 text-white">
            <h1 className="font-playfair text-4xl md:text-5xl mb-3">{property.name}</h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="flex items-center gap-2"><FiMapPin /> {property.location}</span>
              <span className="flex items-center gap-2"><FiHome /> {property.bedrooms} bedrooms</span>
              <span className="flex items-center gap-2"><FiUsers /> up to {property.maxGuests} guests</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          <div>
            <h2 className="text-3xl mb-6">About this stay</h2>
            <p className="text-zinc-600 leading-relaxed text-lg">{property.description}</p>
          </div>

          <div>
            <h3 className="text-2xl mb-6">Why guests love this place</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {property.highlights.map((h, i) => (
                <div key={i} className="flex gap-3">
                  <FiCheck className="text-green-600 mt-1 flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-zinc-600">
              {property.amenities.map((a, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FiCheck className="text-green-600 flex-shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOOKING CARD */}
        <aside className="relative">
          <div className="sticky top-24 h-fit bg-white border rounded-2xl shadow-xl p-8">
            <div className="text-3xl font-semibold mb-2">
              {formatPrice(property.price)}
              <span className="text-base text-zinc-500 font-normal"> / night</span>
            </div>

            <div className="space-y-4 mt-6">
              <div>
                <label className="text-xs font-bold uppercase text-zinc-500 ml-1">Check-in</label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-zinc-500 ml-1">Check-out</label>
                <input
                  type="date"
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  value={checkOut}
                  onChange={e => setCheckOut(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-zinc-500 ml-1">Guests</label>
                <select
                  value={guests}
                  onChange={e => setGuests(+e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                >
                  {[...Array(property.maxGuests)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} {i === 0 ? 'guest' : 'guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-zinc-600 border-t pt-4">
               <div className="flex justify-between">
                  <span>{formatPrice(property.price)} x {nights} nights</span>
                  <span>{formatPrice(property.price * nights)}</span>
               </div>
               <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>{formatPrice(SERVICE_FEE)}</span>
               </div>
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <a
              href={`https://wa.me/${naijaStaysData.contact.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              <FiMessageSquare className="mr-2" />
              Book via WhatsApp
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-zinc-500">
              <FiShield className="text-green-600" />
              Secure & verified listing
            </div>
          </div>
        </aside>
      </section>

      {/* LIGHTBOX COMPONENT */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4">
          <button onClick={() => setShowLightbox(false)} className="absolute top-6 right-6 text-white hover:text-zinc-300">
            <FiX size={32} />
          </button>

          <button
            onClick={() => setImageIndex(i => (i - 1 + property.images.length) % property.images.length)}
            className="absolute left-4 md:left-10 text-white hover:scale-110 transition-transform"
          >
            <FiChevronLeft size={48} />
          </button>

          <img
            src={property.images[imageIndex]}
            alt={`View ${imageIndex + 1}`}
            className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
          />

          <button
            onClick={() => setImageIndex(i => (i + 1) % property.images.length)}
            className="absolute right-4 md:right-10 text-white hover:scale-110 transition-transform"
          >
            <FiChevronRight size={48} />
          </button>
          
          <div className="absolute bottom-6 text-white font-medium">
            {imageIndex + 1} / {property.images.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PropertyDetails;