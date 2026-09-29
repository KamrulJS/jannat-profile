export interface ProfileData {
  name: string;
  title: string;
  role: string;
  positioningStatement: string;
  bio: string;
  coreValue: string;
  availabilityStatus: string;
  location: string;
  email: string;
  whatsapp: string;
  socials: {
    linkedin: string;
    behance: string;
    dribbble: string;
    github: string;
    figma: string;
  };
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tools: string[];
  highlightMetric: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  keyAction: string;
  icon: string;
}

export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    sublabel: string;
    proficiency: number;
    highlight: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'E-Commerce' | 'SaaS & Tech' | 'Agency & Corporate';
  thumbnail: string;
  figmaPreviewImg: string;
  liveSitePreviewImg: string;
  summary: string;
  metricsBadge: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  figmaUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period?: string;
  popular?: boolean;
  idealFor: string;
  turnaround: string;
  features: string[];
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
