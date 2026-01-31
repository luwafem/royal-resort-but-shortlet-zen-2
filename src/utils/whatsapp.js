export const createWhatsAppLink = (message) => {
  const whatsappNumber = "2349061234567"; // Your WhatsApp number
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
};

export const createPropertyWhatsAppMessage = (property, checkInDate, checkOutDate, guests, nights) => {
  const total = property.price * nights + 25000; // Add cleaning and service fees
  const formattedTotal = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(total);

  const message = `Hello mex apartments

I want to book: ${property.name}
📍 Location: ${property.location}
🏠 Property Type: ${property.category}
🛏️ Bedrooms: ${property.bedrooms}
👥 Max Guests: ${property.maxGuests}

📅 Check-in: ${checkInDate || 'TBD'}
📅 Check-out: ${checkOutDate || 'TBD'}
👥 Guests: ${guests}
🌙 Nights: ${nights}

💰 Total Estimate: ${formattedTotal}

Please send me more details and the booking process.`;

  return message;
};