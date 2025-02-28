'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import AuthLayout from '@/components/AuthLayout';
import AuthForm from '@/components/AuthForm';
import FormInput from '@/components/common/form-input';
import CustomButton from '@/components/common/custom-button/custom-button';
import { useRouter } from 'next/navigation';

type ResetForm = {
  password: string;
  confirmPassword: string;
};
const ResetPasswordPage = () => {
  const router = useRouter();
  const methods = useForm<ResetForm>();

  const onSubmit = (data: ResetForm) => {
    console.log(data);
    router.push('/login');
  };

  return (
    <AuthLayout>
      <AuthForm
        title=""
        heading="Reset Password"
        description="Please enter your new password."
        helperText="Remember your password?"
        showHelperTextAfterChildren={true}
        classNames="max-w-[330px] w-full"
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
            <FormInput
              type="password"
              placeholder="New Password"
              name="password"
              className="!w-full"
            />
            <FormInput
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            <CustomButton type="submit">Reset</CustomButton>
          </form>
        </FormProvider>
      </AuthForm>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
