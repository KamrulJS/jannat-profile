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
                  <span className="workflow__step-btn-label">
                    STEP {item.step}
                  </span>
                  <Icon className="workflow__step-btn-icon" />
                </div>
                <div className="workflow__step-btn-title">
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
                  <h3 className="font-heading font-size-2xl">
                    {currentStep.title}
                  </h3>
                  <p className="color-rose font-weight-600 font-size-sm">
                    {currentStep.subtitle}
                  </p>
                </div>
              </div>

              <p className="color-text-secondary font-size-base">
                {currentStep.description}
              </p>

              {/* Deliverables List */}
              <div>
                <h4 className="form-label u-margin-bottom-xs">KEY DELIVERABLES & SPECS:</h4>
                <div className="workflow-deliverables-list">
                  {currentStep.deliverables.map((del) => (
                    <div key={del} className="workflow-deliverable-item">
                      <CheckCircle2 className="workflow-deliverable-icon" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="workflow-meta-row font-mono-code">
                <div className="workflow-meta-item">
                  <Clock className="workflow-deliverable-icon" />
                  <span>Timeline: {currentStep.duration}</span>
                </div>
                <div className="workflow-meta-item workflow-meta-item--mint">
                  <Sparkles className="icon-md" />
                  <span>Milestone: {currentStep.keyAction}</span>
                </div>
              </div>
            </div>

            {/* Visual Diagram Card */}
            <div className="workflow-node-box">
              <div className="workflow-node-header font-mono-code">
                <span className="color-text-muted">PIPELINE NODE VERIFICATION</span>
                <span className="color-mint font-weight-700">&bull; ACTIVE</span>
              </div>

              <div className="workflow-node-list">
                <div className="workflow-node-item font-mono-code">
                  <span>Stage 01: Audit</span>
                  <span className="color-mint font-weight-700">COMPLETED</span>
                </div>
                <div className="workflow-node-item font-mono-code">
                  <span>Stage 02: Figma UI</span>
                  <span className={`font-weight-700 ${activeStepIdx >= 1 ? 'color-mint' : 'color-text-muted'}`}>
                    {activeStepIdx >= 1 ? 'VERIFIED' : 'PENDING'}
                  </span>
                </div>
                <div className="workflow-node-item font-mono-code">
                  <span>Stage 03: WP Code</span>
                  <span className={`font-weight-700 ${activeStepIdx >= 2 ? 'color-mint' : 'color-text-muted'}`}>
                    {activeStepIdx >= 2 ? 'VERIFIED' : 'PENDING'}
                  </span>
                </div>
                <div className="workflow-node-item font-mono-code">
                  <span>Stage 04: Launch</span>
                  <span className={`font-weight-700 ${activeStepIdx === 3 ? 'color-mint' : 'color-text-muted'}`}>
                    {activeStepIdx === 3 ? 'LIVE DEPLOY' : 'PENDING'}
                  </span>
                </div>
              </div>

              <div className="font-mono-code font-size-xs color-text-muted text-align-center u-padding-top-xs">
                Client video walkthrough included on completion
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
