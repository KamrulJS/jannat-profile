'use client';

import { ArrowUp, Github, Linkedin, Dribbble, Figma } from 'lucide-react';
import profileData from '@/data/profile.json';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          
          {/* Brand */}
          <div className="footer__brand-col">
            <a href="#" className="navbar__brand">
              <div className="navbar__monogram-border">
                <div className="navbar__monogram-inner">
                  <span className="text-gradient-gold">JF</span>
                </div>
              </div>
              <div className="navbar__brand-info">
                <span className="navbar__brand-name">{profileData.fullName}</span>
                <span className="navbar__brand-role">{profileData.title}</span>
              </div>
            </a>

            <p className="footer__brand-desc">
              {profileData.positioningStatement}
            </p>

            {/* Social Icons */}
            <div className="footer__social-row">
              <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn--secondary btn--sm btn--icon-only" aria-label="LinkedIn">
                <Linkedin className="icon-md" />
              </a>
              <a href={profileData.socials.figma} target="_blank" rel="noreferrer" className="btn btn--secondary btn--sm btn--icon-only" aria-label="Figma">
                <Figma className="icon-md" />
              </a>
              <a href={profileData.socials.dribbble} target="_blank" rel="noreferrer" className="btn btn--secondary btn--sm btn--icon-only" aria-label="Dribbble">
                <Dribbble className="icon-md" />
              </a>
              <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="btn btn--secondary btn--sm btn--icon-only" aria-label="GitHub">
                <Github className="icon-md" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links-col">
            <h4 className="form-label footer__col-heading">
              Navigation
            </h4>
            <ul className="footer__links-list">
              <li><a href="#services">Core Solutions</a></li>
              <li><a href="#workflow">4-Step Workflow</a></li>
              <li><a href="#techstack">Technical Stack Matrix</a></li>
              <li><a href="#work">Featured Portfolio</a></li>
              <li><a href="#pricing">Engagement Packages</a></li>
              <li><a href="#reviews">Client Testimonials</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="footer__links-col">
            <h4 className="form-label footer__col-heading">
              Specialties
            </h4>
            <ul className="footer__links-list">
              <li>Figma Auto-Layout & Design Systems</li>
              <li>Bespoke WordPress Themes (ACF Pro)</li>
              <li>Bricks Builder & Elementor Mastery</li>
              <li>WooCommerce Subscription Funnels</li>
              <li>99+ Core Web Vitals Optimization</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="font-mono-code footer__bottom">
          <div>
            &copy; {new Date().getFullYear()} {profileData.fullName}. All rights reserved.
          </div>

          <button onClick={scrollToTop} className="btn btn--secondary btn--sm">
            <span>Back to Top</span>
            <ArrowUp className="icon-sm icon-[#E5C494]" />
          </button>
        </div>

      </div>
    </footer>
  );
}

