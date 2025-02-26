import React, { FC } from 'react';
import { FeedCardProps } from '../feed.interface';

const FeedCard: FC<FeedCardProps> = ({
  heading,
  children,
  classNames = '',
}) => {
  return (
    <div className={`${classNames}`}>
      {heading && (
        <h2 className="heading-secondary font-bold p-3 pt-4">{heading}</h2>
      )}
      {children}
    </div>
  );
};

export default FeedCard;
