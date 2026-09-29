'use client';

import { useState } from 'react';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MetricsBar from '@/components/MetricsBar';
import Services from '@/components/Services';
import Workflow from '@/components/Workflow';
import TechStack from '@/components/TechStack';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import InquirySection from '@/components/InquirySection';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import DiscoveryModal from '@/components/DiscoveryModal';
import { ProjectItem } from '@/types';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [projectModalTab, setProjectModalTab] = useState<'figma' | 'live'>('figma');
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [selectedPlanPrefill, setSelectedPlanPrefill] = useState('');
  const [selectedServicePrefill, setSelectedServicePrefill] = useState('');

  const handleOpenProjectModal = (project: ProjectItem, defaultTab: 'figma' | 'live' = 'figma') => {
    setSelectedProject(project);
    setProjectModalTab(defaultTab);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanPrefill(planName);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServicePrefill(serviceTitle);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="main-layout">
      {/* Mouse Cursor Ambient Lighting */}
      <CursorGlow />

      {/* Floating Navigation Header */}
      <Navbar onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenDiscovery={() => setIsDiscoveryOpen(true)} />

      {/* Live Social Proof & Metrics Bar */}
      <MetricsBar />

      {/* Core Services ("What I Solve") */}
      <Services onOpenInquiry={handleSelectService} />

      {/* 4-Step Interactive Workflow Pipeline */}
      <Workflow />

      {/* Structured Tech Stack Matrix */}
      <TechStack />

      {/* Featured Portfolio / Case Studies Grid */}
      <Portfolio onSelectProject={handleOpenProjectModal} />

      {/* Transparent Pricing Packages */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* Verified Client Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* High-Impact Project Inquiry Form */}
      <InquirySection
        onOpenDiscovery={() => setIsDiscoveryOpen(true)}
        selectedPlanPrefill={selectedPlanPrefill}
        selectedServicePrefill={selectedServicePrefill}
      />

      {/* Footer */}
      <Footer />

      {/* Case Study Detail Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        defaultTab={projectModalTab}
        onClose={() => setSelectedProject(null)}
        onBookCall={() => {
          setSelectedProject(null);
          setIsDiscoveryOpen(true);
        }}
      />

      {/* 15-min Discovery Call Booking Modal */}
      <DiscoveryModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
      />
    </main>
  );
}
