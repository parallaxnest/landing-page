export interface AssetNode {
  id: string;
  name: string;
  type: 'sensor' | 'hvac' | 'conveyor' | 'robot' | 'server' | 'pipeline';
  zone: string;
  x: number; // percentage coordinate
  y: number; // percentage coordinate
  z?: number;
  status: 'optimal' | 'warning' | 'critical';
  health: number;
  temp?: string;
  load?: string;
  efficiency?: string;
  aiInsight?: string;
}

export interface PipelineStage {
  step: string;
  title: string;
  description: string;
  techDetails: string;
  metrics: string;
  activeColor: 'teal' | 'lavender' | 'coral';
}

export interface CapabilityCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: 'teal' | 'lavender' | 'coral' | 'teal-lavender';
  tags: string[];
  features: string[];
  metricLabel: string;
  metricValue: string;
}

export interface IndustrySolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  features: string[];
  iconUrl: string;
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number | string;
  priceAnnual: number | string;
  featured?: boolean;
  features: string[];
  ctaText: string;
  badge?: string;
  linkMonthly?: string;
  linkAnnual?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface IntegrationNode {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'connected' | 'syncing' | 'idle';
  protocol: string;
  x: number;
  y: number;
}

export interface ArchitectureLayer {
  step: string;
  layer: string;
  component: string;
  description: string;
  flowType: 'teal' | 'lavender' | 'coral';
  specs: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: 'Manufacturing' | 'Facilities' | 'Smart Infrastructure' | 'Industrial' | 'Logistics';
  metric: string;
  metricLabel: string;
  rating: number;
  accentColor: 'teal' | 'lavender' | 'coral';
  avatarInitials: string;
  avatarUrl?: string;
}

