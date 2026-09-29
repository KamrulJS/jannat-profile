'use client';

import { useState, FormEvent } from 'react';
import { 
  Sparkles, 
  Send, 
  Calendar, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  User, 
  DollarSign,
  Layers,
  PhoneCall
} from 'lucide-react';
import profileData from '@/data/profile.json';

interface InquirySectionProps {
  onOpenDiscovery: () => void;
  selectedPlanPrefill?: string;
  selectedServicePrefill?: string;
}

export default function InquirySection({
  onOpenDiscovery,
  selectedPlanPrefill = '',
  selectedServicePrefill = ''
}: InquirySectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: selectedPlanPrefill || selectedServicePrefill || 'Full Business Platform',
    budget: '$2,000 - $5,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const projectOptions = [
    'Figma UI/UX Design System',
    'Pixel-Perfect WordPress Build',
    'Full Business Platform (Figma + WP)',
    'WooCommerce E-Commerce Store',
    'Performance & Speed Optimization',
  ];

  const budgetOptions = [
    '< $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000+',
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section bg-grid-pattern">
      <div className="container">
        
        {/* Main Glass Card Wrapper */}
        <div className="glass-card inquiry-card">
          <div className="grid grid--2 inquiry-grid">
            
            {/* Left Info Column */}
            <div className="inquiry-info">
              <div>
                <div className="section-header__eyebrow inquiry-info__header-eyebrow">
                  <Sparkles className="icon-sm" />
                  <span>START A PROJECT</span>
                </div>

                <h2 className="font-heading inquiry-info__title">
                  Have a project in mind? <span className="text-gradient-gold">Let&apos;s talk.</span>
                </h2>

                <p className="inquiry-info__desc">
                  Turn your concepts into a polished, high-performing reality—without design compromises or handoff friction.
                </p>
              </div>

              {/* Direct Info Badges */}
              <div className="inquiry-info__contact-list">
                <a href={`mailto:${profileData.email}`} className="glass-card inquiry-info__contact-item">
                  <div className="service-card__icon-box service-card__icon-box--sm">
                    <Mail className="icon-lg" />
                  </div>
                  <div>
                    <div className="font-mono-code inquiry-info__contact-label">Direct Email</div>
                    <div className="font-heading inquiry-info__contact-val">
                      {profileData.email}
                    </div>
                  </div>
                </a>

                <a href={`https://wa.me/${profileData.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="glass-card inquiry-info__contact-item">
                  <div className="badge badge--mint btn--icon-only">
                    <PhoneCall className="icon-lg" />
                  </div>
                  <div>
                    <div className="font-mono-code inquiry-info__contact-label">WhatsApp & Phone</div>
                    <div className="font-heading inquiry-info__contact-val--mint">
                      {profileData.whatsapp}
                    </div>
                  </div>
                </a>
              </div>

              {/* Quick Discovery Call Box */}
              <div className="inquiry-info__call-box">
                <div className="font-mono-code inquiry-info__call-header">
                  <Calendar className="icon-md" />
                  <span>PREFER A LIVE CHAT?</span>
                </div>
                <p className="inquiry-info__call-desc">
                  Skip the contact form and pick a 15-minute slot directly on my calendar for a strategy discussion.
                </p>
                <button onClick={onOpenDiscovery} className="btn btn--primary btn--full">
                  Schedule 15-min Discovery Call
                </button>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="inquiry-form-card">
              {submitted ? (
                <div className="inquiry-success-box">
                  <div className="inquiry-success-icon">
                    <CheckCircle2 className="icon-2xl" />
                  </div>
                  <h3 className="font-heading font-size-2xl">Inquiry Received!</h3>
                  <p className="font-size-sm color-text-secondary max-width-24rem">
                    Thank you for reaching out. I will review your project details and get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn--secondary btn--sm">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <h3 className="font-heading inquiry-form__title">
                    <MessageSquare className="icon-lg icon-[#E5C494]" />
                    <span>Project Inquiry Form</span>
                  </h3>

                  <div className="grid grid--2">
                    <div className="form-group">
                      <label className="form-label">
                        <User className="icon-sm icon-[#E5C494]" /> Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        <Mail className="icon-sm icon-[#E5C494]" /> Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@brand.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Layers className="icon-sm icon-[#E5C494]" /> Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="form-select"
                    >
                      {projectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <DollarSign className="icon-sm icon-[#E5C494]" /> Estimated Budget
                    </label>
                    <div className="grid grid--3">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`btn ${formData.budget === b ? 'btn--primary' : 'btn--secondary'} btn--sm`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Project Details & Goals
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your brand, current site challenges, target launch date..."
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn--primary btn--full inquiry-form__submit-btn">
                    <span>Submit Project Inquiry</span>
                    <Send className="icon-md" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

