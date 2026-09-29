'use client';

import { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';
import gsap from 'gsap';
import profileData from '@/data/profile.json';

interface HeroProps {
  onOpenDiscovery: () => void;
}

export default function Hero({ onOpenDiscovery }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        badgesRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section bg-grid-pattern">
      <div className="radial-glow hero-section__radial-glow" />

      <div className="hero-section__container">
        
        {/* Pre-tag Badge */}
        <div className="hero-section__badge-wrapper">
          <div className="hero-section__badge">
            <Sparkles className="icon-md icon-[#E5C494]" />
            <span>UI/UX DESIGNER & WORDPRESS ARCHITECT</span>
          </div>
        </div>

        {/* Title */}
        <h1 ref={headlineRef} className="hero-section__title">
          I design high-converting experiences in <span className="text-gradient-gold">Figma</span>.
          <br />
          I bring them to life in <span className="text-gradient-rose">WordPress</span>.
        </h1>

        {/* Description */}
        <p className="hero-section__description">
          {profileData.positioningStatement}
        </p>

        {/* Dual Actions */}
        <div className="hero-section__actions">
          <a href="#work" className="btn btn--primary">
            <span>View Featured Works</span>
            <ArrowRight className="icon-md" />
          </a>

          <button onClick={onOpenDiscovery} className="btn btn--secondary">
            <Calendar className="icon-md icon-[#E5C494]" />
            <span>Book 15-min Discovery Call</span>
          </button>
        </div>

        {/* Trust Strip */}
        <div ref={badgesRef} className="hero-section__trust-strip">
          <div className="hero-section__trust-item">
            <CheckCircle2 className="icon-md icon-[#E5C494]" />
            <span>100% Figma-to-WP Precision</span>
          </div>
          <div className="hero-section__trust-item">
            <Zap className="icon-md icon-mint" />
            <span>99+ Core Web Vitals Standard</span>
          </div>
          <div className="hero-section__trust-item">
            <ShieldCheck className="icon-md icon-rose" />
            <span>Zero Handoff Friction</span>
          </div>
        </div>

      </div>
    </section>
  );
}
