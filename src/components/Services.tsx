'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Figma, 
  Code2, 
  ShoppingBag, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  X,
  Layers
} from 'lucide-react';
import gsap from 'gsap';
import servicesData from '@/data/services.json';
import { ServiceItem } from '@/types';

interface ServicesProps {
  onOpenInquiry: (serviceTitle: string) => void;
}

export default function Services({ onOpenInquiry }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Figma': return Figma;
      case 'Code2': return Code2;
      case 'ShoppingBag': return ShoppingBag;
      case 'Zap': return Zap;
      default: return Layers;
    }
  };

  return (
    <section ref={sectionRef} id="services" className="section bg-grid-pattern">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Sparkles className="icon-sm" />
            <span>CORE SERVICES & SOLUTIONS</span>
          </div>

          <h2 className="section-header__title">
            What I Solve for <span className="text-gradient-gold">Growing Brands</span>
          </h2>

          <p className="section-header__description">
            End-to-end digital solutions eliminating handoff friction, slow page load times, and poor conversion rates.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid--2">
          {servicesData.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div key={service.id} className="service-card glass-card">
                <div>
                  {/* Top Bar: Icon & Highlight Metric Badge */}
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <Icon className="icon-xl" />
                    </div>

                    <div className="badge badge--mint">
                      {service.highlightMetric}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="service-card__title">
                      {service.title}
                    </h3>
                    <p className="service-card__tagline">
                      {service.tagline}
                    </p>
                    <p>
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="service-card__features">
                    {service.features.map((feat) => (
                      <div key={feat} className="service-card__feature-item">
                        <CheckCircle2 className="icon-md icon-[#E5C494]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tool Badges */}
                  <div className="service-card__tools">
                    {service.tools.map((tool) => (
                      <span key={tool} className="service-card__tool-badge">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card CTA */}
                <div className="service-card__bottom">
                  <button
                    onClick={() => setSelectedService(service as ServiceItem)}
                    className="btn--text-only"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="icon-md icon-[#E5C494]" />
                  </button>

                  <button
                    onClick={() => onOpenInquiry(service.title)}
                    className="btn btn--secondary btn--sm"
                  >
                    Book Solution
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="modal-backdrop">
          <div className="modal-content modal-content--discovery">
            <button onClick={() => setSelectedService(null)} className="modal-close-btn">
              <X className="icon-lg" />
            </button>

            <div className="modal-header-info">
              <div className="service-card__icon-box">
                <Sparkles className="icon-xl" />
              </div>
              <div>
                <h3 className="service-card__title">{selectedService.title}</h3>
                <p className="service-card__tagline">{selectedService.tagline}</p>
              </div>
            </div>

            <p className="modal-description-text">
              {selectedService.description}
            </p>

            <div className="modal-deliverables-group">
              <h4 className="form-label">Included Deliverables:</h4>
              <div className="grid grid--2 modal-deliverables-grid">
                {selectedService.features.map((item) => (
                  <div key={item} className="service-card__feature-item service-card__feature-item--box">
                    <CheckCircle2 className="icon-md icon-[#E5C494]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer-row">
              <span className="font-mono-code text-mint-sm">
                Standard: {selectedService.highlightMetric}
              </span>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenInquiry(title);
                }}
                className="btn btn--primary"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
