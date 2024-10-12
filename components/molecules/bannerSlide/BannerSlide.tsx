"use client"
// components/molecules/BannerSlide.tsx
import React from 'react';
import Image from 'next/image';

interface BannerSlideProps {
  backgroundImage: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const BannerSlide: React.FC<BannerSlideProps> = ({
  backgroundImage,
  title,
  description,
  ctaText,
  ctaLink
}) => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover pl-0 sm:pl-24 md:pl-48 lg:pl-[450px]"
        priority
      />
      <div className="absolute inset-0 bg-[#071738] bg-opacity-30" />
      <div className="absolute inset-y-0 left-0 w-full sm:w-4/5 md:w-3/4 lg:w-3/5 h-full">
        <svg className="h-full w-full" viewBox="0 0 100 120" preserveAspectRatio="none">
          <path d="M0,0 H70 Q80,24 75,48 T70,84 Q65,102 70,120 H0 Z" className="fill-[#071738] opacity-95" />
          <path d="M0,0 H65 Q75,30 70,60 T65,96 Q60,108 65,120 H0 Z" className="fill-[#071738] opacity-90" />
          <path d="M0,0 H60 Q70,36 65,72 T60,108 Q55,114 60,120 H0 Z" className="fill-[#071738] opacity-85" />
          <path d="M0,0 H55 Q65,42 60,84 T55,114 Q50,116 55,120 H0 Z" className="fill-[#071738] opacity-80" />
          <path d="M0,0 H50 Q60,48 55,96 T50,117 Q45,118 50,120 H0 Z" className="fill-[#071738] opacity-75" />
          <path d="M0,0 H45 Q55,54 50,102 T45,118 Q40,120 45,120 H0 Z" className="fill-[#071738] opacity-70" />
          <path d="M0,0 H40 Q50,60 45,108 T40,120 H0 Z" className="fill-[#071738] opacity-65" />
          <path d="M0,0 H35 Q45,66 40,114 T35,120 H0 Z" className="fill-[#071738] opacity-60" />
          <path d="M0,0 H30 Q40,72 35,116 T30,120 H0 Z" className="fill-[#071738] opacity-55" />
          <path d="M0,0 H25 Q35,78 30,117 T25,120 H0 Z" className="fill-[#071738] opacity-50" />
          <path d="M0,0 H20 Q30,84 25,118 T20,120 H0 Z" className="fill-[#071738] opacity-45" />
          <path d="M0,0 H15 Q25,90 20,120 H0 Z" className="fill-[#071738] opacity-40" />
          <path d="M0,0 H10 Q20,96 15,120 H0 Z" className="fill-[#071738] opacity-35" />
          <path d="M0,0 H5 Q15,102 10,120 H0 Z" className="fill-[#071738] opacity-30" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4 md:mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{title}</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 sm:mb-6 md:mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{description}</p>
            <a
              href={ctaLink}
              className="btn no-animation hover:bg-white hover:text-[#071738] bg-transparent border-2 border-white text-white text-sm sm:text-base md:text-lg px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 min-h-fit h-fit rounded-md w-fit capitalize font-medium transition-colors duration-300"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlide;