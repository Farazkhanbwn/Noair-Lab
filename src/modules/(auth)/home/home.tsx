import React from 'react';
import AuthForm from '@/components/AuthForm';
import AuthLayout from '@/components/AuthLayout';
import Link from '@/components/common/custom-link/custom-link';
import { CustomLinkTypes } from '@/components/common/custom-link/custom-link.types';

const HomePageSection = () => {
  return (
    <AuthLayout>
      <AuthForm
        title=""
        heading="Welcome to NOAIR LAB!"
        helperText="You’ve successfully joined our waitlist!We’ll notify you when your access is ready. Stay tuned!"
        linkLabel=""
        link=""
        classNames="max-w-[400px]"
      >
        <Link
          href={'/feed'}
          styleType={CustomLinkTypes.PRIMARY}
          className="self-start !px-4"
        >
          Contact Support
        </Link>
      </AuthForm>
    </AuthLayout>
  );
};

export default HomePageSection;
