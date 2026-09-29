'use client';

import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import pricingData from '@/data/pricing.json';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="section bg-grid-pattern">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Sparkles className="icon-sm" />
            <span>TRANSPARENT PRICING & ENGAGEMENT</span>
          </div>

          <h2 className="section-header__title font-heading">
            Predictable Packages, <span className="text-gradient-gold">Zero Hidden Fees</span>
          </h2>

          <p className="section-header__description">
            Choose the engagement tier that fits your growth stage. Every tier includes 100% Figma design assets and clean WordPress code.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid--3">
          {pricingData.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`glass-card pricing-card ${isPopular ? 'pricing-card--popular' : ''}`}
              >
                {isPopular && (
                  <div className="pricing-card__popular-tag">
                    <Sparkles className="icon-sm" />
                    <span>MOST POPULAR CHOICE</span>
                  </div>
                )}

                <div className="pricing-card__content-box">
                  {/* Title & Tagline */}
                  <div>
                    <span className="service-card__tool-badge pricing-card__badge">
                      {plan.idealFor}
                    </span>
                    <h3 className="font-heading pricing-card__title">
                      {plan.name}
                    </h3>
                    <p className="pricing-card__tagline">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pricing-card__price-row">
                    <span className="pricing-card__price text-gradient-gold font-heading">
                      {plan.price}
                    </span>
                    <span className="font-mono-code pricing-card__meta-unit">/ flat investment</span>
                  </div>

                  {/* Turnaround Time */}
                  <div className="font-mono-code pricing-card__turnaround">
                    <Clock className="icon-md" />
                    <span>Turnaround: {plan.turnaround}</span>
                  </div>

                  {/* Features List */}
                  <div>
                    <div className="form-label u-margin-bottom-sm">
                      What&apos;s Included:
                    </div>
                    <div className="pricing-card__feature-list">
                      {plan.features.map((feat) => (
                        <div key={feat} className="pricing-card__feature-item">
                          <CheckCircle2 className="icon-md icon-[#E5C494]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pricing-card__cta-wrapper">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`btn ${isPopular ? 'btn--primary' : 'btn--secondary'} btn--full`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="icon-md" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Note */}
        <div className="font-mono-code pricing-card__guarantee-note">
          <ShieldCheck className="icon-md icon-[#E5C494]" />
          <span>100% Satisfaction Guarantee &bull; Milestone Payments Available</span>
        </div>

      </div>
    </section>
  );
}

