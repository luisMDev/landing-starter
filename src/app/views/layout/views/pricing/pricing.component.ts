import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  public urls = environment.urls;

  public plans = [
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
  ];

  public comparePlans = [
    {
      section: 'Resources',
      list: [
        {
          label: 'Users',
          starter: 'Up to 1000 users',
          pro: 'Up to 10000 users',
          enterprise: 'Unlimited users',
        },
        {
          label: 'Events',
          starter: 'Up to 1000 events',
          pro: 'Up to 10000 events',
          enterprise: 'Unlimited events',
        },
        {
          label: 'Customization',
          starter: 'Basic',
          pro: 'Advanced',
          enterprise: 'Full',
        },
      ],
    },
    {
      section: 'Platform',
      list: [
        {
          label: 'Number of projects',
          starter: '1',
          pro: '5',
          enterprise: 'Unlimited',
        },
        {
          label: 'Number of environments',
          starter: '1',
          pro: '5',
          enterprise: 'Unlimited',
        },
        {
          label: 'Number of domains',
          starter: '1',
          pro: '5',
          enterprise: 'Unlimited',
        },
        {
          label: 'Custom domains',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Webhooks',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
      ],
    },
    {
      section: 'Support',
      list: [
        {
          label: 'Community',
          starter: '<i class="ti ti-check"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Email',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Priority',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Phone',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-x"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
      ],
    },
  ];

  public faq = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can change your plan at any time.',
    },
    {
      question: 'Do I need to sign a long-term contract?',
      answer: 'No, you can cancel your subscription at any time.',
    },
  ];
}
