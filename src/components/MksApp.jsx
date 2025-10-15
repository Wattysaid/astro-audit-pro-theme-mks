import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HeroSection from './sections/HeroSection';
import WhyChooseSection from './sections/WhyChooseSection';
import ServicesSection from './sections/ServicesSection';
import MissionVisionSection from './sections/MissionVisionSection';
import CTASection from './sections/CTASection';

const MksApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <MissionVisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default MksApp;
