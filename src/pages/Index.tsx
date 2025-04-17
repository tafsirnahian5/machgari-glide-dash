
import React from 'react';
import Header from '@/components/Header';
import ImageSlider from '@/components/ImageSlider';
import Dashboard from '@/components/Dashboard';
import YouTubeSection from '@/components/YouTubeSection';
import AboutContact from '@/components/AboutContact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <ImageSlider />
        <Dashboard />
        <YouTubeSection />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
