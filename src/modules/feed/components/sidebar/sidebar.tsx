import React, { useState } from 'react';
import SuggestedConnections from './suggested-connections';
import UserProfile from './user-profile';
import CustomButton from '@/components/common/custom-button/custom-button';
import { CustomButtonTypes } from '@/components/common/custom-button/custom-button.types';
import Fragment from '@/components/fragment/fragment';
import useWindowDimensions from '../../../../hooks/use-window-dimenstion';

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const { width = 769 } = useWindowDimensions();

  return (
    <div className="w-full max-w-full md:max-w-[330px] flex flex-col gap-5">
      <UserProfile hideHistory={!(showMore || width > 768)} />
      <Fragment hide={!(showMore || width > 768)}>
        <SuggestedConnections />
      </Fragment>
      <CustomButton
        onClick={() => setShowMore(!showMore)}
        styleType={CustomButtonTypes.TERTIARY}
        className="text-pure-black w-full hover:bg-light-grey-100 rounded-[5px] md:hidden"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </CustomButton>
    </div>
  );
};

export default Sidebar;
