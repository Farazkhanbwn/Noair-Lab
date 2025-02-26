import { PricingTier } from './pricing-card.type';
import StarIcon from 'assets/icons/icon-star.svg';

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div className="relative pt-[8rem] flex flex-col overflow-hidden rounded-xl text-black shadow-lg bg-white">
      <div className="px-10 pt-8 pb-10">
        <ul className="flex flex-col gap-7 mb-10">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <StarIcon className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm whitespace-pre">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
