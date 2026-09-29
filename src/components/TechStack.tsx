'use client';

import { Sparkles, CheckCircle2, Cpu } from 'lucide-react';
import techStackData from '@/data/techstack.json';

export default function TechStack() {
  return (
    <section id="techstack" className="section bg-grid-pattern">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Sparkles className="icon-sm" />
            <span>TECHNICAL MATRIX & TOOLKIT</span>
          </div>

          <h2 className="section-header__title font-heading">
            Engineered with <span className="text-gradient-gold">Modern Standards</span>
          </h2>

          <p className="section-header__description">
            A structured breakdown of technologies and frameworks powering pixel-perfect, scalable web architecture.
          </p>
        </div>

        {/* Matrix Grid (6 Categories) */}
        <div className="grid grid--3">
          {techStackData.map((cat) => (
            <div key={cat.category} className="glass-card tech-card">
              <div>
                <div className="tech-card__header">
                  <div className="service-card__icon-box service-card__icon-box--sm">
                    <Cpu className="icon-lg" />
                  </div>
                  <div>
                    <h3 className="tech-card__title font-heading">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                {/* Items List */}
                <div>
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className={`tech-card__item ${item.highlight ? 'tech-card__item--highlight' : ''}`}
                    >
                      <div className="tech-card__item-header">
                        <span className={`tech-card__item-name font-heading ${item.highlight ? 'text-gold' : ''}`}>
                          {item.name}
                        </span>
                        <span className="font-mono-code tech-card__mastery-tag">
                          {item.proficiency}% Mastery
                        </span>
                      </div>

                      <p className="tech-card__sublabel">
                        {item.sublabel}
                      </p>

                      {/* Progress Bar */}
                      <div className="tech-card__progress">
                        <div
                          className="tech-card__progress-fill"
                          style={{ '--proficiency': `${item.proficiency}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tech-card__footer font-mono-code">
                <CheckCircle2 className="icon-md icon-[#E5C494]" />
                <span>Production Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
