import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { SafePipe } from '@luismdev/ngx-utils/pipes';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule, SafePipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  public urls = environment.urls;

  public brands: string[] = [
    'https://novu.co/static/hemnet-69bd8f63b6d17db3dfff5dd6c59825dd.svg',
    'https://novu.co/static/mongo-db-b0ca427d409133f6e3f010544e44ddf6.svg',
    'https://novu.co/static/unity-a7890c15181b314e465a25dabf6e9c6f.svg',
    'https://novu.co/static/capgemini-e6fc9159b556987df65a0bde63d4a387.svg',
    'https://novu.co/static/siemens-8c3151faa401d398dfcee376ff0dc953.svg',
    'https://novu.co/static/siemens-8c3151faa401d398dfcee376ff0dc953.svg',
    'https://novu.co/static/capgemini-e6fc9159b556987df65a0bde63d4a387.svg',
    'https://novu.co/static/mongo-db-b0ca427d409133f6e3f010544e44ddf6.svg',
    'https://novu.co/static/unity-a7890c15181b314e465a25dabf6e9c6f.svg',
    'https://novu.co/static/hemnet-69bd8f63b6d17db3dfff5dd6c59825dd.svg',
  ];

  public howItWorks = [
    {
      img: 'https://novu.co/static/template-e68a9bca3c04a8937a4500e8b11850d9.svg',
      title: 'Create a achievement',
      description: `Create a new achievement in the Open Loyalty admin panel. Set the rules and rewards for your customers.`,
    },
    {
      img: 'https://novu.co/static/providers-6fa5b38bef0d9b6e7c824c8dadb41ab9.svg',
      title: 'Send an event',
      description: `Send an event trigger using one of our community built SDK's, and we will handle it from there.`,
    },
    {
      img: 'https://novu.co/static/trigger-2fd96077fb7ffb096e06775ecc775986.svg',
      title: 'See the results',
      description: `Watch as your customers complete the achievement and get rewarded for their loyalty.`,
    },
  ];

  public demos = [
    {
      img: 'https://via.placeholder.com/600x200',
      title: 'Feature 1',
      description: `Feature 1 description `,
    },
    {
      img: 'https://via.placeholder.com/600x200',
      title: 'API First',
      description: `Feature 2 description `,
    },
    {
      img: 'https://via.placeholder.com/600x200',
      title: 'Feature 3',
      description: `Feature 3 description `,
    },
    {
      img: 'https://via.placeholder.com/600x200',
      title: 'Feature 4',
      description: `Feature 4 description `,
    },
    {
      img: 'https://via.placeholder.com/600x200',
      title: 'Feature 5',
      description: `Feature 5 description `,
    },
    {
      img: 'https://via.placeholder.com/600x200',
      title: 'Feature 6',
      description: `Feature 6 description `,
    },
  ];

  public features = [
    {
      img: 'https://landing-open-rewards.web.app/assets/features/achievements.webp',
      title: 'Achievements',
      description: `Set challenges with goals based on transactional data, customer behavior or activity streaks. Create simple milestones or multi-dimensional achievements composed of several rules. `,
      col: 'col-6',
      soon: false,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/points.webp',
      title: 'Points',
      description: `Configure custom events and give different amount of points for activities unique to your business.`,
      col: 'col-3',
      soon: false,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/tiers.webp',
      title: 'Tiers',
      description: `Assign specific benefits to each tier, such as permanent discounts and special point multipliers.`,
      col: 'col-3',
      soon: false,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/battle-pass.webp',
      title: 'Battle pass',
      description: `Set challenges with goals based on transactional data, customer behavior or activity streaks. Create simple milestones or multi-dimensional achievements composed of several rules. `,
      col: 'col-3',
      soon: true,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/coupons.webp',
      title: 'Coupons',
      description: `Choose between a selection of coupon redemption rules or allow users to redeem coupons from the rewards catalog or in-store.`,
      col: 'col-3',
      soon: true,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/referrals.webp',
      title: 'Referrals',
      description: `Referrals are a powerful promotional tactic, helping businesses acquire customers more easily and cost-effectively.`,
      col: 'col-3',
      soon: true,
    },
    {
      img: 'https://landing-open-rewards.web.app/assets/features/notifications.webp',
      title: 'Webhooks',
      description: `The new webhook mechanism is based on subscriptions to individual events occurring in the system. `,
      col: 'col-6',
      soon: false,
    },
  ];

  public activeFeature = 0;

  public codePlatforms = [
    {
      img: 'https://appwrite.io/images/platforms/dark/flutter.svg',
      title: 'Flutter',
      link: '/docs/quick-starts/flutter',
    },
    {
      img: 'https://appwrite.io/images/platforms/dark/nextjs.svg',
      title: 'nextjs',
      link: '/docs/quick-starts/nextjs',
    },
    {
      img: 'https://appwrite.io/images/platforms/dark/react.svg',
      title: 'react',
      link: '/docs/quick-starts/react',
    },
    {
      img: 'https://appwrite.io/images/platforms/dark/svelte.svg',
      title: 'svelte',
      link: '/docs/quick-starts/svelte',
    },
    {
      img: 'https://appwrite.io/images/platforms/dark/nuxt.svg',
      title: 'nuxt',
      link: '/docs/quick-starts/nuxt',
    },
    {
      img: 'https://appwrite.io/images/platforms/dark/vue.svg',
      title: 'vue',
      link: '/docs/quick-starts/vue',
    },
    {
      img: 'https://appwrite.io/images/platforms/dark/angular.svg',
      title: 'angular',
      link: '/docs/quick-starts/angular',
    },
    {
      img: 'https://appwrite.io/images/platforms/dark/apple.svg',
      title: 'apple',
      link: '/docs/quick-starts/apple',
    },
    {
      img: 'https://appwrite.io/images/platforms/dark/android.svg',
      title: 'android',
      link: '/docs/quick-starts/android',
    },
    {
      img: 'https://appwrite.io/images/platforms/dark/react.svg',
      title: 'react',
      link: '/docs/quick-starts/react',
    },
    {
      img: 'https://appwrite.io/images/platforms/dark/react-native.svg',
      title: 'react-native',
      link: '/docs/quick-starts/react-native',
    },
  ];

  public code: string = `
 
  <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">import</span></span></span> { createClient } <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">from</span></span></span> <span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"@libsql/client"</span></span></span>;
              
  <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">const</span></span></span> client = createClient({
    <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">url</span></span></span>: <span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"file:replica.db"</span></span></span>,
    <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">syncUrl</span></span></span>: <span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"libsql://..."</span></span></span>,
    <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">authToken</span></span></span>: <span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"..."</span></span></span>,
  });
  
  <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">const</span></span></span> result = <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">await</span></span></span> client.execute({
    <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">sql</span></span></span>: <span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"SELECT * FROM users WHERE id = ?"</span></span></span>,
    <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">args</span></span></span>: [<span class="hljs-number"><span class="hljs-number"><span class="hljs-number">1</span></span></span>],
  });
  `;
}
