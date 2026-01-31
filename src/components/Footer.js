import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiInstagram,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUp
} from 'react-icons/fi';
import { FaTripadvisor, FaFacebookF } from 'react-icons/fa';
import { naijaStaysData } from '../data/naijaStaysData';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6 py-20">

        {/* BRAND */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-playfair text-4xl mb-6">
            CB LUXE STAYS 
          </h2>
          <p className="text-zinc-500 leading-relaxed">
            A private beachfront retreat designed for rest, privacy,
            and refined coastal living along Nigeria’s shoreline.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">

          {/* Explore */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-sm text-zinc-600">
              <li><Link to="/properties" className="hover:text-zinc-900">Residences</Link></li>
              <li><Link to="/#amenities" className="hover:text-zinc-900">Amenities</Link></li>
              <li><Link to="/#gallery" className="hover:text-zinc-900">Gallery</Link></li>
              <li><Link to="/concierge" className="hover:text-zinc-900">Concierge</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="flex gap-3">
                <FiMapPin className="mt-1 text-zinc-400" />
                <span>{naijaStaysData.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <FiPhone className="text-zinc-400" />
                <a href={`tel:${naijaStaysData.contact.phone}`} className="hover:text-zinc-900">
                  {naijaStaysData.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <FiMail className="text-zinc-400" />
                <a href={`mailto:${naijaStaysData.contact.email}`} className="hover:text-zinc-900">
                  {naijaStaysData.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-zinc-500 mb-6">
              Private offers and seasonal updates no noise.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full border-b border-zinc-300 py-3 text-sm focus:outline-none focus:border-zinc-900"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-xs uppercase tracking-widest text-zinc-900"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* FOOTER BASE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-zinc-100">

          {/* Socials */}
          <div className="flex gap-6 text-zinc-400">
            {[FaFacebookF, FiInstagram, FiTwitter, FaTripadvisor].map((Icon, i) => (
              <a
                key={i}
                href={Object.values(naijaStaysData.socialLinks)[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900 transition"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex gap-8 text-[11px] uppercase tracking-widest text-zinc-400">
            <Link to="/privacy" className="hover:text-zinc-900">Privacy</Link>
            <Link to="/terms" className="hover:text-zinc-900">Terms</Link>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
          >
            Top <FiArrowUp />
          </button>
        </div>

        <p className="text-center text-[11px] text-zinc-400 mt-12">
          © {year} CB LUXE STAYS 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
