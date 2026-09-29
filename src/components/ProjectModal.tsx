'use client';

import { useState } from 'react';
import { 
  X, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Code2
} from 'lucide-react';
import { ProjectItem } from '@/types';

interface ProjectModalProps {
  project: ProjectItem | null;
  defaultTab?: 'figma' | 'live';
  onClose: () => void;
  onBookCall: () => void;
}

export default function ProjectModal({
  project,
  defaultTab = 'figma',
  onClose,
  onBookCall,
}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'figma' | 'live' | 'case'>(defaultTab);

  if (!project) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        
        {/* Top Header Bar */}
        <div className="modal-header-bar">
          <div className="modal-header-info">
            <div className="service-card__icon-box service-card__icon-box--sm">
              <Sparkles className="icon-lg" />
            </div>
            <div>
              <h3 className="font-heading modal-header-title">
                {project.title}
              </h3>
              <div className="modal-header-sub">
                <span>{project.client}</span>
                <span>&bull;</span>
                <span className="font-mono-code font-weight-700 color-mint">{project.metricsBadge}</span>
              </div>
            </div>
          </div>

          <button onClick={onClose} className="modal-close-btn modal-close-btn--relative">
            <X className="icon-lg" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="modal-tab-bar">
          <div className="modal-tab-group">
            <button
              onClick={() => setActiveTab('figma')}
              className={`btn btn--sm ${activeTab === 'figma' ? 'btn--primary' : 'btn--secondary'}`}
            >
              <Layers className="icon-sm" />
              <span>Figma System Spec</span>
            </button>

            <button
              onClick={() => setActiveTab('live')}
              className={`btn btn--sm ${activeTab === 'live' ? 'btn--primary' : 'btn--secondary'}`}
            >
              <ExternalLink className="icon-sm" />
              <span>Live Site Demo</span>
            </button>

            <button
              onClick={() => setActiveTab('case')}
              className={`btn btn--sm ${activeTab === 'case' ? 'btn--primary' : 'btn--secondary'}`}
            >
              <Code2 className="icon-sm" />
              <span>Case Breakdown</span>
            </button>
          </div>

          <a
            href={project.figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono-code modal-figma-link"
          >
            Figma Link <ExternalLink className="icon-xs" />
          </a>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-scroll-body">
          
          {activeTab === 'figma' && (
            <div className="u-flex-column-lg">
              <div className="modal-preview-wrapper">
                <img
                  src={project.figmaPreviewImg}
                  alt="Figma Wireframes & Tokens"
                  className="modal-preview-img"
                />
                <div className="font-mono-code modal-badge-overlay-gold">
                  Auto-Layout &bull; Tokens &bull; Multi-breakpoint Grids
                </div>
              </div>

              <div className="grid grid--3">
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Typography Scale</span>
                  <span className="modal-spec-val">Satoshi + Open Sans</span>
                </div>
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Design Tokens</span>
                  <span className="modal-spec-val icon-[#E5C494]">100% Shared Variables</span>
                </div>
                <div className="modal-spec-card">
                  <span className="modal-spec-label">Figma Handoff Status</span>
                  <span className="modal-spec-val icon-mint">Zero Spec Ambiguity</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'live' && (
            <div className="u-flex-column-lg">
              <div className="modal-preview-wrapper">
                <img
                  src={project.liveSitePreviewImg}
                  alt="Live WordPress Render"
                  className="modal-preview-img"
                />
                <div className="font-mono-code modal-badge-overlay-mint">
                  99 PageSpeed Score &bull; Sub-second Load
                </div>
              </div>

              <div className="font-mono-code modal-live-bar">
                <span className="font-size-sm">{project.liveUrl}</span>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
                  Open Tab
                </a>
              </div>
            </div>
          )}

          {activeTab === 'case' && (
            <div className="u-flex-column-lg">
              <div className="grid grid--2">
                <div className="modal-case-card">
                  <h4 className="form-label icon-rose u-margin-bottom-xs">The Challenge</h4>
                  <p className="font-size-sm color-text-secondary">{project.challenge}</p>
                </div>

                <div className="modal-case-card">
                  <h4 className="form-label icon-[#E5C494] u-margin-bottom-xs">The Solution</h4>
                  <p className="font-size-sm color-text-secondary">{project.solution}</p>
                </div>
              </div>

              <div className="modal-impact-card">
                <h4 className="form-label icon-mint u-margin-bottom-sm flex-align-center gap-xs">
                  <TrendingUp className="icon-md" /> Quantifiable Business Impact
                </h4>
                <div className="u-flex-column-sm">
                  {project.results.map((res) => (
                    <div key={res} className="flex-align-center gap-xs font-size-sm color-text-primary">
                      <CheckCircle2 className="icon-md icon-mint" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="modal-footer-bar">
          <div className="modal-footer-tags">
            {project.tags.map((t) => (
              <span key={t} className="service-card__tool-badge">
                {t}
              </span>
            ))}
          </div>

          <button onClick={() => { onClose(); onBookCall(); }} className="btn btn--primary btn--sm">
            Build a Similar Project
          </button>
        </div>

      </div>
    </div>
  );
}

