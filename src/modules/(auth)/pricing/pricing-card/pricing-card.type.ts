export type BillingPeriod = 'Month' | 'Year';
export type UserType = 'student' | 'professional' | 'enterprise';

export interface PricingFeature {
  text: string;
}

export interface PricingTier {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: PricingFeature[];
}
