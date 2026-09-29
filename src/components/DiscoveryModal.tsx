'use client';

import { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Mail, 
  Video 
} from 'lucide-react';
import profileData from '@/data/profile.json';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiscoveryModal({ isOpen, onClose }: DiscoveryModalProps) {
  const [selectedDate, setSelectedDate] = useState('2026-10-02');
  const [selectedTime, setSelectedTime] = useState('10:00 AM EST');
  const [step, setStep] = useState<'pick' | 'info' | 'confirmed'>('pick');
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', notes: '' });

  if (!isOpen) return null;

  const dates = [
    { day: 'Wed', date: 'Oct 01', val: '2026-10-01' },
    { day: 'Thu', date: 'Oct 02', val: '2026-10-02' },
    { day: 'Fri', date: 'Oct 03', val: '2026-10-03' },
    { day: 'Mon', date: 'Oct 06', val: '2026-10-06' },
  ];

  const timeSlots = [
    '09:00 AM EST',
    '10:00 AM EST',
    '11:30 AM EST',
    '02:00 PM EST',
    '03:30 PM EST',
    '05:00 PM EST',
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content modal-content--discovery">
        
        <button onClick={onClose} className="modal-close-btn">
          <X className="icon-lg" />
        </button>

        {/* Header */}
        <div className="modal-discovery-header">
          <div className="modal-discovery-icon-box">
            <Video className="icon-xl" />
          </div>
          <div>
            <h3 className="font-heading modal-header-title">Book 15-min Discovery Call</h3>
            <p className="font-size-xs color-text-muted">With {profileData.fullName} &bull; Google Meet</p>
          </div>
        </div>

        {step === 'pick' && (
          <div className="u-flex-column-lg">
            <div>
              <label className="form-label u-margin-bottom-sm">
                <Calendar className="icon-sm icon-[#E5C494]" /> Select Date
              </label>
              <div className="grid grid--4 gap-xs">
                {dates.map((d) => (
                  <button
                    key={d.val}
                    type="button"
                    onClick={() => setSelectedDate(d.val)}
                    className={`btn ${selectedDate === d.val ? 'btn--primary' : 'btn--secondary'} btn--sm btn--date-pick`}
                  >
                    <span className="font-mono-code font-size-xs opacity-80">{d.day}</span>
                    <span>{d.date}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="form-label u-margin-bottom-sm">
                <Clock className="icon-sm icon-[#E5C494]" /> Select Time Slot
              </label>
              <div className="grid grid--3 gap-xs">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`btn ${selectedTime === t ? 'btn--primary' : 'btn--secondary'} btn--sm`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => setStep('info')} className="btn btn--primary btn--full u-margin-top-xs">
              Continue to Details &rarr;
            </button>
          </div>
        )}

        {step === 'info' && (
          <form onSubmit={handleConfirm} className="u-flex-column-md">
            <div className="font-mono-code modal-live-bar">
              <span>Selected Slot:</span>
              <span className="icon-[#E5C494] font-weight-700">{selectedDate} @ {selectedTime}</span>
            </div>

            <div className="form-group">
              <label className="form-label">
                <User className="icon-sm icon-[#E5C494]" /> Your Full Name
              </label>
              <input
                type="text"
                required
                value={clientInfo.name}
                onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
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
                value={clientInfo.email}
                onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                placeholder="alex@company.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                What would you like to focus on during our call?
              </label>
              <textarea
                rows={3}
                value={clientInfo.notes}
                onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                placeholder="e.g. Redesigning our SaaS website in Figma & migrating to custom WordPress ACF templates..."
                className="form-textarea"
              />
            </div>

            <div className="flex-align-center gap-xs u-padding-top-xs">
              <button type="button" onClick={() => setStep('pick')} className="btn btn--secondary btn--sm">
                &larr; Back
              </button>
              <button type="submit" className="btn btn--primary btn--full">
                Confirm Booking
              </button>
            </div>
          </form>
        )}

        {step === 'confirmed' && (
          <div className="inquiry-success-box">
            <div className="inquiry-success-icon">
              <CheckCircle2 className="icon-2xl" />
            </div>
            <h3 className="font-heading font-size-2xl">Discovery Call Booked!</h3>
            <p className="font-size-sm color-text-secondary max-width-22rem">
              A Google Meet invitation has been sent to <span className="icon-[#E5C494] font-weight-700">{clientInfo.email}</span> for {selectedDate} at {selectedTime}.
            </p>
            <button onClick={onClose} className="btn btn--secondary btn--sm">
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

