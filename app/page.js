'use client'

import '../app/globals.css';
import HeroSection from "./sections/hero";
import AboutSection from "./sections/about";
import ServicesSection from "./sections/services";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ContactForm from './components/contactform';
import { useState, useEffect } from 'react';


// Function to get a random Picsum image
const getRandomImage = () => {
  return `https://random-image-pepebigotes.vercel.app/api/random-image`;
};

// Component for the fixed image sidebar
const ImageSidebar = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setImageUrl(getRandomImage());
  }, []);

  if (!imageUrl) return (
    <div className='hidden md:block md:w-1/3 md:h-screen md:fixed md:left-0 md:top-0 bg-gray-800 animate-pulse'></div>
  );

  return (
    <div className='hidden md:block md:w-1/3 md:h-screen md:fixed md:left-0 md:top-0'>
      <div className="relative w-full h-full">
        <img
          src={imageUrl}
          alt="Decorative background image"
          className="w-full h-full object-cover"
        />

        {/* Optional: Branding in the sidebar */}
        <div className="absolute bottom-8 left-8 z-10">
          <h2 className="text-2xl font-bold text-white">Kronos Studio</h2>
          <p className="text-gray-300 mt-1">Digital Innovation Studio</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row'>
      <Navbar />

      {/* Fixed image sidebar - exactly 1/3 width on desktop */}
      <ImageSidebar />

      {/* Scrollable content area - exactly 2/3 width on desktop */}
      <div className='w-full md:w-2/3 md:ml-[33.333%]'>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
