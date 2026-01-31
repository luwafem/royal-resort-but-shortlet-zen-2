export const naijaStaysData = {
  seo: {
    title: "mex apartments | Premium Shortlet Apartments & Villas in Nigeria",
    description: "Experience luxury living with mex apartments  - premium shortlet apartments, serviced apartments, and luxury villas across Nigeria's major cities. Book your perfect stay today.",
    keywords: "shortlet apartments Nigeria, serviced apartments Lagos, vacation rentals Abuja, luxury apartments Port Harcourt, monthly rentals Nigeria",
    canonical: "https://mexapartments.ng",
    ogImage: "/og-image.jpg"
  },
  
  contact: {
  phone: "+2349061234567",  // Remove spaces from phone numbers
  whatsapp: "2349061234567",  // Remove + sign for WhatsApp
  email: "bookings@mexapartments.ng",
  address: "3A Bourdillon Road, Ikoyi, Lagos, Nigeria",
  workingHours: "24/7 Booking Support"
},
  
  socialLinks: {
    instagram: "https://instagram.com/mexapartments",
    twitter: "https://twitter.com/mexapartments",
    facebook: "https://facebook.com/mexapartments",
    airbnb: "https://airbnb.com/users/show/mexapartments"
  },
  
  cities: [
    { id: 'lagos', name: 'Lagos', count: 24, icon: '🌊' },
    { id: 'abuja', name: 'Abuja', count: 18, icon: '🏛️' },
    { id: 'portharcourt', name: 'Port Harcourt', count: 12, icon: '⛽' },
    { id: 'ibadan', name: 'Ibadan', count: 8, icon: '🌿' },
    { id: 'enugu', name: 'Enugu', count: 6, icon: '⛰️' }
  ],

  properties: [
    {
      id: 1,
      name: "Ikoyi Luxury Apartment",
      slug: "ikoyi-luxury-apartment",
      category: "apartment",
      price: 75000,
      pricePer: "night",
      bedrooms: 2,
      bathrooms: 2,
      maxGuests: 4,
      squareMeters: 120,
      featured: true,
      city: "lagos",
      location: "Ikoyi, Lagos",
      highlights: [
        "24/7 Security & Concierge",
        "High-speed WiFi & Smart TV",
        "Fully equipped kitchen",
        "Gym & Pool access",
        "Daily housekeeping"
      ],
      description: "Modern 2-bedroom apartment in the heart of Ikoyi, offering luxury living with premium amenities and excellent security.",
      amenities: [
        "Air conditioning",
        "Smart TV with DSTV",
        "Fully equipped kitchen",
        "High-speed WiFi",
        "Washing machine",
        "24/7 Security",
        "Swimming pool",
        "Gym access",
        "Backup power"
      ],
      images: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
      ],
      gallery: [
        {
          id: "lagos1-1",
          src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
          title: "Living Room",
          description: "Modern living area with premium furniture",
          category: "lagos"
        }
      ]
    },
    {
      id: 2,
      name: "Maitama Executive Villa",
      slug: "maitama-executive-villa",
      category: "villa",
      price: 120000,
      pricePer: "night",
      bedrooms: 4,
      bathrooms: 4,
      maxGuests: 8,
      squareMeters: 280,
      featured: true,
      city: "abuja",
      location: "Maitama, Abuja",
      highlights: [
        "Private swimming pool",
        "Secure compound",
        "Staff quarters",
        "BBQ area",
        "Smart home system"
      ],
      description: "Spacious 4-bedroom villa in prestigious Maitama, perfect for families and corporate retreats.",
      amenities: [
        "Private pool",
        "BBQ area",
        "Smart home",
        "Garden",
        "Parking for 4 cars",
        "Staff quarters",
        "Backup generator",
        "Water treatment"
      ],
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 3,
      name: "Victoria Island Penthouse",
      slug: "victoria-island-penthouse",
      category: "penthouse",
      price: 180000,
      pricePer: "night",
      bedrooms: 3,
      bathrooms: 3,
      maxGuests: 6,
      squareMeters: 220,
      featured: true,
      city: "lagos",
      location: "Victoria Island, Lagos",
      highlights: [
        "Panoramic ocean views",
        "Private rooftop terrace",
        "Jacuzzi",
        "Chef's kitchen",
        "Valet parking"
      ],
      description: "Luxury penthouse with stunning ocean views on Victoria Island, offering ultimate privacy and exclusivity.",
      amenities: [
        "Rooftop terrace",
        "Jacuzzi",
        "Wine cellar",
        "Home theater",
        "Chef's kitchen",
        "Valet service",
        "24/7 Concierge"
      ],
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  ],
  
  amenities: [
    {
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV and professional guards",
      icon: "security"
    },
    {
      title: "High-speed WiFi",
      description: "Fiber internet for work and entertainment",
      icon: "wifi"
    },
    {
      title: "Fully Equipped Kitchen",
      description: "Modern kitchens with appliances and cookware",
      icon: "kitchen"
    },
    {
      title: "Backup Power",
      description: "Generator and inverter systems for uninterrupted power",
      icon: "power"
    },
    {
      title: "Daily Cleaning",
      description: "Professional housekeeping services",
      icon: "cleaning"
    },
    {
      title: "Smart Home Features",
      description: "Smart locks, lighting, and entertainment systems",
      icon: "smart"
    }
  ],

  services: [
    {
      title: "Airport Pickup",
      description: "Complimentary airport transfer for bookings over 5 nights",
      icon: "✈️"
    },
    {
      title: "Chef Services",
      description: "Private chef available for in-house dining experiences",
      icon: "👨‍🍳"
    },
    {
      title: "Concierge",
      description: "Personal concierge for restaurant bookings and city tours",
      icon: "🎩"
    },
    {
      title: "Laundry Service",
      description: "Same-day laundry and dry cleaning",
      icon: "👔"
    }
  ],

  gallery: {
    categories: [
      { id: 'all', name: 'All Properties', count: 68 },
      { id: 'lagos', name: 'Lagos', count: 24 },
      { id: 'abuja', name: 'Abuja', count: 18 },
      { id: 'portharcourt', name: 'Port Harcourt', count: 12 },
      { id: 'luxury', name: 'Luxury', count: 14 }
    ],
    
    images: [
      {
        id: "featured-1",
        category: "lagos",
        src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
        title: "Ikoyi Modern Apartment",
        description: "Contemporary living space in prime Ikoyi location",
        type: "image",
        featured: true,
        city: "Lagos"
      },
      {
        id: "featured-2",
        category: "abuja",
        src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1800&q=80",
        title: "Maitama Luxury Villa",
        description: "Spacious villa with garden in Abuja's diplomatic area",
        type: "image",
        featured: true,
        city: "Abuja"
      }
    ],

    galleryStats: [
      { label: "Properties", value: "68+" },
      { label: "Cities", value: "5" },
      { label: "Happy Guests", value: "2,500+" },
      { label: "Repeat Bookings", value: "65%" }
    ],

    photographyInfo: {
      title: "Professional Photography",
      description: "All properties are professionally photographed to showcase the true essence of luxury living in Nigeria.",
      photographers: [
        "Nigerian Luxury Properties Photography",
        "Lagos Visuals Team",
        "Abuja Real Estate Photography"
      ],
      equipment: "Professional equipment with natural lighting to showcase spaces authentically",
      usage: "Images showcase actual properties available for booking"
    }
  }
};