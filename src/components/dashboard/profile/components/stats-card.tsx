import { ProfileStats } from '../../../../modules/(user)/profile/profile.types';

const StatCard = ({ count, label, index, classNames }: ProfileStats) => {
  const isLastItem = index === 3;
  const isSecondItemOnXS = index === 1;
  return (
    <p
      className={`flex flex-col items-center gap-1
      ${!isLastItem ? 'border-r-2 border-stroke-grey' : ''}
      ${isSecondItemOnXS ? '!border-r-0 border-stroke-grey' : ''}
      ${isSecondItemOnXS ? 'xs:!border-r-2' : ''} ${classNames}
      `}
    >
      <span className="text-primary-color font-bold">{count}</span>
      <span>{label}</span>
    </p>
  );
};

export default StatCard;
