import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, image, keywords }) => {
  const defaultTitle = "CB LUXE STAYS  | Premium Shortlet Accommodations";
  const defaultDescription = "Experience luxury living with CB LUXE STAYS  - premium shortlet apartments, serviced apartments, and luxury villas across Nigeria.";
  const defaultImage = "/og-image.jpg";
  
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || "shortlet, nigeria, lagos, abuja, luxury apartments"} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};