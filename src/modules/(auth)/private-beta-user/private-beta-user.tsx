import React from 'react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

import AuthForm from '@/components/AuthForm';
import AuthLayout from '@/components/AuthLayout';
import CustomButton from '@/components/common/custom-button/custom-button';
import FormInput from '@/components/common/form-input';
import { PrivateBetaUserForm } from './private-beta-user.types';

const PrivateBetaUserPage = () => {
  const router = useRouter();
  const methods = useForm<PrivateBetaUserForm>();

  const onSubmit = (data: PrivateBetaUserForm) => {
    console.log(data);
  };

  const handleClick = () => {
    router.push('/signup');
  };

  return (
    <AuthLayout>
      <AuthForm
        title=""
        heading="Sign Up for Noair Lab"
        helperText="Enter your institutional email to join the Private Beta"
        linkLabel=""
        link=""
        classNames=""
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

            <CustomButton onClick={handleClick} type="submit">
              Continue
            </CustomButton>
          </form>
        </FormProvider>
      </AuthForm>
    </AuthLayout>
  );
};

export default PrivateBetaUserPage;
