import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import { naijaStaysData } from '../data/naijaStaysData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' }
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="group">
              <div className="flex flex-col">
                <span className={`text-xl tracking-tight ${
                  isScrolled ? 'text-zinc-900' : 'text-white'
                }`}>
                  CB LUXE STAYS 
                </span>
                <span className={`text-[10px] tracking-[0.35em] uppercase ${
                  isScrolled ? 'text-zinc-500' : 'text-white/60'
                }`}>
                  Apartment
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navigation.map(item => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm tracking-widest uppercase transition ${
                      active
                        ? isScrolled
                          ? 'text-zinc-900'
                          : 'text-white'
                        : isScrolled
                        ? 'text-zinc-500 hover:text-zinc-900'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href={`https://wa.me/${naijaStaysData.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm tracking-wide transition ${
                  isScrolled
                    ? 'bg-zinc-900 text-white hover:bg-zinc-700'
                    : 'border border-white/50 text-white hover:bg-white hover:text-zinc-900'
                }`}
              >
                WhatsApp Booking <FiChevronRight />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden transition ${
                isScrolled ? 'text-zinc-900' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-zinc-900 text-white">
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <FiX size={32} />
            </button>
          </div>

          <div className="h-full flex flex-col justify-center px-10">
            {/* Brand */}
            <div className="mb-20">
              <h2 className="text-3xl font-light mb-2">
                CB LUXE STAYS 
              </h2>
              <p className="text-white/60 text-xs tracking-[0.35em] uppercase">
                 Apartment
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-10 mb-20">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-light hover:text-white/70 transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <a
              href={`https://wa.me/${naijaStaysData.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-zinc-900 hover:bg-zinc-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Book on WhatsApp <FiChevronRight />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
