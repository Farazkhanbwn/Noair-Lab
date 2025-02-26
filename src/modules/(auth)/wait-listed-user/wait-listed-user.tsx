import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import AuthForm from '@/components/AuthForm';
import AuthLayout from '@/components/AuthLayout';
import CustomButton from '@/components/common/custom-button/custom-button';
import FormInput from '@/components/common/form-input';
import { WaitListedUserForm } from './wait-listed-user.types';

const WaitListedUserPage = () => {
  const methods = useForm<WaitListedUserForm>();

  const onSubmit = (data: WaitListedUserForm) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <AuthForm
        title=""
        heading="Join the Waitlist"
        helperText="Your institution isn't part of the Private Beta yet, but you can join the waitlist."
        linkLabel=""
        link=""
        classNames="max-w-[400px]"
        toolTip="Only emails ending in are eligible for the Waitlist."
        toolTipLink={{
          label: '@university.edu',
          href: 'https://university.edu',
        }}
      >
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="space-y-5 max-w-[330px]"
          >
            <FormInput
              type="email"
              name="email"
              placeholder="name@university.edu."
            />

            <FormInput
              type="text"
              name="user-linkedin"
              placeholder="https://www.linkedin.com/in/username"
            />

            <CustomButton type="submit">Join Waitlist</CustomButton>
          </form>
        </FormProvider>
      </AuthForm>
    </AuthLayout>
  );
};

export default WaitListedUserPage;
