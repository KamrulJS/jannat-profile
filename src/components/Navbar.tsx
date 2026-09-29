'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import profileData from '@/data/profile.json';

interface NavbarProps {
  onOpenDiscovery: () => void;
}

export default function Navbar({ onOpenDiscovery }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Tech Stack', href: '#techstack' },
    { name: 'Work', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        
        {/* Monogram / Brand */}
        <a href="/" className="navbar__brand">
          <div className="navbar__monogram-border">
            <div className="navbar__monogram-inner">
              <span className="text-gradient-gold">JF</span>
            </div>
          </div>
          <div className="navbar__brand-info">
            <span className="navbar__brand-name">{profileData.name}</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar__nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions & Pulse Status */}
        <div className="navbar__actions">
          <div className="badge badge--mint">
            <span className="pulse-dot" />
            <span>{profileData.availabilityStatus}</span>
          </div>

          <button onClick={onOpenDiscovery} className="btn btn--primary">
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="icon-md" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="navbar__toggle-btn"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="icon-xl" /> : <Menu className="icon-xl" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="navbar__mobile-drawer">
          <div className="badge badge--mint navbar__mobile-drawer-badge">
            <span className="pulse-dot" />
            <span>{profileData.availabilityStatus}</span>
          </div>

          <div className="navbar__mobile-links-grid">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="navbar__mobile-link"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDiscovery();
            }}
            className="btn btn--primary btn--full"
          >
            <span>Book Discovery Call</span>
            <Sparkles className="icon-md" />
          </button>
        </div>
      )}
    </header>
  );
}
