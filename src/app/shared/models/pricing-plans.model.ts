import { PricingPlan } from '../interfaces/pricing-plan.interface';

export const PricingPlansModel: Record<string, PricingPlan[]> = {
  en: [
    {
      name: 'Starter',
      price: '$0',
      sub: 'per member/month',
      description: 'For testing and evaluation or small-scale deployments.      ',
      features: ['Up to 1000 users', 'Up to 1000 events', 'Email support'],
      featured: false,
    },
    {
      name: 'Pro',
      price: '$99',
      sub: 'per member/month',
      description: 'Good place for bigger projects, startups, and businesses.      ',
      features: ['Up to 10000 users', 'Up to 10000 events', 'Priority support'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '$500',
      sub: 'per organization/month',
      description: 'For businesses that need Premium Enterprise Support, custom SLAs, and/or very large deployments.',
      features: ['Unlimited users', 'Unlimited events', 'Phone support'],
      featured: false,
    },
  ],
  es: [
    {
      name: 'Starter',
      price: '$0',
      sub: 'por miembro/mes',
      description: 'Para pruebas y evaluaciones o despliegues de poca escala.',
      features: ['Hasta 1000 usuarios', 'Hasta 1000 eventos', 'Soporte por correo electrónico'],
      featured: false,
    },
    {
      name: 'Pro',
      price: '$99',
      sub: 'por miembro/mes',
      description: 'Lugar ideal para proyectos más grandes, startups y empresas.',
      features: ['Hasta 10000 usuarios', 'Hasta 10000 eventos', 'Soporte prioritario'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '$500',
      sub: 'por organización/mes',
      description: 'Para empresas que necesitan soporte empresarial avanzado, SLA personalizado y/o despliegues grandes.',
      features: ['Sin límite de usuarios', 'Sin límite de eventos', 'Soporte por teléfono'],
      featured: false,
    },
  ],
};
