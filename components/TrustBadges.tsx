import React from 'react';

const LOGOS = [
  { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' },
  { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png' },
  { name: 'LinkedIn', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' },
  { name: 'TikTok', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/2560px-TikTok_logo.svg.png' },
  { name: 'YouTube', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' },
  { name: 'Shopify', src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
  { name: 'ClickFunnels', src: 'https://assets.website-files.com/60d4b97587c6722d4f826359/60d4b97587c6729a658266d6_clickfunnels-logo-dark.svg' },
];

export const TrustBadges: React.FC = () => {
  return (
    <div className="w-full bg-yellow-300 border-b-4 border-black py-6 overflow-hidden relative">
      <div className="flex gap-24 animate-marquee whitespace-nowrap items-center">
        {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src={logo.src} alt={logo.name} className="h-8 md:h-10 object-contain" />
          </div>
        ))}
      </div>
      
      {/* Fade Gradients for visual comfort */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-yellow-300 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-yellow-300 to-transparent z-10"></div>
    </div>
  );
};