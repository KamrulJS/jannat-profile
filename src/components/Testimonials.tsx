'use client';

import { useState } from 'react';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonialsData from '@/data/testimonials.json';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const activeReview = testimonialsData[currentIdx];

  return (
    <section id="reviews" className="section bg-grid-pattern">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Sparkles className="icon-sm" />
            <span>CLIENT VERIFIED SOCIAL PROOF</span>
          </div>

          <h2 className="section-header__title font-heading">
            Loved by Founders & <span className="text-gradient-gold">Design Leaders</span>
          </h2>

          <p className="section-header__description">
            Don&apos;t just take my word for it. Read how bridging Figma & WordPress solved actual client business bottlenecks.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="glass-card testimonials__spotlight">
          <Quote className="testimonials__quote-icon" />

          <div className="testimonials__content-box">
            {/* Star Rating */}
            <div className="testimonials__star-rating">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="icon-lg icon-[#E5C494]" fill="var(--color-gold)" />
              ))}
              <span className="font-mono-code testimonials__verified-text">
                5.0 Verified Review
              </span>
            </div>

            {/* Quote */}
            <blockquote className="testimonials__quote">
              &quot;{activeReview.quote}&quot;
            </blockquote>

            {/* Client Profile Footer */}
            <div className="testimonials__profile-row">
              <div className="testimonials__client-info">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.clientName}
                  className="testimonials__avatar"
                />
                <div>
                  <h4 className="font-heading testimonials__client-name">
                    {activeReview.clientName}
                  </h4>
                  <p className="testimonials__client-role">
                    {activeReview.role} &bull; <span className="text-gradient-gold">{activeReview.company}</span>
                  </p>
                </div>
              </div>

              <div className="testimonials__right-actions">
                <span className="badge badge--mint">
                  {activeReview.projectType}
                </span>

                {/* Controls */}
                <div className="testimonials__controls">
                  <button
                    onClick={prevTestimonial}
                    className="btn btn--secondary btn--sm btn--icon-only"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="icon-lg" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="btn btn--secondary btn--sm btn--icon-only"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="icon-lg" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Small Slider Dots */}
        <div className="testimonials__dots">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`testimonials__dot-btn ${i === currentIdx ? 'testimonials__dot-btn--active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

