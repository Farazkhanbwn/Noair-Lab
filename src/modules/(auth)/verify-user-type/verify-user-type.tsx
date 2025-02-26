import React, { useState } from 'react';

import AuthForm from '@/components/AuthForm';
import AuthLayout from '@/components/AuthLayout';
import PrivateBetaCard from './components/private-beta-card';
import WaitlistCard from './components/waitlist-card';

const VerifyUserTypePage = () => {
  const [selectedCard, setSelectedCard] = useState<string>('privateBeta');

  const handleCardSelection = (cardName: string) => {
    setSelectedCard(cardName);
  };
  return (
    <AuthLayout>
      <AuthForm
        heading="WELCOME TO NOIR LAB!"
        description="Your gateway to innovation, insights, and collaboration"
        title=""
        helperText=""
        linkLabel=""
        showHelperTextAfterChildren={true}
      >
        <div className="flex flex-col gap-5">
          <PrivateBetaCard
            isSelected={selectedCard === 'privateBeta'}
            onSelect={() => handleCardSelection('privateBeta')}
          />
          <WaitlistCard
            isSelected={selectedCard === 'waitlist'}
            onSelect={() => handleCardSelection('waitlist')}
          />
        </div>
      </AuthForm>
    </AuthLayout>
  );
};

export default VerifyUserTypePage;
