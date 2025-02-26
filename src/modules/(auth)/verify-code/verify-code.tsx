'use client';

import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import AuthLayout from '@/components/AuthLayout';
import AuthForm from '@/components/AuthForm';
import FormInput from '@/components/common/form-input';
import CustomButton from '@/components/common/custom-button/custom-button';

type VerifyForm = {
  digit0: string;
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
  digit5: string;
};

const VerifyCodePage = () => {
  const [error] = useState('');
  const methods = useForm<VerifyForm>();

  const handleSubmit = async (data: VerifyForm) => {
    console.log('🚀 ~ handleSubmit ~ data:', data);
  };

  return (
    <AuthLayout>
      <AuthForm
        title=""
        heading="Code Verification"
        description="Please enter the code below to verify your account."
        helperText="Didn’t receive the code?"
        linkLabel="Resend Code."
        showHelperTextAfterChildren={true}
      >
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            <div className="flex gap-x-5">
              {Array.from({ length: 6 }).map((_, index) => (
                <FormInput
                  key={index}
                  name={`digit${index}`}
                  type="text"
                  placeholder=""
                  maxLength={1}
                  className="max-w-10 !rounded-[10px] text-center px-3 !py-1"
                  index={index}
                  onMoveToNext={nextIndex => {
                    const nextInput = document.querySelector(
                      `input[name=digit${nextIndex}]`
                    ) as HTMLInputElement;
                    nextInput?.focus();
                  }}
                />
              ))}
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <CustomButton type="submit">Verify</CustomButton>
          </form>
        </FormProvider>
      </AuthForm>
    </AuthLayout>
  );
};

export default VerifyCodePage;
