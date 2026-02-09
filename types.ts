import { LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  platforms?: string[];
  processStep?: string[];
  features: string[];
  industries: string[];
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  CONTACT = '/contact',
  SERVICE_APP = '/services/app-development',
  SERVICE_WEB = '/services/web-development',
  SERVICE_AI = '/services/ai-automation',
  SERVICE_SAAS = '/services/saas-mvp',
  PRIVACY = '/privacy-policy',
  TERMS = '/terms-conditions'
}

export interface NavLink {
  label: string;
  path: string;
}