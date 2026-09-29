'use client';

import { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ShieldCheck,
  Figma,
  Code2
} from 'lucide-react';
import gsap from 'gsap';
import profileData from '@/data/profile.json';

interface HeroProps {
  onOpenDiscovery: () => void;
}

export default function Hero({ onOpenDiscovery }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const floatTag1Ref = useRef<HTMLDivElement>(null);
  const floatTag2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Entry Stagger Timeline
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 35, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1 },
        '-=0.5'
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        actionsRef.current ? actionsRef.current.children : [],
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 },
        '-=0.5'
      )
      .fromTo(
        trustRef.current ? trustRef.current.children : [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        '-=0.4'
      );

      // Looping Micro-Floating Animation for Floating Glass Tags
      if (floatTag1Ref.current) {
        gsap.to(floatTag1Ref.current, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      if (floatTag2Ref.current) {
        gsap.to(floatTag2Ref.current, {
          y: 10,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section bg-grid-pattern">
      <div className="radial-glow hero-section__radial-glow" />

      {/* Decorative Fancy Micro Floating Badges */}
      <div ref={floatTag1Ref} className="hero-section__float-tag hero-section__float-tag--left">
        <Figma className="icon-sm icon-rose" />
        <span>Figma Auto-Layout v5</span>
      </div>

      <div ref={floatTag2Ref} className="hero-section__float-tag hero-section__float-tag--right">
        <Code2 className="icon-sm icon-mint" />
        <span>Bespoke WP ACF Pro</span>
      </div>

      <div className="hero-section__container">
        
        {/* Pre-tag Badge */}
        <div className="hero-section__badge-wrapper">
          <div ref={badgeRef} className="hero-section__badge">
            <Sparkles className="icon-md icon-[#E5C494]" />
            <span>LEAD UI/UX DESIGNER & WORDPRESS ENGINEER</span>
          </div>
        </div>

        {/* Title */}
        <h1 ref={titleRef} className="hero-section__title">
          I design high-converting experiences in <span className="text-gradient-gold">Figma</span>.
          <br />
          I bring them to life in <span className="text-gradient-rose">WordPress</span>.
        </h1>

        {/* Description */}
        <p ref={descRef} className="hero-section__description">
          {profileData.positioningStatement}
        </p>

        {/* Dual Actions */}
        <div ref={actionsRef} className="hero-section__actions">
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
        <div ref={trustRef} className="hero-section__trust-strip">
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

