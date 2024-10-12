"use client"
// components/organisms/BannerSlider.tsx
import React, { useEffect } from 'react';
import Slider from "react-slick";
import BannerSlide from '@/components/molecules/bannerSlide/BannerSlide';
import { bannerSlidesData, BannerSlideData } from '@/data/bannerSlidesData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './BannerSlider.css'; // Make sure to create this file for custom styles

const BannerSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    // Force a re-render after component mount
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="banner-slider-container">
      <Slider {...settings}>
        {bannerSlidesData.map((slide: BannerSlideData) => (
          <div key={slide.id} className="slick-slide-item">
            <BannerSlide {...slide} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerSlider;