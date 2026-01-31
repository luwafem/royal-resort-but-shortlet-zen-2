import React, { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';

const Gallery = ({ images, propertyName }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div className="w-full space-y-2">
      {/* --- CINEMATIC HERO --- */}
      <div 
        className="relative w-full h-[450px] md:h-[600px] cursor-pointer group overflow-hidden"
        onClick={() => { setCurrentIdx(0); setShowLightbox(true); }}
      >
        <img
          src={images[0]}
          alt={propertyName}
          className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        
        {/* Minimal Overlay Info */}
        <div className="absolute bottom-10 left-10 text-white">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold mb-2 opacity-70">Exterior Study</p>
          <h2 className="font-playfair text-5xl italic drop-shadow-sm">{propertyName}</h2>
        </div>
      </div>

      {/* --- ELEGANT FILMSTRIP (Edge-to-Edge) --- */}
      <div className="flex gap-2 h-32 md:h-48 overflow-x-auto no-scrollbar snap-x">
        {images.slice(1).map((img, i) => (
          <div 
            key={i} 
            className="shrink-0 w-48 md:w-80 h-full snap-start cursor-pointer group relative overflow-hidden"
            onClick={() => { setCurrentIdx(i + 1); setShowLightbox(true); }}
          >
            <img 
              src={img} 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              alt="" 
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[1px]">
               <FiMaximize2 className="text-white text-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* --- MINIMALIST LIGHTBOX --- */}
      {showLightbox && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-fadeIn">
          {/* Subtle Navigation Header */}
          <div className="p-8 flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-300">
              0{currentIdx + 1} / 0{images.length}
            </span>
            <button 
              onClick={() => setShowLightbox(false)}
              className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest"
            >
              <span className="group-hover:text-resort-gold transition-colors">Close Gallery</span>
              <FiX size={20} />
            </button>
          </div>

          {/* Immersive Slide Area */}
          <div className="flex-1 relative flex items-center justify-center px-4 md:px-20">
            <button 
              onClick={() => setCurrentIdx(prev => (prev - 1 + images.length) % images.length)}
              className="absolute left-8 text-gray-200 hover:text-black transition-colors"
            >
              <FiChevronLeft size={60} strokeWidth={1} />
            </button>

            <div className="w-full h-full max-h-[70vh] flex items-center justify-center">
              <img 
                key={currentIdx}
                src={images[currentIdx]} 
                className="max-w-full max-h-full object-contain animate-fadeIn"
                alt="" 
              />
            </div>

            <button 
              onClick={() => setCurrentIdx(prev => (prev + 1) % images.length)}
              className="absolute right-8 text-gray-200 hover:text-black transition-colors"
            >
              <FiChevronRight size={60} strokeWidth={1} />
            </button>
          </div>

          {/* Caption / Context */}
          <div className="p-12 text-center border-t border-gray-50 bg-[#FAF9F6]">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 mb-2">Atlantic Shores Collection</p>
            <p className="font-playfair text-2xl italic text-resort-blue">{propertyName}</p>
          </div>
        </div>
      )}

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default Gallery;