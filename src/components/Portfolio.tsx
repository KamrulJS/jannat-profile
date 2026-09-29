'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  TrendingUp
} from 'lucide-react';
import gsap from 'gsap';
import projectsData from '@/data/projects.json';
import { ProjectItem } from '@/types';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem, defaultTab?: 'figma' | 'live') => void;
}

export default function Portfolio({ onSelectProject }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'E-Commerce', 'SaaS & Tech', 'Agency & Corporate'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [activeCategory]);

  return (
    <section id="work" className="section bg-grid-pattern">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__eyebrow">
            <Sparkles className="icon-sm" />
            <span>FEATURED PORTFOLIO & CASE STUDIES</span>
          </div>

          <h2 className="section-header__title font-heading">
            Proof of <span className="text-gradient-gold">Design & Execution</span>
          </h2>

          <p className="section-header__description">
            Real projects delivered with 100% Figma-to-WordPress precision and measurable conversion impact.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="portfolio__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`portfolio__filter-btn ${activeCategory === cat ? 'portfolio__filter-btn--active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div ref={gridRef} className="grid grid--3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              {/* Thumbnail Container */}
              <div className="project-card__thumbnail-wrapper">
                <div className="project-card__mock-header">
                  <div className="project-card__mock-dots">
                    <span className="project-card__mock-dot project-card__mock-dot--red" />
                    <span className="project-card__mock-dot project-card__mock-dot--yellow" />
                    <span className="project-card__mock-dot project-card__mock-dot--green" />
                    <span className="project-card__client-name">{project.client}</span>
                  </div>
                  <span className="project-card__category-tag font-mono-code">
                    {project.category}
                  </span>
                </div>

                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="project-card__image"
                />

                <div className="badge badge--gold project-card__badge-wrapper">
                  <TrendingUp className="icon-sm icon-mint" />
                  <span>{project.metricsBadge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card__body">
                <div>
                  <h3 className="project-card__title font-heading">
                    {project.title}
                  </h3>
                  <p className="project-card__summary">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="service-card__tool-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-card__actions">
                  <button
                    onClick={() => onSelectProject(project as ProjectItem, 'figma')}
                    className="btn btn--secondary btn--sm"
                  >
                    <Layers className="icon-sm" />
                    <span>Figma UI</span>
                  </button>

                  <button
                    onClick={() => onSelectProject(project as ProjectItem, 'live')}
                    className="btn btn--secondary btn--sm"
                  >
                    <ExternalLink className="icon-sm" />
                    <span>Live Site</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
