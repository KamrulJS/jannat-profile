'use client';

import { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Code, 
  Rocket, 
  CheckCircle2, 
  Clock, 
  Sparkles
} from 'lucide-react';
import workflowData from '@/data/workflow.json';

export default function Workflow() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'Layers': return Layers;
      case 'Code': return Code;
      case 'Rocket': return Rocket;
      default: return Sparkles;
    }
  };

  const currentStep = workflowData[activeStepIdx];
  const StepIcon = getStepIcon(currentStep.icon);

  return (
    <section id="workflow" className="section bg-grid-pattern">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Sparkles className="icon-sm" />
            <span>4-STEP WORKFLOW PIPELINE</span>
          </div>

          <h2 className="section-header__title font-heading">
            How We Go From <span className="text-gradient-gold">Concept to Launch</span>
          </h2>

          <p className="section-header__description">
            A battle-tested 4-step pipeline ensuring zero design compromises, sub-second page speed, and seamless handover.
          </p>
        </div>

        {/* Pipeline Bar Buttons */}
        <div className="workflow__pipeline-bar">
          {workflowData.map((item, idx) => {
            const Icon = getStepIcon(item.icon);
            const isActive = idx === activeStepIdx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIdx(idx)}
                className={`workflow__step-btn ${isActive ? 'workflow__step-btn--active' : ''}`}
              >
                <div className="workflow__step-btn-header">
                  <span className={`font-mono-code ${isActive ? 'text-gold-xs' : 'text-muted-xs'}`}>
                    STEP {item.step}
                  </span>
                  <Icon className={`icon-lg ${isActive ? 'icon-[#E5C494]' : 'icon-[#6B7280]'}`} />
                </div>
                <div className={`font-heading ${isActive ? 'text-primary-base' : 'text-secondary-base'}`}>
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Content Display */}
        <div className="glass-card workflow__display">
          <div className="workflow-display-grid">
            
            {/* Overview */}
            <div className="workflow-overview">
              <div className="workflow-step-header">
                <div className="workflow-step-number">
                  {currentStep.step}
                </div>
                <div>
                  <h3 className="font-heading text-title-2xl">
                    {currentStep.title}
                  </h3>
                  <p className="text-subtitle-rose">
                    {currentStep.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-desc-lg">
                {currentStep.description}
              </p>

              {/* Deliverables List */}
              <div>
                <h4 className="form-label mb-2">Key Deliverables & Specs:</h4>
                <div className="flex-col-gap-2">
                  {currentStep.deliverables.map((del) => (
                    <div key={del} className="workflow-deliverable-item">
                      <CheckCircle2 className="icon-lg icon-[#E5C494]" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="workflow-meta-row font-mono-code">
                <div className="workflow-meta-item">
                  <Clock className="icon-md icon-[#E5C494]" />
                  <span>Timeline: {currentStep.duration}</span>
                </div>
                <div className="workflow-meta-item text-mint">
                  <Sparkles className="icon-md" />
                  <span>Milestone: {currentStep.keyAction}</span>
                </div>
              </div>
            </div>

            {/* Visual Diagram Card */}
            <div className="workflow-node-box">
              <div className="workflow-node-header font-mono-code">
                <span className="text-muted">PIPELINE NODE VERIFICATION</span>
                <span className="text-mint font-bold">&bull; ACTIVE</span>
              </div>

              <div className="workflow-node-list">
                <div className="workflow-node-item font-mono-code">
                  <span>Stage 01: Audit</span>
                  <span className="text-mint font-bold">COMPLETED</span>
                </div>
                <div className="workflow-node-item font-mono-code">
                  <span>Stage 02: Figma UI</span>
                  <span className={`font-bold ${activeStepIdx >= 1 ? 'text-mint' : 'text-muted'}`}>
                    {activeStepIdx >= 1 ? 'VERIFIED' : 'PENDING'}
                  </span>
                </div>
                <div className="workflow-node-item font-mono-code">
                  <span>Stage 03: WP Code</span>
                  <span className={`font-bold ${activeStepIdx >= 2 ? 'text-mint' : 'text-muted'}`}>
                    {activeStepIdx >= 2 ? 'VERIFIED' : 'PENDING'}
                  </span>
                </div>
                <div className="workflow-node-item font-mono-code">
                  <span>Stage 04: Launch</span>
                  <span className={`font-bold ${activeStepIdx === 3 ? 'text-mint' : 'text-muted'}`}>
                    {activeStepIdx === 3 ? 'LIVE DEPLOY' : 'PENDING'}
                  </span>
                </div>
              </div>

              <div className="workflow-node-footer font-mono-code">
                Client video walkthrough included on completion
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
