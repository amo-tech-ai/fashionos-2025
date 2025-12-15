import { 
  Camera, 
  Globe, 
  Zap, 
  TrendingUp, 
  Layout, 
  Users, 
  ShoppingBag, 
  Cpu, 
  Sparkles,
  Calendar,
  Share2,
  BarChart3
} from 'lucide-react';
import { Feature, ServiceCard, Testimonial, DirectoryProfile, AIFeature, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Directory', href: '#directory' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Wholesale', href: '#wholesale' },
  { label: 'BTS', href: '#bts' },
];

export const CAPABILITIES: Feature[] = [
  {
    id: '1',
    title: 'Events & Runway',
    description: 'Seamless orchestration for global fashion weeks and private showings.',
    icon: Calendar
  },
  {
    id: '2',
    title: 'Creative Services',
    description: 'High-fidelity production for campaigns, lookbooks, and social.',
    icon: Camera
  },
  {
    id: '3',
    title: 'Commerce',
    description: 'Integrated B2B and DTC distribution channels.',
    icon: ShoppingBag
  },
  {
    id: '4',
    title: 'AI Intelligence',
    description: 'Data-driven insights predicting the next big trend.',
    icon: Zap
  }
];

export const SERVICE_HIGHLIGHTS: ServiceCard[] = [
  {
    id: 's1',
    title: 'Campaign Photography',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    title: 'Runway & Backstage',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    title: 'Ecommerce & Product',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    title: 'Video + Social',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800'
  }
];

export const DIRECTORY_PROFILES: DirectoryProfile[] = [
  {
    id: 'd1',
    name: 'Elena Vance',
    role: 'Fashion Photographer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'd2',
    name: 'Marcus Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'd3',
    name: 'Sarah Jenkins',
    role: 'Stylist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'd4',
    name: 'David O-Keef',
    role: 'Set Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  }
];

export const AI_FEATURES: AIFeature[] = [
  {
    id: 'ai1',
    title: 'Gemini Planning',
    description: 'Automated logistics and scheduling.',
    icon: Cpu
  },
  {
    id: 'ai2',
    title: 'Auto Shot Lists',
    description: 'Generative requirements based on moodboards.',
    icon: Layout
  },
  {
    id: 'ai3',
    title: 'Smart Match',
    description: 'Connect with the perfect creative talent.',
    icon: Users
  },
  {
    id: 'ai4',
    title: 'ROI Reports',
    description: 'Real-time impact analysis.',
    icon: BarChart3
  },
  {
    id: 'ai5',
    title: 'Auto-Captioning',
    description: 'SEO-optimized content generation.',
    icon: Sparkles
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "FashionOS has completely transformed how we manage our global campaigns. It's the silent partner in our success.",
    author: "Alexandra V.",
    role: "Global Marketing Director",
    company: "Maison Lux"
  },
  {
    id: 't2',
    quote: "The AI insights allow us to pivot our creative direction with confidence. A game changer for the industry.",
    author: "Julian R.",
    role: "Editor in Chief",
    company: "Vogue Digital"
  }
];