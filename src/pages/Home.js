import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ShareButtons';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import { naijaStaysData } from '../data/naijaStaysData';
import {
  FiChevronRight,
  FiWifi,
  FiShield,
  FiZap,
  FiHome
} from 'react-icons/fi';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    title: 'Luxury Shortlet Living',
    subtitle: 'Curated premium stays across Nigeria'
  },
  {
    image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4',
    title: 'Designed for Comfort',
    subtitle: 'Refined apartments in prime city locations'
  },
  {
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    title: 'Stay Beautifully',
    subtitle: 'Where design meets everyday living'
  }
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const featured = useMemo(
    () => naijaStaysData.properties.filter(p => p.featured),
    []
  );

  useEffect(() => {
    const timer = setInterval(
      () => setActiveSlide(prev => (prev + 1) % heroSlides.length),
      7000
    );
    return () => clearInterval(timer);
  }, []);

  const whatsappMsg = encodeURIComponent(
    "Hello mex apartments 👋\n\nI’d like help booking a premium shortlet."
  );

  return (
    <div className="bg-white text-zinc-900">
      <SEO {...naijaStaysData.seo} />

      {/* ================= FULL HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
              i === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.4em] text-xs text-white/70 mb-6">
              mex apartments
            </p>

            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
              {heroSlides[activeSlide].title}
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-12">
              {heroSlides[activeSlide].subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/properties"
                className="px-10 py-5 rounded-full bg-white text-zinc-900 hover:bg-zinc-200 transition text-sm tracking-wide"
              >
                Explore Properties
              </Link>

              <a
                href={`https://wa.me/${naijaStaysData.contact.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 rounded-full border border-white/60 text-white hover:bg-white hover:text-zinc-900 transition text-sm tracking-wide"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>

        {/* Slide indicator */}
        <div className="absolute bottom-10 right-10 flex gap-3 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-10 h-[2px] transition ${
                i === activeSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-b">
        <div className="container mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-zinc-500">
          <span>✔ Fully serviced apartments</span>
          <span>✔ Prime locations</span>
          <span>✔ 24/7 support</span>
          <span>✔ Secure stays</span>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-20">
            <h2 className="text-4xl font-light mb-6">
              Featured Stays
            </h2>
            <p className="text-zinc-500 leading-relaxed">
              A curated selection of our most exceptional shortlets,
              chosen for comfort, design, and location.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {featured.map(property => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS ================= */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">
            Discover by City
          </h2>

          <div className="flex flex-wrap gap-4">
            {naijaStaysData.cities.map(city => (
              <Link
                key={city.id}
                to={`/properties?city=${city.id}`}
                className="px-6 py-3 rounded-full border border-zinc-200 hover:border-zinc-900 transition text-sm"
              >
                {city.name} · {city.count}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-light mb-10">
              Designed for Living
            </h2>

            <div className="space-y-8 text-zinc-600">
              <div className="flex gap-4"><FiWifi /> High-speed internet</div>
              <div className="flex gap-4"><FiShield /> 24/7 security</div>
              <div className="flex gap-4"><FiZap /> Reliable power supply</div>
              <div className="flex gap-4"><FiHome /> Fully equipped kitchens</div>
            </div>
          </div>

          <div className="text-zinc-500 leading-relaxed">
            <p className="mb-6">
              Whether for business, leisure, or extended stays,
              our spaces are thoughtfully designed to feel calm,
              private, and refined.
            </p>
            <p>
              Every detail from layout to amenities
              is selected to enhance your stay.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-zinc-900 text-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-4xl font-light mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-white/70 mb-10">
            Speak with our team and we’ll match you
            with the perfect shortlet.
          </p>

          <a
            href={`https://wa.me/${naijaStaysData.contact.whatsapp}?text=${whatsappMsg}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-zinc-900 hover:bg-zinc-200 transition"
          >
            Start on WhatsApp <FiChevronRight />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Home;
