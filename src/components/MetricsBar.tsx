'use client';

import { useEffect, useRef } from 'react';
import { Award, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import gsap from 'gsap';
import profileData from '@/data/profile.json';

export default function MetricsBar() {
  const icons = [Award, CheckCircle2, ShieldCheck, Zap];
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.metrics-bar__item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }, barRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={barRef} className="metrics-bar">
      <div className="container--narrow">
        <div className="glass-card metrics-bar__card">
          <div className="metrics-bar__grid">
            {profileData.metrics.map((metric, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div key={metric.label} className="metrics-bar__item">
                  <div className="metrics-bar__icon-box">
                    <Icon className="icon-lg" />
                  </div>

                  <div className="metrics-bar__value text-gradient-gold">
                    {metric.value}
                  </div>

                  <div>
                    <div className="metrics-bar__label">
                      {metric.label}
                    </div>
                    <div className="metrics-bar__subtext">
                      {metric.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
