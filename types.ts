import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceCard {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface DirectoryProfile {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface AIFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}