import React, { useState, useEffect, useMemo } from 'react';
import { SEO } from '../components/ShareButtons';
import { naijaStaysData } from '../data/naijaStaysData';
import { 
  FiX, FiPlay, FiMaximize2, FiCamera, 
  FiChevronRight, FiArrowRight, FiInfo 
} from 'react-icons/fi';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const { gallery } = naijaStaysData;

  // Memoized data processing for performance
  const allItems = useMemo(() => [
    ...gallery.images.map(img => ({ ...img, type: 'image' })),
    ...gallery.videos.map(vid => ({ ...vid, type: 'video' }))
  ], [gallery]);

  const filteredItems = useMemo(() => 
    activeCategory === 'all' ? allItems : allItems.filter(item => item.category === activeCategory)
  , [activeCategory, allItems]);

  const featuredItem = allItems.find(item => item.featured) || allItems[0];

  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : 'unset';
  }, [selectedItem]);

  return (
    <div className="bg-[#FCFBFA] min-h-screen">
      <SEO 
        title="Visual Journal | Atlantic Shores"
        description="A curated collection of coastal moments and architectural excellence."
        image={featuredItem.src}
      />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-gray-100 pb-12">
            <div className="max-w-2xl">
              <span className="text-resort-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
                The Visual Journal
              </span>
              <h1 className="font-playfair text-6xl md:text-8xl text-resort-blue mb-8 leading-[0.9]">
                Capturing <br/><span className="italic pl-12 md:pl-24">the Essence</span>
              </h1>
            </div>
            
            {/* Minimalist Filter Navigation */}
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              {gallery.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all relative py-2 ${
                    activeCategory === cat.id ? 'text-resort-blue' : 'text-gray-300 hover:text-resort-gold'
                  }`}
                >
                  {cat.name}
                  {activeCategory === cat.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-resort-gold animate-in fade-in slide-in-from-left-2" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* --- MASONRY GRID --- */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="relative group cursor-none overflow-hidden break-inside-avoid animate-fadeIn"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Media Container */}
                <div className="relative">
                  <img
                    src={item.type === 'video' ? item.thumbnail : item.src}
                    alt={item.title}
                    className="w-full h-auto grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-resort-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-resort-gold text-[9px] uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.category}
                    </p>
                    <h3 className="text-white font-playfair text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {item.title}
                    </h3>
                  </div>

                  {/* Play Icon for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white">
                      <FiPlay size={20} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CURATOR'S NOTE --- */}
      <section className="py-32 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-resort-gold mb-8">
                <FiCamera size={24} />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Behind the Lens</span>
              </div>
              <h2 className="font-playfair text-4xl text-resort-blue mb-8">
                The art of seeing <br/> the Atlantic.
              </h2>
              <p className="text-gray-500 font-light leading-relaxed mb-10 italic">
                "{gallery.photographyInfo.description}"
              </p>
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">In Collaboration With</p>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                   {gallery.photographyInfo.photographers.map(p => (
                     <span key={p} className="text-resort-blue font-medium">{p}</span>
                   ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
               {gallery.galleryStats.map((stat, i) => (
                 <div key={i} className={`p-12 ${i % 2 === 0 ? 'bg-[#FCFBFA]' : 'bg-resort-blue text-white'}`}>
                    <span className={`text-4xl font-playfair mb-4 block ${i % 2 === 0 ? 'text-resort-gold' : 'text-resort-gold'}`}>
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
                      {stat.label}
                    </span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[1000] bg-white flex flex-col md:flex-row items-center justify-center">
          <button 
            onClick={() => setSelectedItem(null)}
            className="absolute top-8 right-8 z-50 text-resort-blue hover:rotate-90 transition-transform duration-500"
          >
            <FiX size={40} />
          </button>

          <div className="w-full md:w-[70%] h-full flex items-center justify-center p-8 bg-[#F8F7F4]">
            {selectedItem.type === 'video' ? (
              <div className="relative w-full aspect-video group">
                 <img src={selectedItem.thumbnail} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-24 h-24 rounded-full bg-resort-blue text-white flex items-center justify-center hover:scale-110 transition-transform">
                      <FiPlay size={32} />
                    </button>
                 </div>
              </div>
            ) : (
              <img src={selectedItem.src} className="max-h-full max-w-full object-contain shadow-2xl" />
            )}
          </div>

          <div className="w-full md:w-[30%] p-12 md:p-20 bg-white h-full flex flex-col justify-center">
            <span className="text-resort-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-6">
              {selectedItem.category}
            </span>
            <h2 className="font-playfair text-4xl text-resort-blue mb-8">{selectedItem.title}</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-12">
              {selectedItem.description}
            </p>
            <div className="flex items-center gap-4 text-resort-blue text-[10px] uppercase tracking-widest font-bold">
              <FiInfo className="text-resort-gold" /> Details • {selectedItem.type}
            </div>
          </div>
        </div>
      )}

      {/* --- CTA --- */}
      <section className="py-32 bg-resort-blue text-white text-center">
         <div className="container mx-auto px-6">
            <h2 className="font-playfair text-5xl mb-12">Witness the Majesty In-Person</h2>
            <a href="/contact" className="inline-flex items-center gap-6 group">
               <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Arrange a Private Tour</span>
               <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-resort-gold group-hover:border-resort-gold transition-all">
                  <FiArrowRight />
               </div>
            </a>
         </div>
      </section>
    </div>
  );
};

export default Gallery;