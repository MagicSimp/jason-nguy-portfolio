import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ProjectsSection from '@/components/ProjectsSection';
import MicroProjectsSection from '@/components/MicroProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Space background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C27B0\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"1\"/%3E%3Ccircle cx=\"40\" cy=\"40\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <TechnologiesSection />
          <AboutSection />
          <CapabilitiesSection />
          <ProjectsSection />
          <MicroProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
