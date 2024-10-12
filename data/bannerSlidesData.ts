// data/bannerSlidesData.ts

export interface BannerSlideData {
    id: number;
    backgroundImage: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  }
  
  export const bannerSlidesData: BannerSlideData[] = [
    {
      id: 1,
      backgroundImage: "/sliderImages/slider1.jpg",
      title: "Protect Our Forests",
      description: "Join our mission to preserve and restore forest ecosystems worldwide.",
      ctaText: "Get Involved",
      ctaLink: "/get-involved"
    },
    {
      id: 2,
      backgroundImage: "/sliderImages/slider2.jpg",
      title: "Empower Communities",
      description: "We work with local communities to create sustainable solutions.",
      ctaText: "Our Projects",
      ctaLink: "/projects"
    },
    {
      id: 3,
      backgroundImage: "/sliderImages/slider3.jpg",
      title: "Fight Climate Change",
      description: "Take action now to reduce carbon emissions and protect our planet.",
      ctaText: "Take Action",
      ctaLink: "/take-action"
    },
  ];