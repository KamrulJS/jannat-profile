'use client';

import { useState } from 'react';
import { Sparkles, Plus, Minus, HelpCircle } from 'lucide-react';
import faqData from '@/data/faq.json';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section bg-grid-pattern">
      <div className="container--narrow">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Sparkles className="icon-sm" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="section-header__title font-heading">
            Clear Answers to <span className="text-gradient-gold">Your Questions</span>
          </h2>

          <p className="section-header__description">
            Everything you need to know about the design system handoff, WordPress codebase, and timelines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.question} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="faq-item__button"
                >
                  <div className="faq-item__question-group">
                    <div className="service-card__icon-box service-card__icon-box--xs">
                      <HelpCircle className="icon-md" />
                    </div>
                    <p className="faq-item__question font-heading">
                      {faq.question}
                    </p>
                  </div>

                  <div className="faq-item__toggle-icon">
                    {isOpen ? <Minus className="icon-md" /> : <Plus className="icon-md" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-item__answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

