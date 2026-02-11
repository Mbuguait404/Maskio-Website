/**
 * Type definitions for Skio website
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  features: string[];
  icon: string;
}

export interface Problem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TechStack {
  name: string;
  desc: string;
}

export interface TimelineItem {
  year: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
}

export interface Recognition {
  title: string;
  organization: string;
  description: string;
  year: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author?: {
    name: string;
    role: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Stat {
  label: string;
  value: string;
}
