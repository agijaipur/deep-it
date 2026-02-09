import { 
  Smartphone, 
  Globe, 
  Bot, 
  Rocket, 
  Palette, 
  Cloud 
} from 'lucide-react';
import { PageRoute, ServiceData, NavLink } from './types';

export const COMPANY_NAME = "Deepsikha IT Consultancy";
export const COMPANY_ADDRESS = "1 Belmont Rd, St Andrew's, Bristol, United Kingdom, BS6 5AN";
export const CONTACT_EMAIL = "support@deepsikhaitconsultancy.info";
export const CONTACT_PHONE = "+44 7445 162104";

export const SERVICES: ServiceData[] = [
  {
    id: 'app-development',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile solutions for Android & iOS.',
    fullDescription: 'We craft high-performance, user-centric mobile applications that drive engagement. Whether you need a native iOS app, an Android solution, or a cross-platform Flutter/React Native experience, our team delivers robust, scalable mobile products.',
    icon: Smartphone,
    platforms: ['iOS (Swift)', 'Android (Kotlin)', 'Flutter', 'React Native'],
    features: ['Real-time Synchronization', 'Offline Capabilities', 'Push Notifications', 'Secure Authentication'],
    industries: ['FinTech', 'Healthcare', 'E-commerce', 'Logistics'],
    processStep: ['Requirements Analysis', 'UI/UX Design', 'Agile Development', 'QA Testing', 'App Store Deployment']
  },
  {
    id: 'web-development',
    title: 'Custom Web Development',
    shortDescription: 'Scalable, SEO-friendly, and responsive web applications.',
    fullDescription: 'From corporate websites to complex enterprise web portals, we build digital experiences that are fast, secure, and built for growth. utilizing modern frameworks like React, Next.js, and Node.js.',
    icon: Globe,
    platforms: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    features: ['Responsive Design', 'SEO Optimization', 'CMS Integration', 'High Performance'],
    industries: ['Corporate', 'Education', 'Retail', 'Real Estate'],
    processStep: ['Architecture Planning', 'Frontend/Backend Coding', 'Integration', 'Performance Tuning', 'Launch']
  },
  {
    id: 'ai-automation',
    title: 'AI Agent & Automation',
    shortDescription: 'Intelligent AI solutions to automate workflows and enhance decision making.',
    fullDescription: 'Leverage the power of Generative AI and Machine Learning. We build custom AI agents, chatbots, and automation workflows that reduce operational costs and unlock new insights for your business.',
    icon: Bot,
    platforms: ['Python', 'TensorFlow', 'OpenAI API', 'Gemini API', 'LangChain'],
    features: ['Natural Language Processing', 'Predictive Analytics', 'Automated Customer Support', 'Data Extraction'],
    industries: ['Customer Service', 'Data Analysis', 'Legal Tech', 'Marketing'],
    processStep: ['Data Assessment', 'Model Selection', 'Training/Fine-tuning', 'Integration', 'Monitoring']
  },
  {
    id: 'saas-mvp',
    title: 'SaaS & MVP Development',
    shortDescription: 'Rapid prototyping and full-scale SaaS product engineering.',
    fullDescription: 'Turn your idea into a market-ready product. We specialize in building Minimum Viable Products (MVPs) for startups and scalable SaaS architectures for established enterprises.',
    icon: Rocket,
    platforms: ['Cloud Native', 'Microservices', 'Docker', 'Kubernetes'],
    features: ['Multi-tenancy', 'Subscription Management', 'Scalable Architecture', 'API-first Design'],
    industries: ['Startups', 'Enterprise Software', 'B2B Services'],
    processStep: ['Concept Validation', 'Prototype', 'MVP Build', 'User Feedback Loop', 'Scaling']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    shortDescription: 'User-centric interfaces that are intuitive and visually stunning.',
    fullDescription: 'Design is not just about looks; it is about how it works. Our design team creates seamless user journeys and beautiful interfaces.',
    icon: Palette,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    industries: ['All Industries'],
    processStep: ['Research', 'Wireframe', 'Visual Design', 'Handoff']
  },
  {
    id: 'cloud-integration',
    title: 'Cloud & API Integration',
    shortDescription: 'Seamless system connectivity and cloud infrastructure management.',
    fullDescription: 'We connect disparate systems and migrate your infrastructure to the cloud for better reliability and security.',
    icon: Cloud,
    features: ['AWS/Azure/GCP', 'API Development', 'Legacy Migration', 'Serverless'],
    industries: ['Enterprise', 'Logistics'],
    processStep: ['Audit', 'Strategy', 'Migration/Integration', 'Optimization']
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: PageRoute.HOME },
  { label: 'About Us', path: PageRoute.ABOUT },
  { label: 'Services', path: PageRoute.SERVICES },
  { label: 'Contact', path: PageRoute.CONTACT },
];