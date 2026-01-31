import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiMapPin,
  FiUsers,
  FiHome,
  FiWifi
} from 'react-icons/fi';

const PropertyCard = ({ property }) => {
  const formatPrice = (price) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);

  return (
    <Link
      to={`/property/${property.slug}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-2">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.name}
            className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          />

          {/* Soft gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Price */}
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-sm tracking-wide opacity-80">
              from
            </span>
            <div className="text-lg font-medium">
              {formatPrice(property.price)} / night
            </div>
          </div>

          {/* City */}
          <div className="absolute top-4 right-4 px-3 py-1 text-[10px] tracking-widest uppercase bg-white/90 text-zinc-900 rounded-full">
            {property.city}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pt-6 pb-8">
          <h3 className="text-xl font-light mb-2">
            {property.name}
          </h3>

          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <FiMapPin className="opacity-70" />
            <span>{property.location}</span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-6 text-sm text-zinc-600 mb-6">
            <span className="flex items-center gap-2">
              <FiHome /> {property.bedrooms} beds
            </span>
            <span className="flex items-center gap-2">
              <FiUsers /> {property.maxGuests} guests
            </span>
            <span className="flex items-center gap-2">
              <FiWifi /> Wi-Fi
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 mb-6">
            {property.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm tracking-wide uppercase text-zinc-900 group-hover:gap-4 transition-all">
            View Details
            <span className="text-lg">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PropertyCard;
